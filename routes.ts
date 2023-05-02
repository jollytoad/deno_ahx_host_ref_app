// IMPORTANT: This file has been automatically generated, DO NOT edit by hand.

import { byPattern } from "$http_fns/pattern.ts";
import { cascade } from "$http_fns/cascade.ts";
import route_1 from "./routes/api/private.ts";
import route_2 from "./routes/addons*.ts";
import route_3 from "./routes/index.ts";

export default cascade(
  byPattern("/api/private", route_1),
  byPattern("/addons*", route_2),
  byPattern("/", route_3),
);
