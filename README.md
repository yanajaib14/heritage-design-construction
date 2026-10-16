# Heritage Design & Construction website

Next.js (App Router) + TypeScript + Tailwind CSS. The homepage is a faithful port of the approved homepage draft.

## Run it on your PC (Windows)

1. Install Node.js 20 or newer (LTS) from nodejs.org.
2. Unzip this folder, open it in VS Code, and open a terminal there.
3. `npm install`
4. `npm run dev`, then open http://localhost:3000

`npm run build` makes the production build Vercel will run.

## Where things live

| Path | What it is |
| --- | --- |
| `app/page.tsx` | Homepage: lists the sections in order |
| `app/about`, `app/services`, `app/portfolio`, `app/resources`, `app/contact` | The main menu pages, one `page.tsx` per URL |
| `app/layout.tsx` | Header, phone menu and footer shared by every page, plus business schema for search engines |
| `lib/site.ts` | Phone, address, hours, service-area cities and the menu, all in one place |
| `components/ui/` | Page hero with breadcrumbs, icons, structured data |
| `components/ContactForm.tsx` | Consultation form (not connected to a form tool yet) |
| `components/sections/*.tsx` | One file per homepage section (Hero, Services, TenDay, FastBath, ServiceAreas map, Contact, Footer...) |
| `app/site.css` | Brand styles: colors, type, layouts, animations |
| `app/pages.css` | Styles for the inner pages |
| `app/globals.css` | Tailwind utilities and brand color tokens (`bg-charcoal`, `text-limestone`, `font-display`...) |
| `lib/site-effects.js` | Scroll story hero, reveals, count-ups, timeline, before/after slider, estimator, map zoom and drag, menu |
| `public/images/` | Project photos and partner logos (from the Heritage Design Center repo) |
| `public/brand/` | Heritage logo and mark |

## Still to fill in

Anything in `[square brackets]` on the page is a placeholder waiting on a real value: license number, Fast Bath and refacing prices, reviews, and photos for commercial and whole-home work.

## Deploy

Push this folder to a GitHub repository, then in Vercel choose Add New → Project, import the repo, and keep the default Next.js settings.
