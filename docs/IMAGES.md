# Image manifest

Every image slot the site uses, grouped by category. Match dimensions when replacing to avoid layout shifts.

## Brand / logos

| Slot            | Path                                | Size    | Referenced by                           |
| --------------- | ----------------------------------- | ------- | --------------------------------------- |
| Primary logo    | `/assets/images/logo.svg`           | 110×20  | `data/site.ts` → Header                 |
| Footer logo     | `/assets/images/logo2.svg`          | 110×20  | `data/site.ts` → Footer                 |
| 404 logo        | `/assets/images/logo4.svg`          | 203×37  | `app/not-found.tsx`                     |
| Preloader mark  | `/assets/images/preloader-dark.png` | 100×100 | `components/common/Preloader.tsx`       |
| Favicon         | `/favicon.ico`                      | 32×32   | `app/layout.tsx` (icons)                |
| OG image        | `/og-image.png`                     | 1200×630| `data/site.ts` → openGraph, twitter     |

## Home page — Hero and layers

| Slot                | Path                                     | Size     | Referenced by            |
| ------------------- | ---------------------------------------- | -------- | ------------------------ |
| About portrait      | `/assets/images/layers/person.png`       | 805×1338 | `data/home1/about.ts`    |
| Testimonial mask    | `/assets/images/layers/mask.png`         | 740×792  | `data/home1/testimonials.ts` |
| Brand-row backdrop  | `/assets/images/layers/layer.png`        | 455×642  | `data/home1/brands.ts`   |
| FAQ backdrop        | `/assets/images/layers/layer2.png`       | 647×844  | `data/home1/faqs.ts`     |

## Client / partner logos

Both the "Brands" row and the "Partners" carousel use the same set. Swap logos here.

| Path                                | Size    | Notes    |
| ----------------------------------- | ------- | -------- |
| `/assets/images/brand/brand1.png`   | 170×53  | Partner 1|
| `/assets/images/brand/brand2.png`   | 162×60  | Partner 2|
| `/assets/images/brand/brand3.png`   | 131×72  | Partner 3|
| `/assets/images/brand/brand4.png`   | 183×44  | Partner 4|
| `/assets/images/brand/brand5.png`   | 104×92  | Partner 5|
| `/assets/images/brand/brand6.png`   | 180×53  | Partner 6|

Referenced by `data/home1/brands.ts` and `data/home1/partners.ts`.

## Service icons

Three service-card icons shown on the homepage services section. Prefer SVG.

| Path                                    | Size  | Card title                        |
| --------------------------------------- | ----- | --------------------------------- |
| `/assets/images/service/ser2-1.svg`     | 73×73 | Blockchain Technology             |
| `/assets/images/service/ser2-2.svg`     | 74×73 | Virtual and Augmented Reality     |
| `/assets/images/service/ser2-3.svg`     | 69×71 | Predictive Data Analytics         |

Referenced by `data/home1/services2.ts`. The top-level `components/services/Services2.tsx` (not used by home1) reads a different data set from `data/services.ts` that references `ser10-*` and `service6-*` images — leave alone unless you're adding pages that use it.

## Feature-card icons

Referenced by `data/features.ts`. `feature1.svg` through `feature8.svg` cover the homepage feature grid. Prefer SVG at ~60×60 rendered size.

## Blog card thumbnails

Referenced by `data/blog.ts` → `blogSectionPosts` (used on the homepage) and additional post lists. Homepage cards are 420×314 (see `blog1-1.png`, `blog1-2.png`, `blog1-3.png`). Extra data-set entries reference `blog1-4.png` through `post2-*.png`; leave alone unless you're wiring a blog listing page.

## Home dark/light preview thumbs

Referenced by `components/headers/Nav.tsx`. Only shown in the header mega-menu.

| Path                                        | Size    |
| ------------------------------------------- | ------- |
| `/assets/images/event/dark-version.png`     | 377×351 |
| `/assets/images/event/light-version.png`    | 377×351 |

## Misc icons

- `/assets/images/icon/comas.svg` (47×41) — quote-mark decoration in the testimonial slider.

## Unused assets

The `public/assets/images/` directory carries the full source theme's assets, including many unused images (`bg/`, `event/demo*.png`, `hero/`, `project/`, most `layers/*.png`, `blog2-*`, `post*`). They add ~a few MB to `out/` but do not affect the four active routes. Delete anything unused before shipping to a paying client if you care about bundle size — search for the filename first to confirm no `data/*.ts` file references it.
