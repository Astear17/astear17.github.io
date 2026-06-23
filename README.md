# astear17.github.io

Static portfolio site for Astear17, hosted on GitHub Pages with a custom domain.

## Deploy

### GitHub Pages

1. Push to the `main` branch.
2. Go to **Settings > Pages** and set the source to the `main` branch, root (`/`).
3. The site deploys automatically at `https://astear17.sino.tw` (custom domain via `CNAME`).

### Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Other** (static).
3. Output directory: `/` (root).
4. Deploy. No build step needed.

## Structure

```
├── index.html              Main page
├── CNAME                   Custom domain
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css       All styles
    ├── js/main.js          All scripts
    ├── img/                Images (pfp, favicon, embed, etc.)
    └── fonts/              Self-hosted Geist Sans & Geist Mono (WOFF2)
```

## Fonts

Geist Sans and Geist Mono are self-hosted as WOFF2 files in `assets/fonts/`. No external font CDN dependencies.

## Notes

- No build step or bundler required.
- Works as a static site on GitHub Pages, Vercel, Netlify, or any static host.
- SVG icons are inlined via an SVG sprite (no Font Awesome dependency).
- Canvas animations pause when the tab is hidden.
- Boot animation is skipped for returning visitors (session storage).
- `prefers-reduced-motion` disables all animations and canvas effects.
