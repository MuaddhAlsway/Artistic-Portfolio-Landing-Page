import { useLayoutEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: "https://images.unsplash.com/photo-1570724546132-6a61bb3c3894?auto=format&fit=crop&w=1600&q=88",
  heritage:
    "https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?auto=format&fit=crop&w=1800&q=88",
  script:
    "https://images.unsplash.com/photo-1646229227468-ba6eb534d368?auto=format&fit=crop&w=1400&q=88",
  textile:
    "https://images.unsplash.com/photo-1584371632528-60e154034672?auto=format&fit=crop&w=1800&q=88",
  riyadh:
    "https://images.unsplash.com/photo-1694018359679-49465b4c0d61?auto=format&fit=crop&w=1800&q=88",
  medina:
    "https://images.unsplash.com/photo-1551041777-ed277b8dd348?auto=format&fit=crop&w=1400&q=88",
  ink: "https://images.unsplash.com/photo-1705294108409-c730a280d1e0?auto=format&fit=crop&w=1400&q=88",
  room: "https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?auto=format&fit=crop&w=1800&q=88",
  night:
    "https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1800&q=88",
};

const projects = [
  {
    title: "ROOTS / جذور",
    type: "Cultural Identity",
    year: "2025",
    image: images.heritage,
    alt: "Najdi mud-brick architecture reflected in rainwater",
  },
  {
    title: "NUQTA / نقطة",
    type: "Brand Direction",
    year: "2024",
    image: images.script,
    alt: "Intricate Arabic calligraphy across a vaulted ceiling",
  },
  {
    title: "RED THREAD / خيط",
    type: "Art Direction",
    year: "2025",
    image: images.textile,
    alt: "Deep red textile folded into a sculptural composition",
  },
  {
    title: "AFTER LIGHT / ضوء",
    type: "Place Branding",
    year: "2024",
    image: images.riyadh,
    alt: "Riyadh skyline beneath a warm amber sky",
  },
  {
    title: "MINARET / منارة",
    type: "Editorial",
    year: "2023",
    image: images.medina,
    alt: "White minaret against a clear blue sky",
  },
  {
    title: "INK / حبر",
    type: "Visual Language",
    year: "2024",
    image: images.ink,
    alt: "Close detail of Arabic lettering",
  },
  {
    title: "THE SALON / المجلس",
    type: "Hospitality Identity",
    year: "2023",
    image: images.room,
    alt: "Contemporary interior with Arabic art",
  },
  {
    title: "NIGHT HOUSE / دار",
    type: "Brand Experience",
    year: "2024",
    image: images.night,
    alt: "People gathering outside a building at night",
  },
  {
    title: "EARTH / أرض",
    type: "Packaging System",
    year: "2025",
    image: images.hero,
    alt: "Sun-washed Saudi architecture",
  },
];

function Header({ dark = false }: { dark?: boolean }) {
  return (
    <header className={`site-header ${dark ? "site-header--dark" : ""}`}>
      <a className="wordmark" href="/" aria-label="Three Sisters home">
        THREE SISTERS
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="/#work">WORK</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          INSTAGRAM
        </a>
        <a href="https://behance.net" target="_blank" rel="noreferrer">
          BEHANCE
        </a>
      </nav>
    </header>
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useImageReveal(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((image) => {
        gsap.from(image, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: image, start: "top 86%", once: true },
        });
      });
    }, scope);
    return () => context.revert();
  }, [scope]);
}

function ProjectFigure({
  project,
  index,
  className = "",
}: {
  project: (typeof projects)[number];
  index: number;
  className?: string;
}) {
  return (
    <article className={`project ${className}`}>
      <a className="project-image image-reveal" href="/portfolio">
        <img src={project.image} alt={project.alt} loading={index > 1 ? "lazy" : "eager"} />
        <span className="project-view">VIEW PROJECT ↗</span>
      </a>
      <div className="project-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="project-title">{project.title}</span>
        <span>
          {project.type} — {project.year}
        </span>
      </div>
    </article>
  );
}

