import init from "$http_fns/hosting/init_localhost.ts";
import handler from "../src/handler.ts";
import generateRoutes from "./gen.ts";

await generateRoutes();

await Deno.serve(await init(handler)).finished;
