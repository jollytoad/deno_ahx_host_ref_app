import { Page } from "./Page.tsx";

interface Props {
  localRegistryPath: string;
}

export function AddonsPage({ localRegistryPath }: Props) {
  return (
    <Page
      breadcrumbs={[
        ["Home", "/"],
        ["Addons", localRegistryPath],
      ]}
    >
      <h3>Addons</h3>

      <div
        hx-get={`${localRegistryPath}/-/`}
        hx-trigger="load once"
        hx-select="#registry"
      />

      <p>
        <button
          hx-get={`${localRegistryPath}/-/register`}
          hx-select="#augmentation"
          hx-target="#augmentation"
          hx-swap="outerHTML"
        >
          Add
        </button>
      </p>

      <div class="box">
        <div id="augmentation" />
      </div>

      <hr />

      <p>
        <a href={`${localRegistryPath}/-/index.css`} target="_blank">
          View combined stylesheet of all enabled addons
        </a>
      </p>
    </Page>
  );
}
