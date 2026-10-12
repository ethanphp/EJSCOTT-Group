# EJSCOTT Group: Brand Guide

The single source of truth for how EJSCOTT Group looks, sounds and sells, on the
website, in print and on social. `AGENTS.md` requires all UI to follow this file.
Where a value lives in code, the file is named so the two can't drift apart.

Last updated 2026-10-12.

---

## 1. Brand at a glance

| | |
|---|---|
| **What we do** | Websites, online booking, online shops, apps and custom software, designed, built, hosted and looked after |
| **Who runs it** | Ethan Scott, alone. Grew up in Hitchin, works from Stevenage |
| **Who for** | Busy owners of small local businesses who would rather not deal with the tech, plus referred custom builds |
| **Where** | Hertfordshire first, UK-wide by phone, video and WhatsApp |
| **Core promise** | We handle the tech, you run the business |
| **Lead offer** | A free homepage design before you pay anything |
| **Personality** | Friendly, plain-spoken, local, a bit playful, never corporate |

### Positioning

EJSCOTT Group is the hands-on, friendly option for people who aren't "computer
people", while still credible for bigger custom builds that come in by referral.

**ABCCode is a separate brand.** ABCCode is Tedy and Ethan's engineering-first
studio for clients who want two engineers on serious systems. EJSCOTT Group is
Ethan alone, warmer, and broader in client type. Never route work or proposals
between the two. Pick whichever fits the client and stay in that lane for the
whole engagement.

---

## 2. Name and logo

### Name
- Write **EJSCOTT Group**: "EJSCOTT" in capitals, "Group" in title case.
- Never "Ejscott", "EJ Scott", "EJScott" or "EJSCOTT GROUP".
- Always the full name in the logo. Don't shorten it to "EJ" (the tab mark below
  is the one exception).

### Wordmark (the logo)
"EJSCOTT" in Space Grotesk Bold, ink, followed by "Group" in Space Grotesk
SemiBold on a **green sticker tag** tilted -4°, with an ink border and hard ink
shadow. It is the same treatment as the highlighted words in the homepage
headline, so the logo and the site read as one thing.

| File | Use |
|---|---|
| `public/logo.svg` | Light backgrounds (cream, white). Header |
| `public/logo-dark.svg` | Ink backgrounds. Footer. Text and tag border switch to cream |
| `public/logo.png` | 512 px square, stacked version. Structured data (Google) |

The letters are outlined shapes, so the logo never depends on fonts loading.

**Rules**
- Minimum height on screen: 28 px. Header uses 36 px (`h-9`), footer 40 px.
- Keep clear space around it of at least the height of the "Group" tag.
- Don't recolour, stretch, untilt the tag, add effects, or retype it in another font.
- Don't put the light logo on ink, or the dark logo on cream.
- On blue, use the dark version (cream text, green tag).

### Tab mark (small spaces only)
A green sticker square with "EJ" in ink. Used only where the full name can't be
read: browser tab, home-screen icon, tiny avatars.

| File | Use |
|---|---|
| `app/icon.svg` | Browser tab (modern browsers) |
| `app/favicon.ico` | 16/32/48 px fallback |
| `app/apple-icon.png` | iPhone home screen, 180 px |
| `public/mark.svg` | Client preview page header |

---

## 3. Colour

Defined once in `app/globals.css` and exposed as Tailwind colours.

| Token | Hex | Tailwind | Role |
|---|---|---|---|
| Cream | `#fbfaf6` | `bg-cream` | Page background. The brand's "white" |
| Paper | `#f2efe4` | `bg-paper` | Alternate section background (FAQ, link sections) |
| White | `#ffffff` | `bg-white` | Sticker cards, form card, inputs sit on cream |
| Ink | `#0e1210` | `text-ink`, `bg-ink` | Text, borders, shadows, dark sections. Never pure black |
| Green | `#5ee392` | `bg-green` | Primary accent: sticker tags, icon tiles, highlights |
| Green deep | `#2f9e5f` | `text-green-deep` | Ticks, eyebrow labels on cream |
| Blue | `#3d63ff` | `bg-blue` | Secondary accent: main call-to-action buttons, "Most popular", offer banners |

