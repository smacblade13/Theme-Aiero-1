# Buyer guide

Everything you need to make Aiero your own. All customization happens in `data/` and `public/assets/` — you rarely need to touch component JSX.

## 1. Global brand and contact info

Open `data/site.ts`. This is the single source of truth for:

- **Brand** — name, tagline, logo paths, favicon
- **Contact** — email (used by the contact form's `mailto:` handler), phone, address
- **Socials** — array of `{ platform, href, icon, label }`. Rendered in the footer and on the contact page. Add/remove entries here.
- **Nav** — the header's primary CTA (label + href)
- **SEO** — default title, title template, description, OG image, `siteUrl`, optional Twitter handle
- **Legal** — copyright holder, founded year

Every value flows through to the Header, Footer, contact page, layout metadata, sitemap, and robots.

## 2. Section content

Homepage sections read their copy from `data/home1/*.ts`:

| Section       | File                              | What it controls                                     |
| ------------- | --------------------------------- | ---------------------------------------------------- |
| Hero          | `data/home1/hero.ts`              | Title (with highlighted word), subtitle, CTA, video  |
| Brand row     | `data/home1/brands.ts`            | Headline copy + brand logos + layer image            |
| Marquee       | `data/home1/marquee.ts`           | Marquee text                                         |
| Services      | `data/home1/services.ts`          | Section eyebrow, title, CTA                          |
| Services 2    | `data/home1/services2.ts`         | Three service cards (title + bullets + icon)         |
| Features      | `data/home1/features.ts`          | Section eyebrow + title. Card data: `data/features.ts` |
| About         | `data/home1/about.ts`             | Eyebrow, title, paragraphs, CTA, image               |
| Facts         | `data/home1/facts.ts`             | Counter values, captions, section header             |
| Testimonials  | `data/home1/testimonials.ts`      | Quote list, happy-clients counter, section header    |
| FAQs          | `data/home1/faqs.ts`              | 4 Q&A pairs, image, CTA                              |
| Blog          | `data/home1/blogs.ts` + `data/blog.ts` | Section header + post list                      |
| Partners      | `data/home1/partners.ts`          | Section header + partner logos                       |

Inner pages read from `data/pages/*.ts`:

| Page      | File                    | What it controls                        |
| --------- | ----------------------- | --------------------------------------- |
| /about    | `data/pages/about.ts`   | Page title, description, header content |
| /services | `data/pages/services.ts`| Same                                    |
| /contact  | `data/pages/contact.ts` | Same                                    |

Menu structure lives in `data/mobileMenu.ts` (mobile + desktop nav) and `data/footer.ts` (footer link groups).

## 3. Images

See `docs/IMAGES.md` for the full image manifest — every path, dimensions, and which file references it. To swap an image, drop your file at the same path (or update the path in the corresponding `data/*.ts` entry) and match the dimensions to avoid layout shifts.

**Where images live:** `public/assets/images/`
- `logo.svg`, `logo2.svg`, `logo4.svg` — brand logos (referenced from `data/site.ts`)
- `layers/` — decorative layer images (hero, about, faqs, testimonials backgrounds)
- `brand/` — client/partner logo carousel
- `service/` — service section icons
- `feature/` — feature card icons
- `blog/` — blog card thumbnails
- `icon/` — misc UI icons

## 4. Contact form

The form uses `mailto:` — it opens the visitor's email client with a prefilled draft addressed to `site.contact.email`. Zero infrastructure. To swap to a real POST endpoint (Formspree, Web3Forms, Getform):

Edit `components/contact/ContactForm.tsx`, replacing the `handleSubmit` body with:

```ts
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, subject, message }),
});
if (res.ok) form.reset();
```

Add error/success state as needed.

## 5. Theme colors and typography

- Fonts are Sora + Manrope, loaded via `next/font/google` in `app/layout.tsx`. Change them there.
- Colors live in `public/assets/scss/global/` — look for CSS custom properties like `--color-content-white`. The dark-mode palette is defined in `public/assets/scss/utilities/_dark-mood.scss`.
- The site defaults to dark mode; a pre-hydration inline script in `app/layout.tsx` sets `body.active-body.dark-mode` from `localStorage.themeMode`. Users can toggle via the `ThemeButton` in the layout.

## 6. Deploy

### Vercel (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project into Vercel.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://acme.com`).
4. Deploy. Vercel auto-detects Next.js.

Because `next.config.ts` sets `output: "export"`, Vercel will build a static site and serve `out/`. If you later want ISR or middleware, remove `output: "export"` from `next.config.ts`.

### Anywhere else

```bash
pnpm install
pnpm build
# out/ is a self-contained static site — upload to Netlify, Cloudflare Pages, S3, GitHub Pages, or any static host
```

## 7. Adding pages

To add e.g. `/pricing`:

1. Create `app/pricing/page.tsx` following the pattern of `app/about/page.tsx`.
2. Create `data/pages/pricing.ts` with `metadata` + `header` fields.
3. Add the new route to `data/mobileMenu.ts` (flip the `#` entry to `/pricing`).
4. Add the new route to `app/sitemap.ts`.

The generator script that originally produced this repo (`scripts/extract-site.mjs`) can also pull additional route groups from the source Aiero template — see `README.md`.

## 8. Favicons and OG image

Ship your own icon set to `public/`:

- `favicon.ico` (already present — replace it)
- `apple-touch-icon.png` (180×180)
- `favicon-32.png`, `favicon-16.png`
- `android-chrome-192.png`, `android-chrome-512.png`
- `og-image.png` (1200×630) — referenced by `data/site.ts` `seo.ogImage`

Then extend `metadata.icons` in `app/layout.tsx` to reference the new PNG paths. Tools like [realfavicongenerator.net](https://realfavicongenerator.net/) produce the whole set from a single source.
