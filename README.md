# matiasr95.github.io

Personal portfolio for **Matías Rossi** — Data Warehouse & BI Analyst.
Built with [Astro](https://astro.build) + Tailwind CSS, deployed to GitHub Pages.

Live: https://matiasr95.github.io

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
```

## Content

- Page copy and structured data: `src/data/site.ts`
- Sections: `src/components/*.astro`
- Blog posts: `src/content/blog/*.md`

### Updating the blog

Posts are imported from the LinkedIn content engine's published folder:

```bash
npm run sync-posts   # reads ../LinkedIn Writer/posts/published/*.md → src/content/blog/
```

Override the source path with `POSTS_DIR=/path/to/posts/published npm run sync-posts`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages (Settings → Pages → Source: **GitHub Actions**).

## Brand

Gold `#C9A227` / ink `#111111` / white — tokens in `src/styles/global.css`.
Assets in `public/brand/`.
