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
docker build -t sbarton-site .
docker run --rm -p 4000:4000 -v $(pwd):/srv/jekyll sbarton-site
```

Open http://localhost:4000. The `-v` mount means file changes trigger a rebuild without restarting the container.