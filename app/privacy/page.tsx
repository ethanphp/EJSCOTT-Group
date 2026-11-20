import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { PHONE_DISPLAY, SITE_URL, company, ogImage } from "@/lib/site";

// Update this whenever the policy's wording changes.
const LAST_UPDATED = "20 November 2026";

const title = "Privacy Policy";
const description = `How ${company.legalName} collects, uses and looks after your personal details when you use this website or work with us.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", siteName: "EJSCOTT Group", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
};

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{heading}</h2>
      <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/70 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const email = (
    <a href={`mailto:${company.email}`} className="font-semibold text-ink underline underline-offset-4 hover:text-blue">
      {company.email}
    </a>
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Privacy", url: `${SITE_URL}/privacy` },
        ])}
      />

      <SiteHeader />

      <main className="flex-1">
        <article className="mx-auto max-w-[760px] px-5 pt-14 pb-24 md:px-10 md:pt-20 md:pb-32">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/60">
              <li>
                <Link href="/" className="hover:text-ink hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-ink">Privacy</li>
            </ol>
          </nav>

          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
            Privacy policy
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
            How I look after your details.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70 md:text-xl">
            This explains what personal details I collect, why, and what you can ask me to do
            with them. The short version: I only use your details to reply to you and do the
            work you ask for. I never sell them.
          </p>
          <p className="mt-4 text-sm text-ink/60">Last updated {LAST_UPDATED}.</p>

          <Section heading="Who I am">
            <p>
              This website is run by {company.legalName} (&ldquo;EJSCOTT Group&rdquo;,
              &ldquo;I&rdquo;, &ldquo;me&rdquo;), a company registered in {company.registeredIn}{" "}
              with company number {company.number}. The registered office is{" "}
              {company.registeredOffice}.
            </p>
            <p>
              {company.legalName} is the data controller for the personal details described
              here. Any products we run under other trading names have their own privacy
              policies.
            </p>
            <p>
              For anything about your details, email {email} or call {PHONE_DISPLAY}.
            </p>
          </Section>

          <Section heading="What I collect">
            <ul>
              <li>
                <strong className="text-ink">When you ask for a free design or quote:</strong>{" "}
                your name, business name, email or phone number, what you&apos;re looking for,
                your message, and who recommended me if you tell me.
              </li>
              <li>
                <strong className="text-ink">When you refer a business:</strong> your name and
                contact details, whether you&apos;re a client, and the business you&apos;re
                referring. You can also give me their contact details. Please only do that if
                they&apos;re happy for me to get in touch.
              </li>
              <li>
                <strong className="text-ink">When you call, text, email or WhatsApp me:</strong>{" "}
                your number or email address and whatever you send me.
              </li>
              <li>
                <strong className="text-ink">When you become a client:</strong> the contact,
                billing and payment details needed to invoice you, plus the content you send
                me for your website or app.
              </li>
              <li>
                <strong className="text-ink">When you visit the site:</strong> anonymous visit
                statistics, such as which pages are viewed and the type of device. This
                doesn&apos;t identify you (see &ldquo;Cookies and analytics&rdquo; below).
              </li>
            </ul>
          </Section>

          <Section heading="Why I use it, and the legal basis">
            <ul>
              <li>
                <strong className="text-ink">To reply to your enquiry and prepare your design or
                quote.</strong> This is to take steps you&apos;ve asked for before a contract,
                or my legitimate interest in replying to people who contact me.
              </li>
              <li>
                <strong className="text-ink">To do the work and look after your site or
                app.</strong> This is to perform our contract with you.
              </li>
              <li>
                <strong className="text-ink">To invoice you and keep business records.</strong>{" "}
                This is to meet legal obligations, such as tax and accounting rules.
              </li>
              <li>
                <strong className="text-ink">To run the referral scheme and contact a referred
                business once.</strong> This is my legitimate interest in growing the business
                through recommendations. If they&apos;re not interested, I won&apos;t contact
                them again.
              </li>
              <li>
                <strong className="text-ink">To understand how the site is used and improve
                it.</strong> This is my legitimate interest, using anonymous statistics only.
              </li>
            </ul>
            <p>I don&apos;t send marketing emails, and I don&apos;t sell or rent your details to anyone.</p>
          </Section>

          <Section heading="Who else sees it">
            <p>I use a small number of trusted services to run the business. They only handle your details on my instructions:</p>
            <ul>
              <li><strong className="text-ink">Vercel</strong>, which keeps this website online.</li>
              <li><strong className="text-ink">Resend</strong>, which delivers form enquiries to my inbox.</li>
              <li><strong className="text-ink">Cloudflare</strong>, for anonymous visit statistics.</li>
              <li>My email, phone and WhatsApp providers, when you contact me that way.</li>
              <li>My accountant, and payment and banking providers, for client invoices and records.</li>
            </ul>
            <p>
              Some of these services are based in, or store data in, the United States. Where
              that happens, they&apos;re covered by UK-approved safeguards such as the UK
              Extension to the EU-US Data Privacy Framework or standard contractual clauses.
            </p>
            <p>I&apos;ll only share your details with anyone else if the law requires it.</p>
          </Section>

          <Section heading="How long I keep it">
            <ul>
              <li>
                <strong className="text-ink">Enquiries and referrals that don&apos;t go
                ahead:</strong> up to 2 years, in case you come back, then deleted.
              </li>
              <li>
                <strong className="text-ink">Client records:</strong> for as long as we work
                together, then 6 years after the end of the financial year, as tax law
                requires.
              </li>
            </ul>
            <p>You can ask me to delete your details sooner, and I will unless I&apos;m legally required to keep them.</p>
          </Section>

          <Section heading="Cookies and analytics">
            <p>
              This site doesn&apos;t use advertising or tracking cookies. Visit statistics come
              from Cloudflare Web Analytics, which doesn&apos;t use cookies, doesn&apos;t
              track you across other websites and doesn&apos;t identify individual visitors.
              That&apos;s why you won&apos;t see a cookie banner.
            </p>
          </Section>

          <Section heading="Your rights">
            <p>Under UK data protection law you can ask me to:</p>
            <ul>
              <li>give you a copy of the details I hold about you</li>
              <li>correct anything that&apos;s wrong</li>
              <li>delete your details</li>
              <li>stop or limit how I use them, or object to me using them</li>
              <li>send your details to you or another organisation in a common format</li>
            </ul>
            <p>
              Just email {email}. There&apos;s no charge, and I&apos;ll reply within one month.
            </p>
          </Section>

          <Section heading="Keeping it safe">
            <p>
              Your details are kept in secure, password-protected accounts that only I can
              access. The website is served over a secure, encrypted connection.
            </p>
          </Section>

          <Section heading="Complaints">
            <p>
              If you&apos;re unhappy with how I&apos;ve handled your details, please tell me
              first so I can put it right. You can also complain to the Information
              Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink underline underline-offset-4 hover:text-blue"
              >
                ico.org.uk
              </a>{" "}
              or on 0303 123 1113.
            </p>
          </Section>

          <Section heading="Changes to this policy">
            <p>If anything changes, I&apos;ll update this page and the date at the top.</p>
          </Section>
        </article>
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
