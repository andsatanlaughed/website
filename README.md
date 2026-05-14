# andsatanlaughed.com

Static site hosted on GitHub Pages, served at [andsatanlaughed.com](https://andsatanlaughed.com).

The page has **no third-party runtime dependencies** — Tailwind CSS and the
Google Fonts are compiled/downloaded into the repo so the site never depends on
an external CDN being reachable.

## Structure

- `index.html` — landing page
- `style.css` — compiled stylesheet (Tailwind + fonts + page styles). **Generated — do not edit by hand.**
- `src/input.css` — Tailwind source: `@font-face` rules, `@tailwind` directives, page-specific CSS
- `tailwind.config.js` — Tailwind theme (brand colors, fonts)
- `fonts/` — self-hosted woff2 files (Cormorant Garamond + Inter, latin/latin-ext subsets)
- `images/` — image assets
- `CNAME` — custom domain config for GitHub Pages

## Editing styles

`style.css` is built from `src/input.css` by Tailwind. To change styling:

1. `npm install` (first time only)
2. Edit `index.html`, `src/input.css`, or `tailwind.config.js`
3. `npm run build` — regenerates `style.css`
   (or `npm run watch` to rebuild on every change)
4. Commit the updated `style.css` along with your changes

`node_modules/` is gitignored; the built `style.css` is committed so GitHub
Pages can serve it directly without a build step.

## Deploy

1. Run `npm run build` and commit the result.
2. Push to the `main` branch of the GitHub repo.
3. In the repo: **Settings → Pages** → set source to `main` / root.
4. In Cloudflare DNS, point the apex (`andsatanlaughed.com`) to GitHub Pages:
   - `A` records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<username>.github.io`
   - Set records to **DNS only** (grey cloud) until GitHub Pages issues the cert, then you can proxy.
5. In GitHub Pages settings, enable **Enforce HTTPS** once the cert is provisioned.
