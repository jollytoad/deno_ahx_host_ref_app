import { load } from "$std/dotenv/mod.ts";
import init from "$http_fns/hosting/localhost.ts";
import handler from "@/handler.ts";
import generateRoutes from "./gen.ts";

await load({ export: true });

await generateRoutes();

await Deno.serve(await init(handler)).finished;