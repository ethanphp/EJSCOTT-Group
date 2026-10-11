# EJSCOTT Group Brand Guide

EJSCOTT Group is Ethan's solo studio: websites, booking systems, and
custom software/web apps for business owners — locally rooted in
Hertfordshire but not limited to it. Positioning: "we handle the tech, you
run the business" — the friendly, hands-on option for people who aren't
"computer people," while still being credible for larger custom builds
(e.g. bespoke web apps, ecommerce) that come in via referral.

Distinct from ABCCode: ABCCode is Tedy + Ethan's engineering-first studio
for clients who want two engineers building serious systems. EJSCOTT
Group is Ethan alone, warmer in tone, broader in client type (from a
one-person salon to a referred ecommerce app client). Never route work or
proposals between the two brands — pick whichever fits the client and
stay in that lane for the whole engagement.

## Voice

- Warm, plain-English, reassuring. Actively avoid tech jargon — a
  recurring promise on the site is "no tech jargon, ever." A proposal
  full of stack names breaks that promise.
- Confident but not corporate. Short, direct sentences, contractions are
  fine ("we'll", "you don't have to").
- Emphasize what's taken care of *for* the client ("we handle hosting",
  "just send us what you'd like updated") — the core value prop is
  removing tech burden, not showcasing technical depth.
- For larger/custom software clients (like a referred ecommerce app),
  keep the same plain-English tone — don't switch into ABCCode-style
  engineer-speak just because the project is bigger.

## Logo

- **Wordmark:** "EJSCOTT" in Space Grotesk Bold (ink), with "Group" on a
  tilted green sticker tag, the same treatment as the highlighted words in
  the homepage headline. Always the full name; never shorten it to "EJ".
- **Files:** `public/logo.svg` (light backgrounds), `public/logo-dark.svg`
  (ink backgrounds), `public/logo.png` (512px square, for structured data).
  The letters are outlined shapes, so they don't depend on fonts loading.
- **Tab and app icons only:** an "EJ" green sticker square
  (`app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`,
  `public/mark.svg`). The full name can't be read at 16px; use this mark
  only where the space is too small for the wordmark.

## Visual system

- **Fonts:** Space Grotesk (display/headings), Work Sans (body). Never
  Inter. Shared with ABCCode by design lineage, not coincidence.
- **Colors:** cream background (`#fbfaf6`), ink text (`#0e1210`), green
  accent (`#5ee392` / deep `#2f9e5f`), blue accent (`#3d63ff`).
- **Signature effect — the "sticker":** same hard-shadow bordered card/
  badge treatment as ABCCode (2–2.5px ink border, `6px 6px 0 0 ink`
  offset shadow, no blur). Rotated sticker badges highlight key phrases
  in headlines.
- **Layout:** one-page site, anchor-nav sections (Services / Work / About
  / Contact), generous whitespace, `border-b-[2.5px] border-ink` section
  dividers instead of soft shadows.
- **Motion:** scroll-reveal fades, mouse-tilt hero card — same restrained
  approach as ABCCode. No gratuitous animation.
- No emojis, no gradient text, no neon glow, no pure black. Real project
  screenshots only (no stock photography) — the Work section exists to
  prove real, local credibility.

## Offer & pricing

- **Lead offer:** a free homepage design before the client pays anything.
  The deposit is taken once they're happy with it. Every CTA points at this
  ("Get your free design"), except custom/app work, which gets "Get a fixed
  quote".
- **Two ways to pay:** deposit + monthly (12-month minimum, everything
  included) or pay once plus a small monthly hosting-and-changes fee.
  Custom builds (shops, apps, portals) are a fixed quote paid in 2–3 stages.
- **Published prices** live in the `plans` and `faqs` arrays at the top of
  `app/page.tsx`. Change them there and keep the hero ("From £39/month"),
  the existing-site line (care plans from £15/month) and `app/layout.tsx`
  description in step.
- **Turnaround:** say "most websites are live within a week". Never promise
  "today".
- **Personal voice:** Services and Pricing speak as "we" (the studio).
  About, FAQ answers and the contact form speak as Ethan ("I"). No photo.
- **Contact:** phone and WhatsApp appear in About, under the form, in the
  footer and in the mobile-only bottom bar. Keep all four in sync via the
  constants at the top of `app/page.tsx`.
- **Referrals:** clients get a free month, anyone else gets £50, and the
  referred business gets £50 off (`referral` in `lib/site.ts`). The reward
  is due once the referred business pays its deposit. Rewards are for
  introductions only, never for reviews. Details and terms live on `/refer`;
  the contact form asks "Did someone recommend me?" so referrals get credited.
- **Testimonials:** real client quotes only, added to the `testimonials`
  array. The section stays hidden while it's empty.

## Town and industry pages

- **Towns** live in `lib/towns.ts` (served at `/web-design/[town]`) and
  **industries** in `lib/industries.ts` (`/websites-for/[industry]`). Add
  an entry there and the page, footer links, homepage links and sitemap all
  follow.
- **Personal only where it's true.** Ethan grew up in Hitchin, lives in
  Stevenage, and has a client in Letchworth (DJ Steve Dee). Only those towns
  get a `personal` block. Never claim local clients, years in a town or
  results that aren't real; add them when they are.
- **Every page needs its own words.** Don't copy one town's text to another
  with the name swapped. Google treats near-duplicate pages as spam. Use real
  local detail (streets, landmarks, the kind of businesses there).
- Shared building blocks (`SiteHeader`, `SiteFooter`, `Pricing`,
  `ContactSection`, `FaqList`, `WorkGrid`, `MobileContactBar`) keep every
  page on-brand. The contact form records which page a lead came from.

## Client proposals

Proposals should feel personal and low-friction — reflecting that clients
are usually busy owners who want the tech handled, not analyzed. Standard
sections, in order:

1. **What you told me** (2–3 sentences) — plain restatement of the
   client's need, in their words. Builds trust that you listened,
   especially important for non-technical clients.
2. **What I'll build** — short bullet list in plain English, no jargon.
   E.g. "A booking page customers can use any time of day" not "a
   calendar-integrated scheduling microservice."
3. **What's included ongoing** — hosting, updates, support terms. This
   is a core differentiator for EJSCOTT Group (vs. a freelancer who
   disappears after launch) and must appear in every proposal, even
   small ones.
4. **Timeline** — a plain date or "under a week" style estimate where
   true. Avoid vague ranges when you can commit to something concrete.
5. **Price** — one flat number where possible. If milestone-based (larger
   custom builds), break it into 2–3 plain payment stages, not a
   detailed rate card.
6. **Next step** — one clear action ("Reply and I'll get started this
   week" / call the mobile number). Always leave the phone number as an
   option — the site itself offers it as an alternative to the form.

For larger custom software/web app engagements (e.g. bespoke ecommerce),
the same structure applies — just expand section 2 with a bit more
technical specificity, and be explicit in section 3 about what "ongoing"
support means for something more complex than a marketing site. Don't
inflate the proposal into a slide deck or add corporate boilerplate; it
should still read like it came from one person who's easy to reach.

Formatting: single plain document (PDF or markdown/email), no cover page,
no logos-on-every-page deck styling. One page for small sites, up to two
for custom software builds.
