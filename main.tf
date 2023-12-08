terraform {
  required_providers {
    deno = {
      source = "denoland/deno"
    }
  }
}

provider "deno" {
}

resource "deno_project" "ref_app_project" {
}

data "deno_assets" "ref_app_assets" {
  path = "src"
  pattern = "**/*.{ts,tsx,json,css}"
}

resource "deno_deployment" "ref_app_deployment" {
  project_id = deno_project.ref_app_project.id
  entry_point_url = "main.ts"
  compiler_options = {
    jsx               = "react-jsx"
    jsx_import_source = "$jsx"
  }
  import_map_url = "import_map_deploy.json"
  assets = data.deno_assets.ref_app_assets.output
  env_vars = {
    REGISTRY_URL = "https://ahx-preview-hub.deno.dev/ref"
  }
}
