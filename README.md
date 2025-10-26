# Maji Landing — Astro + React

SPA-like landing built with Astro + React, Tailwind v4, Framer Motion, Biome, and Lefthook. Deployed to Vercel.

## Run locally

```bash
npm i
npm run dev
```

## Commands

```bash
npm run dev        # start dev server
npm run build      # production build
npm run preview    # preview build
npm run format     # biome format write
npm run lint       # biome lint
```

## Deploy

This repo is configured with the Vercel adapter. Connect the repo in Vercel and deploy.

## Stack
- Astro 5 + React 19
- Tailwind CSS v4 (via @tailwindcss/vite)
- Framer Motion + Lenis
- Biome (format + lint)
- Lefthook (pre-commit: format+lint, pre-push: build)
