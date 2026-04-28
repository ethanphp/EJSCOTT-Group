"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Services", "Work", "Contact"];


const PROJECTS = [
  {
    name: "STACC Sessions",
    tag: "Web App",
    image: "/stacc-portfolio.png",
  },
  {
    name: "hempTEACH",
    tag: "Website",
    image: "/ht-portfolio.png",
  },
  {
    name: "Social Neto",
    tag: "Social Network (Web & Mobile)",
    image: "/snj-portfolio.png",
  },
];

const SERVICES = [
  { label: "Custom Website Development", num: "01" },
  { label: "Web Applications", num: "02" },
  { label: "Mobile Apps", num: "03" },
  { label: "UI / UX Design", num: "04" },
];

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export default function EJScottLanding() {
  const mouse = useMousePosition();
  const mounted = useMounted();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const brandsRef = useRef(null);
  const [brandsVisible, setBrandsVisible] = useState(false);
  const workRef = useRef(null);
  const [workVisible, setWorkVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);


  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBrandsVisible(true); },
      { threshold: 0.15 }
    );
    if (brandsRef.current) obs.observe(brandsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWorkVisible(true); },
      { threshold: 0.15 }
    );
    if (workRef.current) obs.observe(workRef.current);
    return () => obs.disconnect();
  }, []);

  const cursorX = mounted ? mouse.x : 0;
  const cursorY = mounted ? mouse.y : 0;

  return (
    <div style={{
      background: "#0A0A0A",
      color: "#F0EDE6",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      minHeight: "100vh",
      overflowX: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection { background: #C8FF00; color: #0A0A0A; }

        html { scroll-behavior: smooth; }

        .cursor-glow {
          pointer-events: none;
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: 0;
          transition: transform 0.1s ease;
        }

        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.5);
          text-decoration: none;
          transition: color 0.25s;
          cursor: pointer;
        }
        .nav-link:hover { color: #C8FF00; }

        .hero-word {
          display: block;
          overflow: hidden;
        }
        .hero-word-inner {
          display: block;
          transform: translateY(110%);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-visible .hero-word-inner {
          transform: translateY(0);
        }
        .hero-word-inner:nth-child(1) { transition-delay: 0s; }
        .hero-word-inner:nth-child(2) { transition-delay: 0.08s; }
        .hero-word-inner:nth-child(3) { transition-delay: 0.16s; }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-row {
          border-top: 1px solid rgba(240,237,230,0.08);
          padding: 28px 0;
          display: flex;
          align-items: center;
          gap: 40px;
          cursor: default;
          transition: background 0.2s;
        }
        .service-row:last-child { border-bottom: 1px solid rgba(240,237,230,0.08); }
        .service-row:hover .service-label { color: #C8FF00; }
        .service-row:hover .service-arrow { opacity: 1; transform: translateX(0); }

        .service-num {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(240,237,230,0.25);
          letter-spacing: 0.1em;
          min-width: 36px;
        }
        .service-label {
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 300;
          letter-spacing: -0.01em;
          transition: color 0.25s;
          flex: 1;
        }
        .service-arrow {
          font-size: 20px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.25s, transform 0.25s;
          color: #C8FF00;
        }

        .brand-card {
          border: 1px solid rgba(240,237,230,0.1);
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.4s cubic-bezier(0.16,1,0.3,1);
          opacity: 0;
          transform: translateY(40px);
        }
        .brand-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .brand-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .brand-card:hover { border-color: rgba(240,237,230,0.3); }
        .brand-card:hover::before { opacity: 1; }

        .brand-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
        }
        .brand-name {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .brand-desc {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(240,237,230,0.55);
          font-style: italic;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 36px;
          background: #C8FF00;
          color: #0A0A0A;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .cta-btn:hover { background: #d4ff33; transform: translateY(-1px); }
        .cta-btn-ghost {
          background: transparent;
          color: #F0EDE6;
          border: 1px solid rgba(240,237,230,0.25);
        }
        .cta-btn-ghost:hover { background: rgba(240,237,230,0.05); transform: translateY(-1px); }

        .marquee-track {
          display: flex;
          gap: 60px;
          animation: marquee 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.35);
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .section-label::after {
          content: '';
          height: 1px;
          width: 40px;
          background: rgba(240,237,230,0.2);
          display: block;
        }

        .stat-num {
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #C8FF00;
        }
        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.4);
          margin-top: 8px;
        }

        .divider {
          width: 1px;
          background: rgba(240,237,230,0.1);
          align-self: stretch;
        }

        @media (max-width: 768px) {
          .brands-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-direction: column; gap: 32px !important; }
          .divider { width: 40px; height: 1px; }
          .hero-title { font-size: clamp(56px, 14vw, 96px) !important; }
          .nav-links { display: none; }
        }

        .line-reveal {
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 0.6s, transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .line-reveal.visible {
          opacity: 1;
          transform: scaleX(1);
        }
      `}</style>

      {/* Noise grain overlay */}
      <div className="noise-overlay" />

      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: cursorX, top: cursorY }}
      />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px clamp(20px,6vw,48px)",
        background: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}>
        <div style={{ fontFamily: "DM Mono", fontSize: 13 }}>
          EJSCOTT<span style={{ color: "#C8FF00" }}>.</span>
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 40 }}>
            {NAV_LINKS.map(l => <span key={l}>{l}</span>)}
          </div>
        )}

        {/* Mobile button */}
        {isMobile && (
          <div onClick={() => setMenuOpen(true)} style={{ fontSize: 24 }}>
            ☰
          </div>
        )}
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "#0A0A0A",
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
        }}>
          {NAV_LINKS.map(l => (
            <div key={l} style={{ fontSize: 28 }}>{l}</div>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 40,
              background: "#C8FF00",
              border: "none",
              padding: "12px 24px",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 48px 80px",
        position: "relative",
      }}>
        {/* Background grid lines */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }} />
        {/* Accent line top-right */}
        <div style={{
          position: "absolute",
          top: "18%",
          right: "8%",
          width: 1,
          height: 120,
          background: "linear-gradient(to bottom, transparent, #C8FF00, transparent)",
          opacity: 0.4,
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200 }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(240,237,230,0.35)",
            marginBottom: 48,
            opacity: heroVisible ? 1 : 0,
            transition: "opacity 0.8s 0.4s",
          }}>
            Est. 2024 — London
          </div>

          <h1
            className={heroVisible ? "hero-visible" : ""}
            style={{
              fontSize: "clamp(72px, 11vw, 160px)",
              fontWeight: 300,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              marginBottom: 56,
            }}
          >
            {["Custom", "Websites & Apps", "Built Properly"].map((word, i) => (
              <span key={i} className="hero-word">
                <span
                  className="hero-word-inner"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    fontStyle: i === 1 ? "italic" : "normal",
                    color: i === 2 ? "rgba(240,237,230,0.4)" : "#F0EDE6",
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
          }}>
            <p style={{
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(240,237,230,0.5)",
              maxWidth: 480,
              lineHeight: 1.6,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "none" : "translateY(16px)",
              transition: "opacity 0.8s 0.6s, transform 0.8s 0.6s",
            }}>
              We design and build high-performance websites, apps and software - tailored to your needs, line by line.
            </p>
            <div style={{
              display: "flex",
              gap: 16,
              flexShrink: 0,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "none" : "translateY(16px)",
              transition: "opacity 0.8s 0.75s, transform 0.8s 0.75s",
            }}>
              <a className="cta-btn" href="#contact">Start a project</a>
              <a className="cta-btn cta-btn-ghost" href="#services">Our work</a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: 40,
          right: 48,
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(240,237,230,0.25)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          opacity: heroVisible ? 1 : 0,
          transition: "opacity 0.8s 1s",
        }}>
          Scroll
          <div style={{
            width: 40,
            height: 1,
            background: "rgba(240,237,230,0.2)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "#C8FF00",
              animation: "marquee 1.6s linear infinite",
              width: "100%",
            }} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{
        borderTop: "1px solid rgba(240,237,230,0.08)",
        borderBottom: "1px solid rgba(240,237,230,0.08)",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
      }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) =>
            [
              "Custom Websites",
              "·",
              "Web Applications",
              "·",
              "Mobile Apps",
              "·",
              "UI / UX Design",
              "·",
              "Performance & Scale",
              "·",
              "Built From Scratch",
              "·"
            ].map((item, i) => (
              <span key={`${rep}-${i}`} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: item === "·" ? "#C8FF00" : "rgba(240,237,230,0.3)",
                flexShrink: 0,
              }}>
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── STATS ── */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{
          display: "flex",
          gap: 64,
          alignItems: "stretch",
          flexWrap: "wrap",
        }} className="stats-row">
          {[
            { num: "Custom", label: "Built From Scratch" },
            { num: "Fast", label: "Performance First" },
            { num: "UK", label: "Based" },
          ].map((s, i) => (
            <>
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
              {i < 2 && <div key={`d${i}`} className="divider" />}
            </>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "0 48px 140px" }}>
        <div className="section-label">Services</div>
        <div style={{
          display: "flex",
          gap: 80,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}>
          <div style={{ flex: "1 1 360px" }}>
            <h2 style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}>
              We build things<br />
              <em style={{ color: "rgba(240,237,230,0.4)" }}>that matter.</em>
            </h2>
            <p style={{
              fontSize: 15,
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(240,237,230,0.45)",
              lineHeight: 1.8,
              maxWidth: 340,
            }}>
              We build custom websites and applications from the ground up — designed for performance, scale, and real-world use.
            </p>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            {SERVICES.map((s) => (
              <div
                key={s.label}
                className="service-row"
                onMouseEnter={() => setActiveService(s.label)}
                onMouseLeave={() => setActiveService(null)}
              >
                <span className="service-num">{s.num}</span>
                <span className="service-label">{s.label}</span>
                <span className="service-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{
        padding: "80px clamp(20px,6vw,48px)"
      }}>
        <h2 style={{ marginBottom: 40 }}>Selected Work</h2>

        <div style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit,minmax(320px,1fr))"
        }}>
          {PROJECTS.map(p => (
            <div key={p.name} style={{
              width: "100%",
            }}>
              <div style={{
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <img
                  src={p.image}
                  style={{
                    width: "100%",
                    height: isMobile ? 220 : 260,
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={{
                marginTop: 12,
                fontSize: 13,
                opacity: 0.5,
              }}>
                {p.tag}
              </div>

              <div style={{
                fontSize: isMobile ? 22 : 18,
                marginTop: 4,
              }}>
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section id="contact" style={{
        margin: "0 48px 120px",
        border: "1px solid rgba(240,237,230,0.1)",
        padding: "80px 64px",
        position: "relative",
        overflow: "hidden",
        background: "rgba(200,255,0,0.02)",
      }}>
        <div style={{
          position: "absolute",
          top: -1,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, #C8FF00, transparent)",
        }} />
        <div style={{ maxWidth: 640 }}>
          <div className="section-label" style={{ marginBottom: 32 }}>Let's work</div>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 40,
          }}>
            Have a project<br />
            <em style={{ color: "#C8FF00" }}>in mind?</em>
          </h2>
          <p style={{
            fontSize: 16,
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(240,237,230,0.45)",
            lineHeight: 1.8,
            marginBottom: 48,
            maxWidth: 400,
          }}>
            Whether you need a custom website, a web app, or a full system — we’ll build it properly, from the ground up.
          </p>
          <a
            className="cta-btn"
            href="mailto:hello@ejscott.co.uk"
            style={{ fontSize: 11 }}
          >
            Start a conversation →
          </a>
        </div>
        {/* Decorative large text */}
        <div style={{
          position: "absolute",
          right: -20,
          bottom: -30,
          fontSize: "clamp(100px, 16vw, 220px)",
          fontWeight: 700,
          color: "rgba(240,237,230,0.025)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}>
          EJS
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "40px clamp(20px,6vw,48px)",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div>EJSCOTT.</div>
        <div style={{ opacity: 0.4, fontSize: 12 }}>
          © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}