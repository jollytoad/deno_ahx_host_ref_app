// deno-lint-ignore-file require-await
import { byMethod } from "$http_fns/method.ts";
import { ok } from "$http_fns/response/ok.ts";

export default byMethod({
  GET: getSuperSecretData,
  POST: performReallyDangerousAction,
});

async function getSuperSecretData() {
  // TODO: Check auth
  console.warn(
    "%cSuper secret data accessed!",
    "color: red; font-weight: bold;",
  );
  return ok(
    JSON.stringify({
      "data": "This is super secret",
    }),
    {
      "Content-Type": "application/json",
    },
  );
}

async function performReallyDangerousAction() {
  // TODO: Check auth
  console.warn(
    "%cReally dangerous action performed!",
    "color: red; font-weight: bold;",
  );
  return ok("Kaboom!");
}
