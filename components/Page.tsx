import type { Children } from "$jsx/types.ts";
import { Breadcrumbs } from "./Breadcrumbs.tsx";

interface Props {
  breadcrumbs?: Parameters<typeof Breadcrumbs>[0]["breadcrumbs"];
  children?: Children;
  content?: string;
}

export function Page({ breadcrumbs = [], content, children }: Props) {
  return (
    <html hx-ext="css-rules" data-host-app="ref">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Host App - Ahh!</title>
        <link
          rel="stylesheet"
          href="https://the.missing.style/v1.0.8/missing.min.css"
        />
        <link rel="stylesheet" href="/index.css" />

        <script src="/addons/-/index.js" defer />
        <link rel="stylesheet" href="/addons/-/index.css" />
      </head>
      <body hx-boost="true">
        <header>
          <div id="x-header-above" />
          <h1>Augmented Hypermedia Host App</h1>
          <div id="x-header-middle" />
          <Breadcrumbs breadcrumbs={breadcrumbs ?? []} />
          <div id="x-header-below" />
        </header>

        <main
          dangerouslySetInnerHTML={content ? { __html: content } : undefined}
        >
          {children}
        </main>

        <footer>
          <div id="x-footer-above" />
          <div id="x-footer-below" />
        </footer>
      </body>
    </html>
  );
}
