# EJSCOTT Group: Brand Guide

This guide describes the brand as it is built into the site today. The sources are `app/page.tsx`, `app/layout.tsx`, `app/globals.css` and `app/api/contact/route.ts`. Items marked **Recommended** are suggestions, not rules the code already follows. Gaps and inconsistencies are listed in section 14.

Based on the code as of 2026-10-11.

---

## 1. Brand summary

| Item | Detail |
|---|---|
| **What we do** | Design, build, host and manage websites for small, local businesses |
| **Where** | Hertfordshire, and beyond |
| **Who for** | Busy owners who would rather not deal with the tech |
| **Core promise** | You run the business. We handle the online side. |
| **Personality** | Reassuring, plain-spoken, local, modern and minimal |

---

## 2. Name and logo

### Name

- **Full name:** EJSCOTT Group. Write "EJSCOTT" in capitals and "Group" in title case.
- **Short form:** "EJ" appears only inside the monogram.
- **Email display name:** "EJSCOTT Leads", used for lead notifications.
- **Recommended:** Avoid "Ejscott", "EJ Scott" and "EJScott".

### Logo

There is no logo image file. The logo is set as styled text:

| Element | Specification |
|---|---|
| Monogram | "EJ" in bold white on a solid black circle. 40 × 40 px in the nav |
| Wordmark | "EJSCOTT Group" in bold, with tight tracking. 20 px (`text-xl`) |
| Tagline (nav only) | "Websites for Hertfordshire" in uppercase. 11 px, 0.2em tracking, semibold, emerald-600 |
| Reversed (footer) | White circle with black "EJ", and a white wordmark on black. Circle is 36 × 36 px |

**Recommended:** Export the logo as an SVG in `public/` so the mark is not rebuilt by hand. Also set a clear-space rule.

---

## 3. Taglines and messaging

### Lines in use

| Location | Copy |
|---|---|
| Nav sub-label | Websites for Hertfordshire |
| Browser title (home) | EJSCOTT Group \| Websites for Hertfordshire Businesses |
| Meta description | We build modern, high-converting websites for small businesses across Hertfordshire. Design, hosting, and updates handled for you. |
| Hero headline | Get your business online today. |
| Services headline | We handle the tech, you run the business |
| About headline | Local expertise for Hertfordshire businesses |
| Contact headline | Ready to get online today? |
| Footer line | Professional web design for small businesses across Hertfordshire. |

### Four key messages

1. **Done for you.** "We design, build and manage your entire online presence… so you don't have to."
2. **Local.** The site names Stevenage, Hemel Hempstead, Bishop's Stortford, Berkhamsted, St Albans, Watford and Letchworth.
3. **Plain English.** "No tech jargon, ever."
4. **Bookings around the clock.** "Let customers book appointments around the clock… No more missed calls."

---

## 4. Voice and tone

- **Warm.** "Not confident with computers? No problem."
- **Plain.** Short sentences and everyday words.
- **Direct.** "You" means the customer and "we" means the company.
- **Confident without hype.** Claims are practical, such as bookings 24/7 or a site often ready in under a week. The site avoids superlatives.

| Write this | Not this |
|---|---|
| "Just send us what you'd like updated." | "Submit a change request through our portal." |
| "We look after hosting, security and updates." | "We manage your server infrastructure." |
| "No jargon, no stress." | "Leverage our end-to-end digital solutions." |

**Recommended:** Keep technical terms such as hosting, domain or SSL out of headlines. If one is needed, explain it in the same sentence.

---

## 5. Audience

- **Primary:** Owners of small, local businesses in Hertfordshire who are not confident with technology.
- **Examples named on the site:** nail salons, barbers, beauty therapists, cafés, tradespeople, shops, DJs and tutors.
- **Search focus:** "web design Hertfordshire", "website designer Stevenage", "Watford web design", "Hemel Hempstead websites", "small business websites UK".

---

## 6. Services

| No. | Service | Summary on site |
|---|---|---|
| 01 | A Website Built & Managed For You | Mobile-friendly sites that show services and contact details. We handle setup, hosting and changes. |
| 02 | Online Booking Systems | Round-the-clock booking for appointment-based businesses. |
| 03 | Custom Solutions | E-commerce stores, advanced booking, or fully bespoke designs. |

The About section lists four promises: website design, build and hosting; ongoing updates; online booking for appointment-led businesses; and plain-English support.

