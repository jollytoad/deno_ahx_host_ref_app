import type { Children } from "$jsx/types.ts";
import { Breadcrumbs } from "./Breadcrumbs.tsx";

interface Props {
  breadcrumbs?: Parameters<typeof Breadcrumbs>[0]["breadcrumbs"];
  children?: Children;
  content?: string;
}

export function Page({ breadcrumbs = [], content, children }: Props) {
  return (
    <html lang="en" ahx-host="ref">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Host App - ahx!</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/missing.css@1.1.0/dist/missing.min.css"
        />
        <link rel="stylesheet" href="/index.css" />

        <script src="/addons/-/index.js" defer />
        <link rel="stylesheet" href="/addons/-/index.css" />
      </head>
      <body>
        <header>
          <slot name="header-above" />
          <slot name="title">
            <h1>Augmented Hypermedia Host App</h1>
          </slot>
          <slot name="header-middle" />
          <slot name="breadcrumbs">
            <Breadcrumbs breadcrumbs={breadcrumbs ?? []} />
          </slot>
          <slot name="header-below" />
        </header>

        <main
          dangerouslySetInnerHTML={content ? { __html: content } : undefined}
        >
          <slot name="main-above" />
          {children}
          <slot name="main-below" />
        </main>

        <footer>
          <slot name="footer-above" />
          <slot name="footer-below" />
        </footer>
      </body>
    </html>
  );
}