function LandingPage() {
  const page = useRef<HTMLDivElement>(null);

  useImageReveal(page);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      gsap.from(".hero-line > span", {
        yPercent: 110,
        duration: 1.15,
        stagger: 0.12,
        ease: "power4.out",
      });
      gsap.from(".hero-visual", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.35,
        delay: 0.2,
        ease: "power3.inOut",
      });
      gsap.to(".hero-visual img", {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(".marquee-track", {
        xPercent: 0,
        duration: 24,
        repeat: -1,
        ease: "none",
      });
    }, page);
    return () => context.revert();
  }, []);

  return (
    <div ref={page}>
      <main>
        <section className="hero">
          <Header />
          <div className="hero-identity" aria-label="Three Sisters">
            <div className="hero-line">
              <span>THREE</span>
            </div>
            <div className="hero-line hero-line--second">
              <span>SISTERS</span>
            </div>
          </div>
          <div className="hero-caption">
            <p>CREATIVE STUDIO</p>
            <p>JEDDAH — SAUDI ARABIA</p>
          </div>
          <div className="hero-arabic" lang="ar" dir="rtl">
            ثلاث أخوات
          </div>
          <figure className="hero-visual">
            <img src={images.hero} alt="Sun-washed Saudi architecture" />
            <figcaption>SAUDI CONTEMPORARY — 2025</figcaption>
          </figure>
        </section>

        <section className="clients" aria-labelledby="clients-title">
          <p id="clients-title" className="eyebrow">
            SELECTED CLIENTS
          </p>
          <div className="marquee" aria-label="Client work is shared on request">
            <div className="marquee-track">
              <span>CLIENT WORK SHARED ON REQUEST</span><i>✦</i>
              <span>JEDDAH — RIYADH — THE WORLD</span><i>✦</i>
              <span>CLIENT WORK SHARED ON REQUEST</span><i>✦</i>
              <span>JEDDAH — RIYADH — THE WORLD</span><i>✦</i>
            </div>
          </div>
        </section>

        <section className="selected-work" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <p className="eyebrow">03 — SELECTED WORK</p>
            <h2 id="work-title">A FEW STORIES,<br />TOLD WITH INTENTION.</h2>
          </div>
          <div className="project-composition">
            <ProjectFigure project={projects[0]} index={0} className="project--one" />
            <ProjectFigure project={projects[1]} index={1} className="project--two" />
            <ProjectFigure project={projects[2]} index={2} className="project--three" />
          </div>
          <a className="view-all" href="/portfolio">
            VIEW ALL PROJECTS <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
        <div className="footer-call">
          <p>LET&apos;S CREATE</p>
          <p>SOMETHING</p>
          <p>MEANINGFUL.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@threesisters.sa">EMAIL ↗</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">BEHANCE ↗</a>
        </div>
        <div className="footer-mark" aria-hidden="true">THREE SISTERS</div>
      </footer>
    </div>
  );
}

function PortfolioPage() {
  const page = useRef<HTMLDivElement>(null);

  useImageReveal(page);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      gsap.from(".archive-line > h1", {
        yPercent: 110,
        duration: 1.15,
        ease: "power4.out",
      });
      gsap.from(".portfolio-eyebrow, .portfolio-arabic", {
        opacity: 0,
        y: 14,
        duration: 0.9,
        delay: 0.15,
        ease: "power2.out",
      });
    }, page);
    return () => context.revert();
  }, []);

  return (
    <div className="portfolio-page" ref={page}>
      <Header dark />
      <main>
        <div className="portfolio-intro">
          <p className="eyebrow portfolio-eyebrow">ARCHIVE — 2023/25</p>
          <div className="archive-line">
            <h1>ALL PROJECTS</h1>
          </div>
          <p className="portfolio-arabic" lang="ar" dir="rtl">أعمال مختارة</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectFigure key={project.title} project={project} index={index} />
          ))}
        </div>
      </main>
      <div className="portfolio-end">
        <a href="/">← BACK TO HOME</a>
        <span>THREE SISTERS — JEDDAH</span>
      </div>
    </div>
  );
}

export default function App() {
  return window.location.pathname === "/portfolio" ? <PortfolioPage /> : <LandingPage />;
}