---

## 7. Colour

Colours are set with Tailwind classes. The hex values are Tailwind's default colours.

| Role | Colour | Hex | Classes | Used for |
|---|---|---|---|---|
| Base | Black | #000000 | `bg-black`, `text-black` | Primary buttons, footer, "Our Work" background, body text |
| Base | White | #FFFFFF | `bg-white` | Page background |
| Accent | Emerald 600 | #059669 | `text-emerald-600`, `bg-emerald-600` | Eyebrow labels, hover states, "today." in the hero, success message |
| Accent | Emerald 500 | #10B981 | `text-emerald-500`, `border-emerald-500` | Accents on black sections, bullet dots, card hover borders |
| Tint | Emerald 50 | #ECFDF5 | `bg-emerald-50` | Service card hover background |
| Neutral | Black at 60%, 50%, 10%, 5% | Greys | `text-black/60`, `border-black/10`, `bg-black/5` | Body copy, captions, hairlines, decorative rings |
| Neutral on dark | White at 60%, 50%, 40%, 15%, 10% | Greys | `text-white/60`, `border-white/15` | Text and borders on the black section and footer |

Rules as used:

- Black and white carry the brand. Emerald is the only accent colour.
- Emerald is for highlights and interaction, not large areas. The one large emerald area is a hover state.
- The page is mostly white. Black appears in the "Our Work" section and the footer. Greys are for text and lines, not backgrounds.

