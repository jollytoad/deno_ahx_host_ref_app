// IMPORTANT: This file has been automatically generated, DO NOT edit by hand.

import { byPattern } from "$http_fns/pattern.ts";
import { cascade } from "$http_fns/cascade.ts";
import route_1 from "./routes/addons*.ts";
import route_2 from "./routes/index.ts";

export default cascade(
  byPattern("/addons*", route_1),
  byPattern("/", route_2),
);
