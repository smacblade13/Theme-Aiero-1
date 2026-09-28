# Links

**Routes this site serves:** `/`, `/about`, `/services`, `/contact`

The navigation was flattened to those four routes only. Menu data lives in `data/mobileMenu.ts` and footer link groups in `data/footer.ts`.

## Remaining `#` links

Some non-navigational elements still use `href="#"` because they'd normally link to detail pages that this site doesn't include:

- **Blog cards** (`components/homes/home-1/Blogs.tsx`) — no blog detail page.
- **Service cards** (`components/services/Services2.tsx`) — no service detail page.
- **Brand / Partner logo carousels** (`components/homes/home-1/Brands.tsx`, `Partners.tsx`) — no partner detail pages.

If you add those detail pages later, replace the `#` with the real route.
