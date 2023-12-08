import { generateRoutesModule } from "$http_fns/generate_routes_module.ts";

function generateRoutes() {
  console.debug("Generating routes");

  return generateRoutesModule({
    fileRootUrl: import.meta.resolve("../src/routes"),
    moduleOutUrl: import.meta.resolve("../src/routes.ts"),
    httpFns: "$http_fns/",
    verbose: true,
  });
}

export default generateRoutes;

if (import.meta.main) {
  await generateRoutes();
}
