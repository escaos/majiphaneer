# majiphaneer.com

Static, multilingual site for Maji Phaneer — author, communicator, and speaker.
Astro 5 + Preact islands + Tailwind 4, deployed as Cloudflare Workers static
assets. Spanish lives unprefixed at the root; `/en`, `/fr`, `/de` mirror it
with the same English slugs.

## Layout

- `apps/web` — Astro site (screens, routes, islands, styles, wrangler.jsonc)
- `packages/data` — all content (4 locales), UI dictionary with throwing `t()`,
  photo records, site constants, invariant tests
- `scripts/check-budgets.mjs` — CI performance gate over `dist/`

## Commands

```bash
pnpm install          # once
pnpm test             # vitest in every package
pnpm typecheck        # astro check + tsc
pnpm lint             # biome
SITE_URL=https://majiphaneer.com pnpm build
pnpm budgets          # enforce HTML/JS gzip budgets over dist
pnpm --filter @majiphaneer/web preview
```

## Pending content (empty on purpose — never fabricate)

The UI hides each of these until a real value lands in
`packages/data/src/content/*.ts`:

- `book.amazonUrl` — Amazon purchase link
- `podcast.spotifyUrl` / `youtubeUrl` / `appleUrl` and `podcast.episodes`
- `home.welcomeVideoUrl` — 1–2 min welcome video
- `about.media` — press/interview appearances ("En los medios")
- `book.reviews` — reader reviews
- `contact.email` and `contact.socials` (the contact form renders once an
  email exists)

## Deploy (one-time setup)

1. **Cloudflare zone**: add `majiphaneer.com` to a free Cloudflare account;
   set the two assigned nameservers at Namecheap (registration stays there).
   Do NOT hand-create DNS records for the apex — wrangler attaches the custom
   domain on deploy.
2. **GitHub**: create the repo, push `main`. In Settings → Environments create
   `production` with secrets `CLOUDFLARE_API_TOKEN` (Workers Scripts:Edit +
   Workers Custom Domains:Edit), `CLOUDFLARE_ACCOUNT_ID`, and variable
   `SITE_URL=https://majiphaneer.com`.
3. Push to `main` → `deploy.yml` builds and runs `wrangler deploy`.
4. **Dashboard once**: enable Brotli, HTTP/3, Early Hints, Tiered Cache,
   Crawler Hints; add a redirect rule `www.majiphaneer.com/*` →
   `https://majiphaneer.com/$1` (301).
5. **After launch**: submit `https://majiphaneer.com/sitemap-index.xml` to
   Google Search Console and Bing Webmaster Tools; verify
   `curl -A Googlebot https://majiphaneer.com | grep "Vivir con convicción"`.

## Guardrails already wired

- robots.txt is host-guarded: only a build with `SITE_URL` equal to the
  hardcoded production origin serves the crawl allowlist; anything else gets
  `Disallow: /`, and `_headers` adds `X-Robots-Tag: noindex` on workers.dev.
- `SITE_URL` is declared in `turbo.json` build env — it keys the cache, so a
  preview build can never be replayed as production.
- Missing translation keys throw at build; content structure parity and photo
  alt coverage are unit-tested.
- Budgets (HTML < 15/20 KB gz, page JS < 10/35 KB gz, chunk < 40 KB gz) fail
  CI on regression.
