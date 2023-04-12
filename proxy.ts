import { renderHTML } from "$http_render_fns/render_html.tsx";
import { byPattern, type RouteHandler } from "$http_fns/pattern.ts";
import { interceptResponse } from "$http_fns/intercept.ts";
import type { Skip } from "$http_fns/types.ts";
import { Page } from "./components/Page.tsx";

const FULL_PAGE_HEADER = "AHX-Full-Page";
const BASE_REQ_URL_HEADER = "AHX-Base-Req-URL";

export default (registryUrl: string) =>
  byPattern(
    "/addons*",
    interceptResponse(
      registryProxy(registryUrl),
      fullPage,
    ),
  );

const registryProxy = (registryUrl: string): RouteHandler => (req, info) => {
  const rest = info.pathname.groups[0] || "";

  const url = new URL(`${registryUrl}${rest}`);
  url.search = info.search.input;

  const { method, body } = req;

  const headers = new Headers(req.headers);
  headers.set(BASE_REQ_URL_HEADER, new URL(basePath(info), req.url).href);

  return fetch(url, { method, headers, body });
};

function basePath({ pathname }: URLPatternResult) {
  return pathname.input.slice(0, -pathname.groups[0].length || undefined);
}

async function fullPage(req: Request, res: Response | Skip) {
  if (isHtml(res) && isFullPage(res)) {
    return renderHTML(Page)(req, {
      breadcrumbs: [["Home", "/"], ["", res.url]],
      content: await res.text(),
    });
  }
}

function isHtml(res: Response | Skip): res is Response {
  return res?.headers.get("content-type")?.startsWith("text/html") || false;
}

function isFullPage(res: Response | Skip): res is Response {
  return res?.headers.has(FULL_PAGE_HEADER) || false;
}
