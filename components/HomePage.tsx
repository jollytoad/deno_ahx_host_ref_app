import { Page } from "./Page.tsx";

export function HomePage() {
  return (
    <Page
      breadcrumbs={[
        ["Home", "/"],
      ]}
    >
      <h3>
        <em>Ahh!</em> Welcome
      </h3>

      <section class="box">
        <h4>Examples</h4>

        <a href="/mutations">DOM Mutation Examples</a>
      </section>

      <section class="box">
        <h4>Full-page Addons</h4>

        <ul id="pages" hx-boost="false"></ul>
      </section>
    </Page>
  );
}
