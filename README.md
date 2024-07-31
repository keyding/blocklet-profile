# blocklet-profile

A blocklet project for displaying personal profiles.

## Run blocklet server

Create a new directory, e.g. `blocklet-server-data`.

```bash
mkdir blocklet-server-data
```

Init a project with `bun`

```bash
cd blocklet-server-data && bun init -y
```

Installing `@blocklet/cli`

```bash
bun add -D @blocklet/cli
```

Add the command to package.json

```json
{
  "scripts": {
    "server:init": "blocklet server init",
    "server:start": "blocklet server start",
    "server:stop": "blocklet server stop"
  }
}
```

Init blocklet server

```bash
bun run server:init
```

Run blocklet server

```bash
bun run server:start

# If you want to stop the blocklet server, run the command:
bun run server:stop
```

## Development Blocklet

Install dependencies

```bash
bun install
```

Blocklet development

```bash
bun run dev
```

Blocklet bundle

```bash
bun run build
```

Blocklet deploy

```bash
# <blocklet-app-id> See the Server's application details page.
bun run deploy --app-id <blocklet-app-id>
```

Alternatively, create a new `.env` file and add `BLOCKLET_DEPLOY_APP_DID="blocklet-app-id"`,

```bash
bun run deploy
```

Please refer to：[Deploy your blocklet](https://www.arcblock.io/docs/blocklet-developer/en/deploy-blocklet-directly-to-the-server#step-2)

Other commands:

```bash
# Lint and fix
bun run lint
bun run lint:fix

# Upgrade deps
bun run up

# Bump version
bun run bump-version
```
