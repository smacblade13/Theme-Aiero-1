# Aiero — Next.js AI-agency template

Modern AI-agency marketing template built on **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **SCSS**, and **GSAP**. Ships as a static export — deploy to Vercel, Netlify, Cloudflare Pages, or any static host.

## Included pages

- `/` — Homepage (hero, services, features, about, facts, testimonials, FAQs, blog, partners, contact)
- `/about` — About page (hero + about + facts + testimonials + partners + contact CTA)
- `/services` — Services page (hero + services2 + features + FAQs + partners + contact CTA)
- `/contact` — Contact page with mailto form

## Tech stack

- Next.js 16 static export (`output: "export"`)
- React 19 + TypeScript 5
- SCSS with modular partials
- GSAP + ScrollTrigger + SplitType (heading animations)
- Lenis (smooth scroll, desktop only)
- Swiper (sliders), LightGallery (galleries), Odometer (counters)

## Quick start

```bash
pnpm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_SITE_URL
pnpm dev                     # http://localhost:3000
pnpm build                   # static export → out/
pnpm lint                    # ESLint (flat config)
```

`pnpm build` produces a self-contained `out/` folder — upload it anywhere or point Vercel at the repo for one-click deploys.

## Customization

**All content, brand info, and section copy is data-driven.** You almost never need to touch component JSX.

- `data/site.ts` — brand, contact info, socials, SEO defaults, legal
- `data/home1/*.ts` — every homepage section's copy
- `data/pages/*.ts` — inner page metadata + headers
- `data/mobileMenu.ts`, `data/footer.ts` — navigation
- `data/features.ts`, `data/blog.ts`, `data/services.ts` — card lists

See [`docs/BUYER_GUIDE.md`](docs/BUYER_GUIDE.md) for the full customization walkthrough and [`docs/IMAGES.md`](docs/IMAGES.md) for the image manifest.

## Deploy to Vercel

1. Push this repo to your Git provider.
2. Import the project on Vercel.
3. Set env var `NEXT_PUBLIC_SITE_URL` to your production URL.
4. Deploy.

## Project structure

```
app/                 # Routes (/, /about, /services, /contact, sitemap, robots, not-found)
components/          # UI components grouped by role
  common/            # Shared primitives (PageHeader, Preloader, ScrollToTop, etc.)
  headers/           # Header1, Nav, MobileMenu, Sidemenu
  footers/           # Footer1
  homes/home-1/      # Homepage section components
  contact/           # Contact + ContactForm
  features/, services/, testimonials/  # Reusable section variants
context/             # React contexts (UI, Theme, Lenis, Cart, VideoModal)
data/                # All customizable content (typed)
  home1/             # Per-section copy for the homepage
  pages/             # Per-page metadata + header content
types/               # Type definitions matching data/
utils/               # Helpers
public/assets/       # SCSS, images, fonts, vendor CSS
docs/                # Buyer guide and image manifest
```

## Neutralized links

Some template links point to pages that aren't included (blog, shop, team, portfolio, etc.). They are set to `"#"` and catalogued in [`LINKS.md`](LINKS.md) so you can restore them by adding matching routes.

## License

MIT — see [`LICENSE`](LICENSE).
