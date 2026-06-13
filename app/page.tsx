// app/page.tsx
"use client";
import { useState } from "react";
export default function EJScottLanding() {

const [form, setForm] = useState({
  name: "",
  business: "",
  contact: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
}
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", business: "", contact: "" });
    } else {
      alert("Something went wrong.");
    }
  } catch (err) {
    alert("Network error.");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg tracking-tight">
              EJ
            </div>
            <div className="leading-tight">
              <div className="font-bold text-xl tracking-tight">EJSCOTT Group</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-emerald-600 font-semibold">
                Websites for Hertfordshire
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#services" className="hover:text-emerald-600 transition-colors">
              Services
            </a>
            <a href="#work" className="hover:text-emerald-600 transition-colors">
              Our Work
            </a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors"
          >
            Get Online Today
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full border-[2px] border-emerald-500/20" />
          <div className="absolute -top-12 -right-12 w-[20rem] h-[20rem] rounded-full border-[2px] border-black/5" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Get your business online
              <span className="text-emerald-600"> today.</span>
            </h1>

            <p className="text-lg md:text-xl text-black/60 mb-10 max-w-xl">
              We design, build and manage your entire online presence, from the website to bookings and updates: so you don&apos;t have to. Perfect
              for busy owners who&apos;d rather leave the tech to us. 
              <br/><br/>
              Specialising across <strong>Hertfordshire</strong>, from Stevenage to Hemel Hempstead, and Bishop's Stortford to Berkhamsted, and <strong>beyond</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-black text-white hover:bg-emerald-600 px-8 py-4 rounded-full font-semibold text-base transition-colors"
              >
                Get Online Today
              </a>
              <a
                href="#work"
                className="border-2 border-black hover:border-emerald-600 hover:text-emerald-600 px-8 py-4 rounded-full font-semibold text-base transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip 
      <section className="border-b border-black/10 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-medium uppercase tracking-[0.15em] text-white/70">
          {towns.map((town) => (
            <span key={town} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {town}
            </span>
          ))}
        </div>
      </section>*/}

      {/* Services */}
      <section id="services" className="py-24 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-emerald-600 uppercase tracking-[0.25em] text-xs font-bold mb-3">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              We handle the tech, you run the business
            </h2>
            <p className="text-lg text-black/60">
              Not confident with computers? No problem. We take care of your
              entire online presence — building it, hosting it, and keeping
              it up to date — so you can focus on what you do best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-3xl overflow-hidden">
            <div className="bg-white p-10 hover:bg-emerald-50 transition-colors">
              <div className="text-xs font-bold text-emerald-600 mb-6">01</div>
              <h3 className="text-2xl font-bold mb-3">A Website Built &amp; Managed For You</h3>
              <p className="text-black/60 leading-relaxed">
                Clean, mobile-friendly websites that showcase your business,
                services and contact details. We handle the setup, hosting
                and changes — just send us what you&apos;d like updated.
              </p>
            </div>

            <div className="bg-white p-10 hover:bg-emerald-50 transition-colors">
              <div className="text-xs font-bold text-emerald-600 mb-6">02</div>
              <h3 className="text-2xl font-bold mb-3">Online Booking Systems</h3>
              <p className="text-black/60 leading-relaxed">
                Let customers book appointments around the clock — ideal for
                nail salons, barbers, beauty therapists and other
                appointment-based businesses. No more missed calls.
              </p>
            </div>

            <div className="bg-white p-10 hover:bg-emerald-50 transition-colors">
              <div className="text-xs font-bold text-emerald-600 mb-6">03</div>
              <h3 className="text-2xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-black/60 leading-relaxed">
                E-commerce stores, advanced booking systems, or fully bespoke
                designs — built around exactly what your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 border-b border-black/10 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-emerald-500 uppercase tracking-[0.25em] text-xs font-bold mb-3">
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Recent projects in Hertfordshire
            </h2>
            <p className="text-lg text-white/60">
              Helping local businesses look professional and win more customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group border border-white/15 rounded-3xl overflow-hidden hover:border-emerald-500 transition-colors">
              <div className="aspect-video bg-white/5 border-b border-white/15 overflow-hidden">
                <img
                  src="/djstevedee.png"
                  alt="DJ Steve Dee"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 mb-2">
                 Events DJ · Letchworth
                </div>

                <h4 className="text-xl font-bold mb-2">Modern DJ Website</h4>

                <p className="text-white/60">
                  A modern, conversion-focused site showcasing DJ Steve&apos;s music, events and services - delivering a clear uplift in enquiries and regular bookings.
                </p>
                <a
                  href="https://www.djstevedee.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-white/70 hover:border-emerald-500 hover:text-white transition-colors"
                >
                  View site
                </a>
              </div>
            </div>

            <div className="group border border-white/15 rounded-3xl overflow-hidden hover:border-emerald-500 transition-colors">
              <div className="aspect-video bg-white/5 border-b border-white/15 overflow-hidden">
                <img
                  src="/hempteach.png"
                  alt="Tutoring Business"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 mb-2">
                  Tutor &middot; Hertfordshire
                </div>
                <h4 className="text-xl font-bold mb-2">Tutoring Business</h4>
                <p className="text-white/60">
                  A clean, trust-building website for a local tutor that highlights services, testimonials and easy booking - helping convert visitors into students.
                </p>
                <a
                  href="https://www.hempteach.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-white/70 hover:border-emerald-500 hover:text-white transition-colors"
                >
                  View site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-emerald-600 uppercase tracking-[0.25em] text-xs font-bold mb-3">
                About
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8">
                Local expertise for Hertfordshire businesses
              </h2>
              <div className="space-y-5 text-lg text-black/60">
                <p>
                  We build modern, effective websites that help small
                  businesses in Hertfordshire succeed online. Whether you&apos;re
                  a cafe in St Albans, a tradesperson in Watford, or a shop in
                  Hemel Hempstead: we know what local customers are looking for.
                </p>
                <p>
                  Best of all, we don&apos;t just hand you a website and
                  disappear. We look after hosting, security, updates and
                  changes for you, so if you&apos;re not a &ldquo;computer
                  person&rdquo;, that&apos;s exactly what we&apos;re here for.
                </p>
              </div>
            </div>

            <div className="border-2 border-black rounded-3xl p-10">
              <div className="text-xl font-bold mb-6">What we take care of for you</div>
              <ul className="space-y-4 text-black/60 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Website design, build and hosting:</strong> all sorted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Ongoing updates:</strong> just send us what you need changed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Online booking for appointment-led businesses:</strong> streamline your scheduling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Plain-English support:</strong> no tech jargon, ever.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-emerald-600 uppercase tracking-[0.25em] text-xs font-bold mb-3">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Ready to get online today?
          </h2>
          <p className="text-lg text-black/60 mb-10">
              Share a few details about your business and we'll handle everything else — no jargon, no stress, just a high-quality website built for you, often in under a week.
          </p>

          <div className="border-2 border-black rounded-3xl p-10 text-left">
            <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
  <div>
    <label className="block text-sm mb-2 font-semibold">Your Name</label>
    <input
      name="name"
      value={form.name}
      onChange={handleChange}
      type="text"
      className="w-full px-5 py-3.5 rounded-2xl border-2 border-black/10 focus:outline-none focus:border-emerald-600 transition-colors"
      placeholder="Your name"
      required
    />
  </div>

  <div>
    <label className="block text-sm mb-2 font-semibold">
      Business Name & Location
    </label>
    <input
      name="business"
      value={form.business}
      onChange={handleChange}
      type="text"
      className="w-full px-5 py-3.5 rounded-2xl border-2 border-black/10 focus:outline-none focus:border-emerald-600 transition-colors"
      placeholder="e.g. Bloom Cafe, St Albans"
      required
    />
  </div>

  <div>
    <label className="block text-sm mb-2 font-semibold">
      Email or Phone
    </label>
    <input
      name="contact"
      value={form.contact}
      onChange={handleChange}
      type="text"
      className="w-full px-5 py-3.5 rounded-2xl border-2 border-black/10 focus:outline-none focus:border-emerald-600 transition-colors"
      placeholder="hello@gmail.com or 07..."
      required
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-black hover:bg-emerald-600 disabled:opacity-50 text-white py-4 rounded-2xl font-bold text-lg transition-colors"
  >
    {loading ? "Sending..." : "Send Message — Let's Talk"}
  </button>

  {success && (
    <p className="text-emerald-600 text-sm font-medium text-center">
      Message sent — we’ll get back to you soon.
    </p>
  )}
</form>
          </div>

          <p className="mt-8 text-sm text-black/50">
            Or phone us directly at{" "}
            <a href="tel:07301573293" className="hover:text-emerald-600 transition-colors">
            <span className="font-semibold text-emerald-600">
              07301 573293
            </span>
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black font-bold">
              EJ
            </div>
            <div className="font-bold text-xl">EJSCOTT Group</div>
          </div>
          <p className="text-white/50 max-w-md mx-auto">
            Professional web design for small businesses across Hertfordshire.
          </p>
          <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/40">
            © {new Date().getFullYear()} EJSCOTT Group &middot;
          </div>
        </div>
      </footer>
    </div>
  );
}