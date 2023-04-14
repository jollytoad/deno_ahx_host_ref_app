import { renderHTML } from "$http_render_fns/render_html.tsx";
import { byMethod } from "$http_fns/method.ts";
import { HomePage } from "@/components/HomePage.tsx";

export default byMethod({
  GET: renderHTML(HomePage),
});
