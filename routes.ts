// IMPORTANT: This file has been automatically generated, DO NOT edit by hand.

import { byPattern } from "$http_fns/by_pattern.ts";
import { cascade } from "$http_fns/cascade.ts";
import { lazy } from "$http_fns/lazy.ts";

export default cascade(
  byPattern("/mock/projects", lazy(() => import("./routes/mock/projects.tsx"))),
  byPattern("/api/private", lazy(() => import("./routes/api/private.ts"))),
  byPattern("/addons*", lazy(() => import("./routes/addons*.ts"))),
  byPattern("/", lazy(() => import("./routes/index.ts"))),
);
