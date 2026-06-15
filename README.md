# spencerbarton.com

Checkout https://spencerbarton.com/

Built from https://github.com/alshedivat/al-folio/releases/tag/v0.10.1

Analytics at https://dash.cloudflare.com

## Development

The easiest way to build and run locally is with the [VS Code Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).

**Prerequisites:** Docker Desktop and the VS Code [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

1. Open the repo in VS Code
2. When prompted, click **Reopen in Container** (or run `Dev Containers: Reopen in Container` from the command palette)
3. The container builds automatically and starts Jekyll on port 4000
4. Open http://localhost:4000 in your browser

The site rebuilds automatically when you save files. Drafts are included in the local build.

### Docker (without VS Code)

With [mise](https://mise.jdx.dev) installed:

```sh
mise run dev
```

Or manually:

```sh
docker build -t sbarton-site -f .devcontainer/Dockerfile .
docker run --rm -p 4000:4000 -v $(pwd):/srv/jekyll sbarton-site
```

Open http://localhost:4000. The `-v` mount means file changes trigger a rebuild without restarting the container.

## Deployment

The site is hosted on **GitHub Pages** and deploys automatically. The
[`deploy`](.github/workflows/deploy.yml) GitHub Action runs on every push to
`main`: it builds the Jekyll site with `JEKYLL_ENV=production` (Ruby 3.4) and
publishes the generated `_site` to GitHub Pages. The custom domain is set via
the [`CNAME`](CNAME) file.

The same workflow also runs on pull requests, but as a **build-only check** (the
deploy step is skipped). A green check on the PR means the production build
succeeds; a red check means the build would break `main`, so fix it before
merging.

> **Note:** CI and the dev container both pin Ruby 3.4
> ([`deploy.yml`](.github/workflows/deploy.yml) and
> [`.devcontainer/Dockerfile`](.devcontainer/Dockerfile)). If you bump the Ruby
> version, update both so `Gemfile.lock` resolves the same way locally and in CI.

### Testing the production build before opening a PR

The dev container above runs the development build; to catch deploy failures
early, reproduce the production build the Action runs. The quickest way is to
run a bundle install + production build in the same Ruby version CI uses:

```sh
docker run --rm -v "$(pwd)":/srv/jekyll -w /srv/jekyll ruby:3.4-bookworm \
  bash -c "bundle install && JEKYLL_ENV=production bundle exec jekyll build --lsi"
```

If that succeeds, the `deploy` workflow's build step will pass too.