**Dark mode:** `app/globals.css` defines dark values (#0A0A0A background, #EDEDED text), but the landing page hard-codes white and black. The page content stays light whatever the system setting. Decide whether dark mode is wanted, then either use these variables or remove them.

---

## 8. Typography

- **Typeface:** Geist Sans, loaded with `next/font/google` and applied with `font-sans`.
- **Monospace:** Geist Mono is loaded but not used on the landing page.
- **Fallback:** Arial, Helvetica, sans-serif, set on `body` in `globals.css`.

| Style | Classes | Size | Used for |
|---|---|---|---|
| Hero headline | `text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]` | 48 → 72 px | Hero |
| Section headline | `text-4xl md:text-5xl font-extrabold tracking-tight` | 36 → 48 px | Section titles |
| Card title | `text-2xl font-bold` | 24 px | Service cards |
| Project title | `text-xl font-bold` | 20 px | Work cards |
| Lead text | `text-lg md:text-xl` | 18 → 20 px | Hero intro |
| Body | `text-lg` or `text-base`, `leading-relaxed` on cards | 16–18 px | Paragraphs |
| Eyebrow | `text-xs font-bold uppercase tracking-[0.25em]` | 12 px | Labels above headings |
| Form label | `text-sm font-semibold` | 14 px | Form fields |

Headlines are heavy and tightly tracked. Eyebrows are small, uppercase and widely spaced, and they give each section a consistent entry point.

---

## 9. Shape, layout and spacing

- **Container:** `max-w-6xl` (1152 px) with `px-6` side padding. Text blocks are narrower (`max-w-2xl`, `max-w-3xl`).
- **Section spacing:** `py-24` (96 px). The hero uses `pt-40 pb-28`.
- **Navigation:** A white bar fixed to the top, with a 1 px black-at-10% bottom border.
- **Dividers:** Sections are separated by 1 px black-at-10% lines.
- **Corner radii:**
  - Pill (`rounded-full`) for buttons and the nav CTA.
  - 24 px (`rounded-3xl`) for cards and panels.
  - 16 px (`rounded-2xl`) for form inputs and the form submit button.
- **Hairline grid:** The service cards use a 1 px gap over a black-at-10% background to draw dividers.
- **Circle motif:** The monogram is a circle. The hero has two large outlined circles, one emerald at 20% and one black at 5%. Circles are the only decorative shape, so use them sparingly.
- **Icons:** None. Small emerald dots mark list items.
- **Motion:** Colour transitions on hover, and smooth scrolling for anchor links. Keep motion subtle.

---

## 10. Components

| Component | Style | Hover or focus |
|---|---|---|
| Primary button | Black pill, white semibold text | Emerald-600 background |
| Secondary button | 2 px black outline pill | Emerald border and text |
| Nav CTA | Small black pill: "Get Online Today" | Emerald-600 background |
| Service card | White, in the hairline grid, 40 px padding | Emerald-50 background |
| Project card | Black section, 1 px white-at-15% border, 24 px radius, 16:9 image | Emerald-500 border |
| "View site" link | Pill with a thin white-at-10% outline | Emerald border, white text |
| Checklist panel | 2 px black border, 24 px radius | None |
| Form field | 2 px black-at-10% border, 16 px radius, label above | Emerald-600 border on focus |
| Form submit | Full-width black block, 16 px radius, bold text-lg | Emerald-600 background; 50% opacity while sending |
| Success message | Small emerald text, centred | Shown after a successful send |

---

## 11. Imagery and portfolio

- Two project screenshots are in `public/`: `djstevedee.png` (DJ Steve Dee, Letchworth) and `hempteach.png` (a Hertfordshire tutoring business). Both show in 16:9 frames with `object-cover`.
- The client names and URLs are shown publicly. Confirm the clients are happy to be featured.
- **Recommended:** Use the same screenshot size and crop for every project, and add new projects to the same grid.
- The site uses no brand photography, illustration or icon set yet.

---

## 12. Contact and channels

| Channel | Detail | Where it appears |
|---|---|---|
| Website | ejscottgroup.co.uk | Metadata and Open Graph URL |
| Phone | 07301 573293 | Contact section, as a `tel:` link |
| Lead notifications | ethan@ejscott.co.uk | Contact API. Marked "change this" in the code |
| Email sender | EJSCOTT Leads <onboarding@resend.dev> | Lead notification emails |

Form fields: Your Name; Business Name & Location; Email or Phone.

Form copy:

- Submit button: "Send Message — Let's Talk"
- While sending: "Sending..."
- On success: "Message sent — we'll get back to you soon."
- On failure: browser alerts, "Something went wrong." or "Network error."

---

## 13. Search and social metadata

- **Home title:** "EJSCOTT Group | Websites for Hertfordshire Businesses". Other pages use "%s | EJSCOTT Group".
- **Description:** See section 3.
- **Keywords:** web design Hertfordshire; small business websites UK; website designer Stevenage; Watford web design; Hemel Hempstead websites.
- **Social cards (Open Graph and Twitter):** Title "EJSCOTT Group". Description "Websites for Hertfordshire businesses. Built, hosted and managed for you." Twitter card type is `summary_large_image`.
- **Favicon:** `app/favicon.ico`. Not reviewed visually. Confirm it is branded and not the Next.js default.

---

## 14. Open items

These gaps and inconsistencies were found in the code. Fix or decide on each one.

1. **Two domains.** The site uses ejscottgroup.co.uk, but lead emails go to ejscott.co.uk. Choose one and align them.
2. **Test sender.** Lead emails come from onboarding@resend.dev, Resend's test address. Verify a company domain in Resend and send from it.
3. **Lead address.** The destination address is marked "change this" in `app/api/contact/route.ts`.
4. **Descriptor varies.** The footer says "Professional web design for small businesses across Hertfordshire", while the nav and social cards say "Websites for Hertfordshire". Pick one descriptor for each place.
5. **Heading case.** Service titles use Title Case, while section headlines use sentence case. Pick one.
6. **Punctuation.** Straight and curly apostrophes are mixed, and the dash style varies (—, - and ·). Pick one of each.
7. **Footer.** The copyright line ends with a stray "·".
8. **Contrast.** Emerald-600 text on white is about 3.8:1, below the 4.5:1 WCAG AA needs for small text. The 12 px eyebrow labels are affected. Emerald-700 (#047857) reaches about 5.5:1. Black-at-50% small text is about 4:1, and the white-at-40% footer text is about 3.7:1 on black.
9. **Unused dark mode.** The dark-mode variables in `globals.css` are not used (see section 7).
10. **Body text colour.** `globals.css` sets the text colour to #171717, but the page uses pure black.
11. **Hover zoom not applied.** Project images have a transition class but no hover scale class, so nothing animates.
12. **Focus visibility.** Form fields remove the outline and show focus only through a border colour change, which is easy to miss. Add a visible focus ring.
13. **Browser alerts.** Errors appear as `alert()` pop-ups. Replace them with an on-brand message under the form.
14. **Turnaround claim.** The contact section says sites are "often in under a week". Confirm this is a promise you can keep, or soften it.
15. **No logo file.** The logo exists only as styled text. Export it as an SVG.
