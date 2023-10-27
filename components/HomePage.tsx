import { Page } from "./Page.tsx";

export function HomePage() {
  const regUrl = Deno.env.get("REGISTRY_URL");

  return (
    <Page
      breadcrumbs={[
        ["Home", "/"],
      ]}
    >
      <h3>Welcome</h3>

      <p>
        This is an example <em>host</em>{" "}
        app that can be enhanced via augmentations, that have been registered in
        a Augmented Hypermedia Registry.
      </p>

      {regUrl
        ? (
          <p>
            The registry that this app uses can be found{" "}
            <a href={regUrl} target="_blank">here</a>.
          </p>
        )
        : (
          <p>
            A registry has not been configured for this app. The{" "}
            <code>REGISTRY_URL</code> environment variable must be set.
          </p>
        )}

      <section class="box">
        <h4>Full-page Addons</h4>

        <ul ahx-slot-name="addon-links"></ul>
      </section>
    </Page>
  );
}
