# Augmented Hypermedia Reference Host App

This provides a reference host application that can be enhanced via _Augmented
Hypermedia_ addons.

## Usage

The app should be used in conjunction with a _Augmented Hypermedia Registry_,
the URL for this is passed in the `REGISTRY_URL` environment variable.

```sh
REGISTRY_URL=http://localhost:8888/ref deno task start
```