**How to use them**
- Cream is the canvas. Ink does the work. Green and blue are the stickers on top.
- Green for "yes / included / highlight". Blue for "act now" (buttons, offers).
- One dark section per page at most besides the footer (the Work section).
- Body text is ink at 70% (`text-ink/70`); secondary text 60%. Never below 60% on cream.
- No gradients in UI, no neon glows. The only gradient is inside illustration
  mock-ups (e.g. the flyer's fake website image).

**Contrast (WCAG AA needs 4.5:1 for small text, 3:1 for large text)**

| Pair | Ratio | OK for |
|---|---|---|
| Ink on cream | 18.1:1 | Everything |
| Ink 70% on cream | 6.9:1 | Body text |
| Ink 60% on cream | 4.9:1 | Small secondary text (minimum) |
| Ink on green | 11.6:1 | Everything |
| White on blue | 4.7:1 | Buttons and banners |
| Cream on ink | 18.1:1 | Everything |
| Cream 60% on ink | 6.9:1 | Body text on dark |
| Green on ink | 11.6:1 | Labels on dark |
| Green deep on cream | 3.3:1 | Large text and icons only (see open items) |

---

## 4. Typography

| Role | Font | Where it comes from |
|---|---|---|
| Display: headings, buttons, prices, labels | **Space Grotesk** | `app/fonts/SpaceGrotesk.woff2` |
| Body: paragraphs, forms, small print | **Work Sans** | `app/fonts/WorkSans.woff2` |

Both are self-hosted variable fonts (Latin subset) loaded with `next/font/local`
in `app/layout.tsx`. **Don't switch back to `next/font/google`**: fetching Google
Fonts made Vercel builds fail. Never use Inter. Licences are in `app/fonts/`.

| Style | Classes | Use |
|---|---|---|
| Hero headline | `font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tighter` | One per page |
| Section headline | `font-display text-4xl md:text-5xl font-semibold tracking-tighter` | Every section |
| Eyebrow | `font-display text-sm font-semibold uppercase tracking-widest` + `text-green-deep` / `text-blue` / `text-green` on dark | Label above each section headline |
| Card title | `font-display text-xl font-semibold tracking-tight` | Service, step, plan cards (`text-2xl` for plans) |
| Lead text | `text-lg md:text-xl leading-relaxed text-ink/70` | Under hero headlines |
| Body | `text-lg leading-relaxed text-ink/70` | Section intros |
| Small | `text-sm text-ink/60` | Captions, form hints |

Headlines are sentence case and usually end with a full stop
("We handle the tech, you run the business."). Key words in a headline can sit
on a sticker (`StickerBadge`), at most two per headline.

---

## 5. The sticker system

The signature look: flat cards and badges with a solid ink border and a hard,
offset ink shadow, like a sticker on a page. No blur, no soft shadows.

| Class | Border | Shadow | Use |
|---|---|---|---|
| `.sticker` | 2.5 px ink | `6px 6px 0 0` ink | Cards, hero buttons, form card, plan cards |
| `.sticker-sm` | 2 px ink | `4px 4px 0 0` ink | Small buttons, chips, badges, icon tiles |

- **Corners:** buttons and chips `rounded-full`; cards `rounded-3xl`; icon tiles
  `rounded-xl`/`rounded-lg`; inputs `rounded-xl`.
- **Tilt:** stickers that label or highlight (headline words, "Most popular",
  "Most sites live in a week") tilt 2–6°. Cards and buttons stay straight.
- **Interaction:** hover lifts 2 px (`hover:-translate-y-0.5`); press sinks and
  drops the shadow (`active:translate-y-0 active:shadow-none`).
- **Dividers:** sections are separated by `border-b-[2.5px] border-ink`, not shadows.
- **Background texture:** the dot grid (`.noise-bg`) at about 35% opacity, in heroes only.

---

## 6. Layout and spacing

- Container: `mx-auto max-w-[1400px]`, side padding `px-5 md:px-10`.
- Sections: `py-24 md:py-32`. Text blocks are kept narrow (`max-w-[60ch]`).
- Grids: 3–4 equal columns on desktop, one column on phones. Gaps `gap-6`/`gap-8`.
- Every page ends with the contact section, then the footer.
- Mobile: a fixed Call / WhatsApp bar sits at the bottom of every page
  (`MobileContactBar`); the footer has extra bottom padding so it's never hidden.

---

## 7. Components

All shared pieces live in `components/` so every page stays on-brand. Reuse them;
don't restyle copies.

| Component | Looks like |
|---|---|
| `SiteHeader` | Cream bar, logo left, links, blue "Get a free design" pill. Sticky |
| `MobileMenu` | Below `lg`: white sticker menu button; panel slides down with large Space Grotesk links and a blue CTA |
| `SiteFooter` | Ink, dark logo, phone and WhatsApp, referral link, all town and industry links |
| `MobileContactBar` | Phones only: ink "Call" and green "WhatsApp" pills |
| `PageHero` | Breadcrumbs, headline, lead, ink CTA + underlined secondary link, three ticks |
| `Pricing` | Deposit + monthly / pay-once toggle, three plan cards, best fit in green |
| `ContactForm` / `ContactSection` | White sticker form card, blue full-width submit |
| `FaqList` | White `sticker-sm` accordions with a rotating plus |
| `WorkGrid` | Ink section, real project screenshots, cream "View site" pills |
| `ReferralBanner` | Blue band, green gift tile, cream "Refer a business" pill |
| `StickerBadge` | Tilted green or blue sticker for headline words |

**Buttons**

| Type | Style | Use |
|---|---|---|
| Primary | Ink pill, cream text, `.sticker`, arrow icon | Main hero action |
| Call to action | Blue pill, white text, `.sticker-sm` | "Get a free design", form submit, plan buttons |
| Secondary | White or cream pill, ink text, `.sticker-sm` | "View site", chips, phone |
| Text link | Semibold, `underline decoration-2 underline-offset-4` | "See prices", in-copy links |

**Forms:** labels above inputs, inputs on cream with a 2 px ink/15 border, ink
border and green focus ring on focus. Errors appear under the form in a pale red
box with an ink border, never as pop-ups.

---

## 8. Icons, imagery and motion

- **Icons:** Phosphor (`@phosphor-icons/react`), **bold** weight. In cards, icons
  sit in a green tile with a 2 px ink border. No emoji in UI.
- **Imagery:** real project screenshots only, shown in 16:9 frames. No stock
  photos. No photo of Ethan; personality comes from the words. Use the browser
  window mock-up (traffic-light dots, address bar) to show "your website".
- **Testimonials:** real quotes only, added to `testimonials` in `lib/site.ts`.
  The section stays hidden while that list is empty.
- **Motion:** restrained. Fade-up on scroll (`Reveal`, 0.6 s), stickers settle
  with a small bounce (`StickerBadge`), the hero card tilts with the mouse
  (`TiltCard`), the mobile menu slides. Everything respects reduced-motion
  settings.

---

## 9. Voice and tone

- **Plain English.** "No tech jargon, ever" is a promise. Say "keeping your site
  online", not "hosting infrastructure".
- **Warm and direct.** Short sentences, contractions, "you" for the customer.
- **About what's taken care of.** Lead with what the owner no longer has to do.
- **Honest.** Only claim what's true. No invented reviews, results or local clients.
- **Same tone for big projects.** Custom software clients get plain English too.

**"We" or "I"?** Services and Pricing speak as **we** (the studio). About, FAQ
answers, the contact form, town pages and print speak as **Ethan** ("I").

| Write this | Not this |
|---|---|
| "Just text me what you'd like changed." | "Submit a change request via our portal." |
| "Most websites are live within a week." | "Get online today." |
| "Hosting, security and changes, all handled." | "Managed infrastructure and SLAs." |
| "A booking page customers can use any time." | "A calendar-integrated scheduling microservice." |

---

## 10. Messaging and offer

| Where | Line |
|---|---|
| Hero | Get your business **online** and **looking the part** |
| Print / banners | Your business, **online** and **looking the part.** |
| Services | We handle the tech, you run the business. |
| Contact | Let's get you online. |
| About | Hi, I'm Ethan. You'll deal with me, start to finish. |

- **Main CTA:** "Get your free design" / "Get a free design". Custom and app work
  uses "Get a fixed quote".
- **Turnaround:** "Most websites are live within a week." Never promise "today".
- **Prices** (source of truth: `plans`, `faqs` and `referral` in `lib/site.ts`):
  - Starter website: £99 deposit + £39/month (12-month minimum), or £595 once + £15/month
  - Website + bookings: £149 deposit + £59/month, or £995 once + £25/month
  - Shops, apps & custom: from £2,500, fixed quote paid in 2–3 stages, support from £49/month
  - Existing sites: care plans from £15/month
  - Change prices in `lib/site.ts`, then check the hero ("From £39/month"), the
    meta description in `app/layout.tsx`, the town pages' FAQs and all print.
- **Referrals:** clients get a free month, anyone else £50, the referred business
  £50 off. Due once the referred business pays its deposit. For introductions only,
  never for reviews. Terms live on `/refer`.
- **Reply promise:** "I reply to every enquiry the same working day."

---

## 11. Contact details

| Item | Value | Notes |
|---|---|---|
| Website | **www.ejscott.co.uk** | `ejscott.co.uk` redirects here. `SITE_URL` in `lib/site.ts` |
| Phone (web) | **+44 7942 672887** | `PHONE_DISPLAY` / `PHONE_TEL` in `lib/site.ts` |
| Phone (print) | **07942 672887** | Same number, UK local format |
| WhatsApp | `https://wa.me/message/PSC3D7DUXKF6N1` | `WHATSAPP` in `lib/site.ts` |
| Lead emails | `CONTACT_TO_EMAIL` env var | Falls back to ethan@ejscott.co.uk |

The same phone number must appear everywhere: site, Google Business Profile,
social profiles and print. When it changes, update `lib/site.ts`, then Google,
social bios and every print file.

---

## 12. Website structure and SEO pages

- **Towns:** `lib/towns.ts` → `/web-design/[town]`. **Industries:**
  `lib/industries.ts` → `/websites-for/[industry]`. **Referrals:** `/refer`.
- Personal copy only where it's true: Hitchin (grew up), Stevenage (lives),
  Letchworth (DJ Steve Dee). Never invent local clients or history.
- Every page needs its own words. Don't swap a town name into copied text.
- Every page sets its own title, description and canonical URL, and includes the
  shared `ogImage` in its Open Graph metadata (pages that set `openGraph` replace
  the layout's).

---

## 13. Social, link previews and banners

- **Link preview:** `public/og.png` (1200 × 630) shows when any page is shared.
- **Profile pictures:** the stacked logo on cream, sized to survive circle crops.
- **Banners:** Facebook, LinkedIn, YouTube and Google Business Profile covers use
  the same layout as the link preview: logo, headline with stickers, browser mock-up
  and "From £39/month" / web address chips.
- Handle: `@ejscottgroup` everywhere it's available.
- The marketing kit (logo exports, banners, print PDFs, Google and social guides)
  is kept outside this repo in the `ejscott-marketing` folder.

---

## 14. Print

- **Business cards** 85 × 55 mm, **A6 flyers**, **A5 posters** with tear-off tabs.
- Files carry **3 mm bleed** on every edge, and text stays **4 mm** inside the cut.
- Export with **static** (single-weight) font files. Variable fonts export as
  "Type 3", which Vistaprint rejects as "unembedded fonts".
- QR codes point to `www.ejscott.co.uk/?utm_source=card|flyer|poster&utm_medium=print`.
- Paper: matte or soft-touch. Gloss makes the cream look yellow. The bright green
  prints slightly softer than on screen.

---

## 15. Client proposals

Personal and low-friction, written by one person who's easy to reach. In order:

1. **What you told me:** 2–3 sentences restating their need in their words.
2. **What I'll build:** short plain-English bullets.
3. **What's included ongoing:** hosting, updates, support. Always included, even
   for small jobs.
4. **Timeline:** a plain date or "within a week" where true.
5. **Price:** one flat number, or 2–3 plain payment stages for bigger builds.
6. **Next step:** one clear action, always with the phone number as an option.

One page for small sites, up to two for custom software. No cover page, no
slide-deck styling, no corporate boilerplate.

---

## 16. Open items

1. **Small green labels are too faint.** Green deep on cream is 3.3:1; small
   eyebrow text needs 4.5:1. Darken `--green-deep` or use ink for small labels.
2. **Footer copyright is too faint.** Cream at 40% on ink is 3.7:1. Use at least 60%.
3. **Unused starter files.** `public/file.svg`, `globe.svg`, `next.svg`,
   `vercel.svg` and `window.svg` are left from the Next.js template.
4. **No testimonials yet.** Ask DJ Steve Dee and the tutor for quotes.
5. **Lead email sender.** Verify the domain in Resend and set `CONTACT_FROM_EMAIL`
   so lead emails don't come from Resend's test address.
