TODO:
* Dynamically add comments based on headline and/or filename
  ```
  ---
  id: bundle
  title: Bundle
  ---
  ```
* Split docker README into multiple files
* Add search
* Add all important repositories with docs
* Sort and structurize docs (e.g. Quick Install to the top, Category for debian stuff)
* Adjust all docusaurus settings (color, logo, name, links, docs-only-mode)
* Fix links to GitHub repositories
* Create multilayer dockerfiles


# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
