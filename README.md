# Aiero — AI Agency & Technology Theme

A static Next.js 16 theme for AI agencies and tech startups. Ships as a single-page static export (`out/`) — no server, no database, no API routes required.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Component Reference](#component-reference)
- [Context Providers](#context-providers)
- [Data Layer](#data-layer)
- [Styling System](#styling-system)
- [Customising Content](#customising-content)
- [Deployment](#deployment)
- [Production Checklist](#production-checklist)

---

## Tech Stack

| Category | Library / Version |
|---|---|
| Framework | Next.js 16 (`output: "export"`) |
| UI | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | SCSS (Sass 1.x) + Bootstrap 5 grid |
| Smooth Scroll | Lenis 1.x |
| Animations | GSAP 3 + ScrollTrigger, split-type |
| Sliders | Swiper 12 |
| Fonts | next/font/google — Sora, Manrope |
| Icons | Font Awesome, Fontello |
| Package Manager | **pnpm** (do not use npm or yarn) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm i -g pnpm`)

### Install & Run

```bash
pnpm install
pnpm dev          # dev server at http://localhost:3000
```

### All Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start Next.js dev server |
| `pnpm build` | Build static export to `./out/` |
| `pnpm start` | Serve the production build locally |
| `pnpm lint` | Run ESLint (flat config) |

> There is no test framework configured.

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout — providers, fonts, metadata
│   └── page.tsx            # Homepage — composes all home-1 sections
│
├── components/
│   ├── common/             # Reusable UI primitives
│   ├── contact/            # Contact section + form
│   ├── features/           # Features grid component
│   ├── footers/            # Footer1
│   ├── headers/            # Header1, Nav, MobileMenu, Sidemenu
│   ├── homes/home-1/       # All homepage sections (Hero → Partners)
│   ├── services/           # Services2 grid component
│   └── testimonials/       # Testimonials1 slider
│
├── context/                # React contexts (UI, Theme, Lenis, Cart, Video)
│
├── data/
│   ├── site.ts             # Brand, contact, socials, SEO — single source of truth
│   ├── blog.ts             # Blog post data
│   ├── features.ts         # Feature card data
│   ├── footer.ts           # Footer link groups
│   ├── mobileMenu.ts       # Nav items (desktop + mobile share same list)
│   ├── services.ts         # Services card data
│   ├── shop.ts             # Shop product data (unused in current route)
│   └── home1/              # Section-specific content (hero, about, faqs, …)
│
├── public/
│   ├── assets/
│   │   ├── scss/           # SCSS source — style.scss is the entrypoint
│   │   ├── css/plugins/    # Vendor CSS (Bootstrap, FA, Swiper, LightGallery)
│   │   ├── images/         # All theme images (bg, blog, brand, hero, icons…)
│   │   ├── fonts/          # Fontello + LightGallery fonts
│   │   └── webfonts/       # Font Awesome webfonts
│   ├── favicon.ico         # Root favicon (must exist for browser tab icon)
│   ├── og-image.png        # Open Graph share image (1200×630)
│   └── site.webmanifest    # PWA manifest
│
├── types/                  # TypeScript interfaces matching each data file
├── utils/
│   └── menuActive.ts       # Active-link helper used by Nav + MobileMenu
├── next.config.ts          # output: "export", images.unoptimized: true
├── tsconfig.json           # Path alias @/* → repo root
└── eslint.config.mjs       # Flat ESLint config
```

---

## Page Sections

The homepage (`app/page.tsx`) renders these sections in order:

### 1. Header — `components/headers/Header1.tsx`

Sticky-on-scroll header. Contains:
- Hamburger toggle → Sidemenu (side drawer)
- Logo (switches light/dark based on theme)
- Desktop navigation (from `data/mobileMenu.ts`)
- Search toggler
- Primary CTA button (from `data/site.ts → nav.primaryCta`)
- Mobile menu toggler (visible below xl breakpoint)

Props: `className`, `stickyClass`, `navClass`, `menuClass`, `hasLogin`, `hasNumber`, `SideMenuTogglerClass`

---

### 2. Hero — `components/homes/home-1/Hero.tsx`

Full-viewport section with:
- Gradient headline split into lead / highlighted span / trail (all from `data/home1/hero.ts`)
- Subtitle paragraph + CTA link
- Video banner strip with a `VideoPopupButton` that opens a YouTube embed in a full-screen modal

Data file: `data/home1/hero.ts`

---

### 3. Brands — `components/homes/home-1/Brands.tsx`

"Neural Playground" section combining:
- Decorative layer image + gradient gradient headline
- Autoplay Swiper logo carousel (4 → 3 → 2 logos per view on breakpoints)

Data file: `data/home1/brands.ts`

---

### 4. Services — `components/homes/home-1/Services.tsx`

Section header (eyebrow, title, CTA link) that wraps the reusable `Services2` grid. Cards come in three layout variants: `default`, `compact`, and `icon`.

Data files: `data/home1/services.ts` (section copy), `data/services.ts → serviceSec6Cards` (5 service cards)

---

### 5. Marquee — `components/homes/home-1/Marquee.tsx`

Infinite CSS-animated scrolling text banner. Pure CSS — no JS library needed.

Data file: `data/home1/marquee.ts`

---

### 6. Features — `components/homes/home-1/Features.tsx`

Section header wrapping the reusable `Features` grid. Renders 4 feature cards with icon + title + description.

Data files: `data/home1/features.ts` (section copy), `data/features.ts → featureItems` (cards)

---

### 7. About — `components/homes/home-1/About.tsx`

Two-column layout:
- Left: decorative image
- Right: eyebrow + GSAP-animated heading + paragraphs + CTA link

Data file: `data/home1/about.ts`

---

### 8. Facts — `components/homes/home-1/Facts.tsx`

Animated statistics counters. Each fact has a `max` number, optional `prefix`/`suffix`, a label, and a description. Counters start animating when they scroll into view (IntersectionObserver, no external library).

Data file: `data/home1/facts.ts`

---

### 9. Services2 — `components/homes/home-1/Services2.tsx`

Three-column grid of service blocks, each with an SVG icon, title, and bullet list.

Data file: `data/home1/services2.ts`

---

### 10. Testimonials — `components/homes/home-1/Testimonials.tsx`

Two-column layout:
- Left: autoplay Swiper testimonial slider with prev/next navigation (`components/testimonials/Testimonials1.tsx`)
- Right: decorative image + section heading + animated happy-client counter

Data file: `data/home1/testimonials.ts`

---

### 11. FAQs — `components/homes/home-1/Faqs.tsx`

Two-column layout:
- Left: decorative image
- Right: eyebrow + heading + accessible accordion + CTA link

The `Accordion` component is fully keyboard-accessible (`aria-expanded`, `aria-controls`, `aria-labelledby`).

Data file: `data/home1/faqs.ts`

---

### 12. Blogs — `components/homes/home-1/Blogs.tsx`

Three-column blog card grid using the first 3 posts from `data/blog.ts → blogSectionPosts`. Each card shows image, date/author meta, title, and category labels.

Data file: `data/blog.ts`

---

### 13. Partners — `components/homes/home-1/Partners.tsx`

Autoplay Swiper logo carousel (6 → 5 → 4 → 3 → 2 logos per view on breakpoints).

Data file: `data/home1/partners.ts`

---

### 14. Contact — `components/contact/Contact.tsx`

Two-column layout:
- Left: eyebrow, heading, intro text, phone, email, address, social links (all from `data/site.ts`)
- Right: `ContactForm`

The form currently constructs a `mailto:` link on submit. Replace with a form service before going live.

---

### 15. Footer — `components/footers/Footer1.tsx`

Three-zone footer:
- **Top bar:** brand tagline + CTA button
- **Widget area:** logo + social icon links + footer link groups (from `data/footer.ts`)
- **Bottom bar:** copyright line (year auto-updates via `new Date().getFullYear()`)

---

## Component Reference

### `components/common/`

| Component | Description |
|---|---|
| `Accordion` | Accessible single-expand accordion. Props: `items`, `defaultOpenIndex`, `accordionId` |
| `Counter` | Scroll-triggered animated number counter (IntersectionObserver). Props: `max`, `min`, `extraClass` |
| `PageHeader` | Reusable page hero header for inner pages |
| `Preloader` | Full-screen loading overlay; hides after first JS tick |
| `ScrollToTop` | Fixed button that appears on scroll and smoothly returns to top |
| `SearchPopup` | Full-screen search overlay; toggled via `UiContext.toggleSearch` |
| `SearchToggler` | Button that calls `UiContext.toggleSearch` |
| `SideMenuToggler` | Button that calls `UiContext.toggleSideNav` |
| `MobileMenuToggler` | Button that calls `UiContext.toggleMobileMenu` |
| `SmoothScroll` | Initialises Lenis smooth scroll on desktop; skipped on touch devices |
| `ThemeButton` | Floating dark/light mode toggle button (always visible) |
| `ThemeTrigger` | Inline dark/light toggle for use inside menus or other components |
| `TitleSplitProvider` | GSAP + split-type scroll-in animation engine for headings |
| `TitleSplitWrapper` | Registers a heading element with `TitleSplitProvider`. Props: `tag`, `className`, `children` |
| `SubTitleSplitProvider` | Same pattern as `TitleSplitProvider`, for eyebrow subtitles |
| `SubTitleWrapper` | Registers a subtitle element with `SubTitleSplitProvider` |
| `VideoPopupButton` | Anchor that opens a URL in the video modal. Props: `videoUrl`, `className`, `href` |

### `components/headers/`

| Component | Description |
|---|---|
| `Header1` | Main sticky header — logo, nav, search, CTA |
| `Nav` | Desktop nav `<li>` items, reads `data/mobileMenu.ts`, highlights active route |
| `MobileMenu` | Off-canvas mobile menu drawer — nav items, contact info, social links |
| `Sidemenu` | Side panel drawer for desktop — contact info, social links, CTA |

### `components/features/Features.tsx`

Renders `featureItems` from `data/features.ts` as a 2×2 icon/text grid.

### `components/services/Services2.tsx`

Renders `serviceSec6Cards` from `data/services.ts` as a mixed-layout service grid (default, compact, and icon card variants).

### `components/testimonials/Testimonials1.tsx`

Autoplay Swiper slider with prev/next navigation. Quote, author name per slide. Data from `data/home1/testimonials.ts`.

---

## Context Providers

All providers are mounted in `app/layout.tsx` in this order:

```
LenisProvider
  └─ SmoothScroll
       └─ UiProvider
            └─ ThemeProvider
                 └─ CartProvider
                      └─ VideoModalProvider
                           └─ TitleSplitProvider
                                └─ SubTitleSplitProvider
```

| Context | Hook | Manages |
|---|---|---|
| `LenisContext` | `useLenisRef()` | Shared `MutableRefObject<Lenis>` so components can read the Lenis instance without re-creating it |
| `UiContext` | `useUi()` | All overlay open/close state: `searchOpen`, `sideNavOpen`, `mobileMenuOpen`, `videoModalOpen`. Auto-closes all overlays on route change via `usePathname` |
| `ThemeContext` | `useTheme()` | `isDark`, `toggleTheme`, `setDark`. Persists to `localStorage.themeMode`. Applies `active-body dark-mode` classes to `<body>` |
| `CartContext` | `useCart()` | Shopping cart state (present for future shop pages; unused in the current single-page build) |
| `VideoModalContext` | `useVideoModal()` | `openModal(url)`, `closeModal`, `isOpen`, `videoUrl` for the full-screen iframe video popup |

### Theme flash prevention

`layout.tsx` injects a small inline `<script>` **before** React hydration that reads `localStorage.themeMode` and immediately adds `active-body dark-mode` to `<body>` if needed — preventing a light-flash on dark-mode users' first paint.

---

## Data Layer

All site content lives in `data/`. Components read from these files and never hardcode strings. To change any text or image, edit the data file — no JSX changes needed.

### `data/site.ts` — Global brand config

Consumed by Header, Footer, Sidemenu, MobileMenu, Contact, and the Next.js `metadata` object.

```ts
site.brand       // name, tagline, logoLight, logoDark, favicon
site.contact     // email, phone, address
site.socials     // { platform, href, icon, label }[]
site.nav         // primaryCta: { label, href }
site.seo         // defaultTitle, titleTemplate, description, ogImage, siteUrl, twitterHandle
site.legal       // copyrightHolder, foundedYear
```

`siteUrl` reads from `process.env.NEXT_PUBLIC_SITE_URL` (falls back to `"https://example.com"`).

### `data/home1/` — Per-section content

| File | Key export | Used by |
|---|---|---|
| `hero.ts` | `heroContent` | Hero — headline parts, subtitle, CTA, video embed URL |
| `about.ts` | `aboutContent` | About — eyebrow, title, paragraphs, CTA, image |
| `brands.ts` | `brandsContent` | Brands — headline, logo array, layer image |
| `facts.ts` | `factsContent` | Facts — eyebrow, title, counter items |
| `faqs.ts` | `faqsContent` | FAQs — eyebrow, title, image, accordion items, CTA |
| `features.ts` | `featuresSectionContent` | Features — eyebrow, title |
| `marquee.ts` | `marqueeContent` | Marquee — scrolling text string |
| `partners.ts` | `partnersContent` | Partners — eyebrow, title, logo array |
| `services.ts` | `servicesSectionContent` | Services — eyebrow, title, CTA copy + link |
| `services2.ts` | `services2Items` | Services2 — icon blocks with bullet lists |
| `testimonials.ts` | `testimonialsContent` | Testimonials — eyebrow, title, client count, quote items |
| `blogs.ts` | `blogsSectionContent` | Blogs — eyebrow, title, CTA |

### `data/blog.ts`

Exports blog post arrays for different layout styles. The homepage Blogs section uses `blogSectionPosts` (first 3 items from `blogGridPosts`).

### `data/features.ts`

Exports feature card arrays for different layout styles (`featureItems`, `featureItems10`, `featureItemsStyle2`, `featureItems7`). The homepage uses `featureItems`.

### `data/services.ts`

Exports `serviceSec6Cards` (homepage Services section — 5 cards, 3 variants) and `serviceSec10Cards` (available for inner pages).

### `data/mobileMenu.ts`

`MobileMenuItem[]` shared by the desktop `Nav`, `MobileMenu`, and `Sidemenu` components.

### `data/footer.ts`

`footerLinkGroups` — array of `{ title, links[] }` rendered in the footer widget area.

---

## Styling System

### SCSS

Entry point: `public/assets/scss/style.scss`
Imported once from `app/layout.tsx`.

```
style.scss
  @use _global        # CSS custom properties, resets, base typography
  @use _utilities     # Helper classes
  @use _header        # Header + nav styles
  @use _elements      # Buttons, cards, accordion, counter, preloader…
  @use _sections      # Per-section styles (hero, about, facts, faq…)
  @import vendors     # Bootstrap, Font Awesome, Fontello, Swiper, LightGallery
```

Prefer editing SCSS partials over adding inline styles to components.

### Fonts

Loaded through `next/font/google` in `app/layout.tsx`, injected as CSS variables on `<body>`:

| Variable | Font | Weights | Role |
|---|---|---|---|
| `--font-sora` | Sora | 100–800 | Display / headings |
| `--font-manrope` | Manrope | 200–800 | Body / UI |

### Dark / Light Mode

Theme controlled via body class:

- **Dark mode:** `<body class="active-body dark-mode">`
- **Light mode:** classes absent

SCSS partials use these selectors for dark-mode overrides. Do not use `prefers-color-scheme` — the theme is explicit class-based, not system-preference-based.

### Class Naming

Class names follow Bootstrap 5 grid + original template convention (`vs-header`, `hero-style1`, `ibt-btn`, `ibt-section-gap`, etc.). Do not rename them — they are tightly coupled to the SCSS.

### Path Alias

`@/*` maps to the repo root. Always use `@/components/…`, `@/data/…`, `@/context/…`, `@/types/…`, `@/utils/…` — not relative paths across top-level directories.

---

## Customising Content

| What | Where |
|---|---|
| Brand name, logo, phone, email, address | `data/site.ts` |
| Social media links | `data/site.ts → socials` |
| Nav menu items | `data/mobileMenu.ts` |
| Footer link columns | `data/footer.ts` |
| Hero headline & video | `data/home1/hero.ts` |
| About copy & image | `data/home1/about.ts` |
| Stats counters | `data/home1/facts.ts` |
| FAQ items | `data/home1/faqs.ts → faqsContent.items` |
| Testimonial quotes | `data/home1/testimonials.ts → testimonialsContent.items` |
| Blog cards (homepage) | `data/blog.ts → blogGridPosts` (first 3 shown) |
| Service cards | `data/services.ts → serviceSec6Cards` |
| Feature cards | `data/features.ts → featureItems` |
| Marquee text | `data/home1/marquee.ts → marqueeContent.text` |
| SEO title, description, OG image | `data/site.ts → seo` |

---

## Deployment

The project produces a fully static `out/` directory. Host it anywhere that serves static files.

### Required environment variable

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Set this before building. It controls `metadataBase`, canonical URLs, and OG `url`. Without it everything points to `example.com`.

### Build

```bash
pnpm build
# Static output is in ./out/
```

### Platform-specific notes

| Platform | Notes |
|---|---|
| **Vercel** | Set `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables. `pnpm build` runs automatically on push. |
| **Netlify** | Build command: `pnpm build`. Publish directory: `out`. Add env var in Site Settings. |
| **GitHub Pages** | Upload `out/` via a workflow or the `gh-pages` branch. Set a custom domain if needed. |
| **Cloudflare Pages** | Build command: `pnpm build`. Output directory: `out`. |
| **AWS S3 / any CDN** | Upload `out/` contents to the bucket root. Enable static website hosting. |

---

## Production Checklist

### Critical — Fix before shipping

- [ ] **Fill `data/site.ts`** — replace placeholder email, phone, address, `example.com`, and all social `href` values
- [ ] **Add `public/favicon.ico`** — missing at the root; browser tab will show a broken icon
- [ ] **Add `public/og-image.png`** — 1200×630 px; without it social share previews will be blank
- [ ] **Set `NEXT_PUBLIC_SITE_URL`** in your deployment environment
- [ ] **Replace `picsum.photos` images** — `data/features.ts → featureItems` icons and first 3 posts in `data/blog.ts` use random placeholder images

### Contact form

- [ ] **Replace the `mailto:` fallback** in `ContactForm.tsx` with a real form backend. Recommended options (all work with static export, no server needed):
  - [Web3Forms](https://web3forms.com) — free tier, API key only
  - [Formspree](https://formspree.io) — free tier
  - [Resend](https://resend.com) — if you add a serverless/edge layer

### SEO

- [ ] Add `app/robots.ts` — Next.js generates `/robots.txt` at build time
- [ ] Add `app/sitemap.ts` — Next.js generates `/sitemap.xml` at build time

### Icons / PWA

- [ ] Add `192×192` and `512×512` PNG icons to `public/` and reference them in `public/site.webmanifest` (currently only `favicon.ico` is listed — "Add to Home Screen" will show no icon)

### Accessibility

- [ ] Add `<label>` elements to `ContactForm` inputs — inputs have `id` but no associated labels; screen readers won't announce field names
- [ ] Add a visually hidden "Skip to content" link at the top of `layout.tsx` for keyboard navigation

### Analytics

- [ ] Add analytics if needed — [Plausible](https://plausible.io), [Fathom](https://usefathom.com), or `@next/third-parties` (Google Analytics) all work with static export
