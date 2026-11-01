# Valter Zuliani — Software, Cloud & DevOps Portfolio

**https://vzuliani97.github.io** · From business logic to cloud operations.

Three case studies, each with a recruiter scan and an engineering deep dive: problem, what was built, an architecture explorer (context, containers, critical flow, deployment), decisions and trade-offs, verification linked to tests and CI, real screenshots, known limitations, and how to run it.

| Project | What it shows |
|---|---|
| [Yamesi Core](https://github.com/vzuliani97/yamesi) | Point of sale, Colombian sales invoice (VAT, CUFE, QR), 18k gold traceability, daily closing |
| [OpsCircuit](https://github.com/vzuliani97/opscircuit) | Kubernetes, GitOps, observability, outage drills, n8n incident automation |
| [NekoBet](https://github.com/vzuliani97/nekobet) | Idempotent top-ups, live sports betting over SSE, seamless-wallet casino |

## What it is for and what I built

It is the front door for recruiters and engineers: in two minutes it shows what each project is for and what I built, and the deep dive gives the architecture, decisions and evidence behind every claim. I designed and built the whole site: the content model in English and Spanish, the animated home page, the case studies, the architecture explorer with diagrams rendered from Mermaid in CI, the accessibility and link tests, and the GitHub Pages deployment.

## How it is built

- React 19 and TypeScript, built by Vite as one real HTML page per route, so deep links work on GitHub Pages.
- English and Spanish, light and dark themes, responsive from 320 px, `prefers-reduced-motion` respected.
- Architecture diagrams are rendered at build time from the Mermaid sources in [`diagrams/`](diagrams), never redrawn by hand. Solid lines are implemented and verified; dashed lines are planned.
- No backend, no analytics, no cookies, no tracking.

## Run it

```bash
npm ci
npm run dev          # renders the diagrams, then serves the site
npm run build        # diagrams + typecheck + production build in dist/
npx playwright test  # routes, accessibility (axe), mobile, internal links
```

Rendering diagrams and running the browser tests use the installed Google Chrome; set `CHROME_PATH` if it is not in the default location.

## Quality gates (CI on every push)

- **Build:** typecheck and production build.
- **Privacy:** no private contact data in the published files (`npm run check:private`).
- **Dependencies:** `npm audit --omit=dev --audit-level=high`.
- **Secrets:** Gitleaks over the whole history.
- **Browser tests:** Playwright on desktop (light) and mobile (dark). Every route loads; no critical or serious axe violations; no horizontal overflow; no console errors; the language and view switches work; every internal link resolves.
- **External links:** every link is checked. LinkedIn answers 999 to automated clients and is reported, not failed.
- **Deploy:** only from `main`, with SHA-pinned actions and a least-privilege token.

## Measured on the live site

On 2026-11-01, Lighthouse 13.6 with its mobile profile gave 100 for performance, 100 for accessibility, 100 for best practices and 100 for SEO on `/`, `/work/nekobet/` and `/work/yamesi/`, on https://vzuliani97.github.io, measured again after the redesign.

## License and provenance

MIT. Portfolio projects are independent reconstructions with synthetic data and no employer code, AI-assisted and verified through tests and CI.
