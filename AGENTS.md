# Base44 dev environment notes

## What this app is
The original repository content (RGT tunnel shell scripts) is unrelated to the app being built here.
The HORIZON PROPERTIES real-estate website lives in `web/` — a Vite + React (react-router) SPA,
no backend/database, no external services. Property data is structured in `web/src/data/properties.js`
(normalized objects) so it can later be connected to a real database.

## How to run
`docker compose -f docker-compose.base44.yml up -d`
- Single `web` service: `node:22-alpine`, repo bind-mounted at `/app`, deps installed at startup into
  the named volume `web_node_modules` (`npm ci` when a lockfile exists, else `npm install`), then Vite dev server.
- Host port **3000** → container 5173. Healthcheck hits the Vite root via node `fetch`.

## Sandbox overrides (BASE44_PREVIEW_MODE)
- `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is passed bare through Compose `environment:`; the platform
  sets it and Vite (>=6.1) appends it to `allowedHosts` so the preview proxy host can reach dev assets.
  Unset (normal deploys), Vite behaves with its default host checking.

## Quirks
- The public site content is all client-side; first boot runs `npm install` and can take a couple of minutes.
- Images are hot-linked from Unsplash — if a property image 404s, swap the ID in `web/src/data/properties.js`.

## Verify
- `curl http://localhost:3000/` serves the Vite index (dev server, unhashed modules).
- Key flows to check: home hero/carousel, `/properties` filters, `/properties/:id` gallery + viewing modal,
  favorites persist in localStorage.
