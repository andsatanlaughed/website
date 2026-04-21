# andsatanlaughed.com

Static site hosted on GitHub Pages, served at [andsatanlaughed.com](https://andsatanlaughed.com).

## Structure

- `index.html` — landing page
- `style.css` — styles
- `CNAME` — custom domain config for GitHub Pages

## Deploy

1. Push to the `main` branch of the GitHub repo.
2. In the repo: **Settings → Pages** → set source to `main` / root.
3. In Cloudflare DNS, point the apex (`andsatanlaughed.com`) to GitHub Pages:
   - `A` records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<username>.github.io`
   - Set records to **DNS only** (grey cloud) until GitHub Pages issues the cert, then you can proxy.
4. In GitHub Pages settings, enable **Enforce HTTPS** once the cert is provisioned.
