import { byMethod } from "$http_fns/by_method.ts";
import { renderHTML } from "$http_render_fns/render_html.tsx";
import { Page } from "../../components/Page.tsx";

interface Project {
  name: string;
  href: string;
}

const projects: Project[] = [
  {
    name: "One",
    href: "/project/one",
  },
  {
    name: "Two",
    href: "/project/two",
  },
  {
    name: "Three",
    href: "/project/three",
  },
  {
    name: "Four",
    href: "/project/four",
  },
  {
    name: "Five",
    href: "/project/five",
  },
  {
    name: "Six",
    href: "/project/six",
  },
  {
    name: "Seven",
    href: "/project/seven",
  },
  {
    name: "Eight",
    href: "/project/eight",
  },
];

export default byMethod({
  GET: renderHTML(ProjectsPage),
});

export function ProjectsPage() {
  return (
    <Page
      breadcrumbs={[
        ["Home", "/"],
        ["Projects", "/mock/projects"],
      ]}
    >
      <h2>Projects</h2>

      <div class="toolbar">
        Tools
      </div>

      <ul class="projects">
        {projects.map((props) => <ProjectItem {...props} />)}
      </ul>
    </Page>
  );
}

function ProjectItem({ name, href }: Project) {
  return (
    <li class="project-row">
      <a class="project" href={href}>
        <span class="name">{name}</span>
      </a>
    </li>
  );
}
