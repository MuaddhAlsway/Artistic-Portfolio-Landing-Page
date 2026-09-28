import { useLayoutEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = {
  hero: "1570724546132-6a61bb3c3894",
  heritage: "1590959914819-b767b9fe4cfb",
  script: "1646229227468-ba6eb534d368",
  textile: "1584371632528-60e154034672",
  riyadh: "1694018359679-49465b4c0d61",
  medina: "1551041777-ed277b8dd348",
  ink: "1705294108409-c730a280d1e0",
  room: "1700306692751-1fd5f2b88443",
  night: "1672257694085-3a5c603cda1a",
};

function photo(id: string, width: number, height?: number) {
  const size = height ? `&h=${height}` : "";
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=entropy&w=${width}${size}&q=88`;
}

type GalleryFrame = {
  image: string;
  alt: string;
  caption: string;
  ratio: "wide" | "standard" | "portrait";
};

type Project = {
  slug: string;
  title: string;
  titleEn: string;
  titleAr: string;
  type: string;
  year: string;
  client: string;
  role: string;
  scope: string;
  location: string;
  image: string;
  alt: string;
  standfirst: string;
  body: string[];
  gallery: GalleryFrame[];
  credits: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    slug: "roots",
    title: "ROOTS / جذور",
    titleEn: "ROOTS",
    titleAr: "جذور",
    type: "Cultural Identity",
    year: "2025",
    client: "Heritage Futures Commission",
    role: "Identity & Art Direction",
    scope: "Naming, visual language, environmental graphics",
    location: "At-Turaif, Riyadh",
    image: photo(photos.heritage, 1800),
    alt: "Najdi mud-brick architecture reflected in rainwater",
    standfirst:
      "A cultural identity for a commission restoring Najdi mud-brick heritage, built from the geometry of the wall itself.",
    body: [
      "At-Turaif is not a backdrop. It is the brief. Every proportion in this identity is measured against the rammed-earth wall — the taper of the buttress, the depth of the niche, the way a courtyard holds its own shadow at four in the afternoon.",
      "We drew the wordmark from a load-bearing corner rather than from a reference library, so the letterforms inherit the same weight logic as the structure. The Arabic sits on the same baseline as the Latin, never beneath it: two languages with equal authority over the same wall.",
      "The palette is taken from the site at three moments — wet earth after rain, sun-bleached clay, and the red of a palm-frond midrib. Nothing in the system is applied as decoration. Each element has a structural reason to be there.",
    ],
    gallery: [
      { image: photo(photos.heritage, 2000, 900), alt: "Wide view of rammed-earth heritage architecture", caption: "Site study — the wall as reference", ratio: "wide" },
      { image: photo(photos.heritage, 1400, 1050), alt: "Detail of a mud-brick elevation", caption: "Elevation detail", ratio: "standard" },
      { image: photo(photos.heritage, 1100, 1500), alt: "Vertical study of a mud-brick corner", caption: "Corner condition", ratio: "portrait" },
    ],
    credits: [
      { label: "Photography", value: "Site documentation, 2024" },
      { label: "Arabic Consultancy", value: "Naskh Studio" },
      { label: "Fabrication", value: "Local stone and clay workshop" },
    ],
  },
  {
    slug: "nuqta",
    title: "NUQTA / نقطة",
    titleEn: "NUQTA",
    titleAr: "نقطة",
    type: "Brand Direction",
    year: "2024",
    client: "Nuqta Foundation",
    role: "Brand Direction & Identity",
    scope: "Positioning, identity, typographic system",
    location: "Jeddah",
    image: photo(photos.script, 1400),
    alt: "Intricate Arabic calligraphy across a vaulted ceiling",
    standfirst:
      "A single point, and everything that grows from it. A brand direction for a literary foundation built on one dot of ink.",
    body: [
      "Nuqta means a point — the diacritic that changes the meaning of a letter without changing the letter. It became the whole strategy: one mark, placed with precision, doing the work of a sentence.",
      "The wordmark is set in a modified thuluth with the terminals cut short, so it reads at signage scale and at 14 pixels. We built a variable weight axis rather than a family of styles, letting the mark thicken and thin with the surface it sits on.",
      "Everything else in the system is quiet. A single hairline rule, one accent, and a lot of paper. The restraint is the point: a foundation funded by three sisters wanted to look like an institution, not an event.",
    ],
    gallery: [
      { image: photo(photos.script, 2000, 900), alt: "Calligraphy spanning a vaulted ceiling", caption: "Thuluth reference ceiling", ratio: "wide" },
      { image: photo(photos.script, 1400, 1050), alt: "Detail of interlaced script", caption: "Interlace detail", ratio: "standard" },
      { image: photo(photos.script, 1100, 1500), alt: "Vertical study of letter terminals", caption: "Terminal study", ratio: "portrait" },
    ],
    credits: [
      { label: "Calligrapher", value: "Master thuluth, Cairo" },
      { label: "Type Design", value: "In-house with Naskh Studio" },
      { label: "Print", value: "Offset, two-colour" },
    ],
  },
  {
    slug: "red-thread",
    title: "RED THREAD / خيط",
    titleEn: "RED THREAD",
    titleAr: "خيط",
    type: "Art Direction",
    year: "2025",
    client: "Al Sadu Collective",
    role: "Art Direction",
    scope: "Campaign art direction, textile styling, still life",
    location: "Al-Ahsa",
    image: photo(photos.textile, 1800),
    alt: "Deep red textile folded into a sculptural composition",
    standfirst:
      "Art direction for a weaving collective, shot as sculpture. The campaign treats cloth the way a building treats a wall.",
    body: [
      "Bedouin weaving is usually photographed flat — laid out, catalogued, explained. We wanted it to have weight. Every piece in this campaign was styled on a stand, lit from one side, and allowed to fall into its own shadow.",
      "The reds run from madder to cochineal to the near-black of an overdyed goat hair. We shot the full range in a single session so the campaign reads as one material study rather than nine products.",
      "No props. No styling beyond the fold itself. The compositions were set out on a grid at art direction stage, which is why the campaign still reads as a system when the images are cropped into a grid.",
    ],
    gallery: [
      { image: photo(photos.textile, 2000, 900), alt: "Wide view of a folded red textile", caption: "Madder, single fold", ratio: "wide" },
      { image: photo(photos.textile, 1400, 1050), alt: "Detail of woven red threads", caption: "Weave detail, cochineal", ratio: "standard" },
      { image: photo(photos.textile, 1100, 1500), alt: "Vertical study of draped textile", caption: "Draping study", ratio: "portrait" },
    ],
    credits: [
      { label: "Weavers", value: "Al Sadu Collective, Al-Ahsa" },
      { label: "Photography", value: "Studio, single continuous session" },
      { label: "Dye", value: "Natural madder and cochineal" },
    ],
  },
  {
    slug: "after-light",
    title: "AFTER LIGHT / ضوء",
    titleEn: "AFTER LIGHT",
    titleAr: "ضوء",
    type: "Place Branding",
    year: "2024",
    client: "Riyadh Development Authority",
    role: "Place Branding",
    scope: "Naming, wayfinding, district identity",
    location: "Riyadh",
    image: photo(photos.riyadh, 1800),
    alt: "Riyadh skyline beneath a warm amber sky",
    standfirst:
      "A district identity for the ninety minutes after sunset — the part of the Riyadh day that never appears in a daytime rendering.",
    body: [
      "Every district in Riyadh is branded in daylight. We were asked to brand the hour that follows it: the moment the stone goes from gold to grey and the towers become silhouettes against a warm western sky.",
      "The identity changes colour by time of day rather than by location. A single gradient runs from a hard midday contrast to a low-contrast dusk palette, and the signage does the same — reflective at 4pm, self-lit by 7.",
      "Wayfinding is set in a wide grotesk with an unusually generous line height, because most of it is read at night, at a distance, by someone walking. That constraint did more for the design than any aesthetic decision.",
    ],
    gallery: [
      { image: photo(photos.riyadh, 2000, 900), alt: "Wide view of the Riyadh skyline at dusk", caption: "Dusk gradient, west elevation", ratio: "wide" },
      { image: photo(photos.riyadh, 1400, 1050), alt: "Detail of towers against an amber sky", caption: "Tower silhouettes", ratio: "standard" },
      { image: photo(photos.riyadh, 1100, 1500), alt: "Vertical study of the skyline at nightfall", caption: "Nightfall state", ratio: "portrait" },
    ],
    credits: [
      { label: "Environmental Graphics", value: "Fabricated across nine districts" },
      { label: "Lighting Design", value: "TMA" },
      { label: "Wayfinding", value: "Bilingual, Arabic first" },
    ],
  },
  {
    slug: "minaret",
    title: "MINARET / منارة",
    titleEn: "MINARET",
    titleAr: "منارة",
    type: "Editorial",
    year: "2023",
    client: "Al-Mizan Quarterly",
    role: "Editorial Design",
    scope: "Issue art direction, grid, typographic system",
    location: "Jeddah",
    image: photo(photos.medina, 1400),
    alt: "White minaret against a clear blue sky",
    standfirst:
      "A quarterly issue about verticality. The grid is a single column that keeps trying to become a tower.",
    body: [
      "The brief was one word: height. We built a twelve-column grid where a single column runs the full trim height on every spread, and let the text break around it. Long-form reading in a narrow measure, with the vertical always present at the edge of the eye.",
      "Photography is cropped to a consistent 2:3 so the issue reads as one body of work. Captions sit outside the image, in the gutter, in the smallest type in the book.",
      "The cover carries no image at all — just the wordmark, letter-spaced to the exact width of the trim, at the top of an otherwise empty page. It sold the issue on its own.",
    ],
    gallery: [
      { image: photo(photos.medina, 2000, 900), alt: "Wide view of a minaret against open sky", caption: "Cover sequence, full-bleed", ratio: "wide" },
      { image: photo(photos.medina, 1400, 1050), alt: "Detail of minaret geometry", caption: "Geometry detail", ratio: "standard" },
      { image: photo(photos.medina, 1100, 1500), alt: "Vertical study of a minaret shaft", caption: "Shaft study", ratio: "portrait" },
    ],
    credits: [
      { label: "Editor", value: "Al-Mizan Quarterly" },
      { label: "Printing", value: "Offset, uncoated, Jeddah" },
      { label: "Binding", value: "Section-sewn, exposed spine" },
    ],
  },
  {
    slug: "ink",
    title: "INK / حبر",
    titleEn: "INK",
    titleAr: "حبر",
    type: "Visual Language",
    year: "2024",
    client: "Internal — Three Sisters",
    role: "Visual Language",
    scope: "Lettering, ink tests, studio research",
    location: "Jeddah",
    image: photo(photos.ink, 1400),
    alt: "Close detail of Arabic lettering",
    standfirst:
      "Studio research into how far a single loaded brush can be pushed before the letter stops being a letter.",
    body: [
      "This is the research that everything else is built on. Twelve months of ink tests, photographed wet, tracking how a nib holds and releases under a changing angle of pressure.",
      "We logged each test as a specimen: load, angle, speed, and the resulting terminal. The archive now runs to over four hundred plates, and it is the first thing we check before drawing anything for a client.",
      "The outcome is not a typeface. It is a set of rules about where a thick terminal is allowed to end — which is, in practice, most of what our lettering does.",
    ],
    gallery: [
      { image: photo(photos.ink, 2000, 900), alt: "Wide view of a lettering study", caption: "Specimen plate — load 4", ratio: "wide" },
      { image: photo(photos.ink, 1400, 1050), alt: "Detail of a wet ink terminal", caption: "Terminal, wet", ratio: "standard" },
      { image: photo(photos.ink, 1100, 1500), alt: "Vertical study of a letter stroke", caption: "Stroke pressure test", ratio: "portrait" },
    ],
    credits: [
      { label: "Archive", value: "412 plates, 2023–24" },
      { label: "Ink", value: "Iron gall, walnut, sumac" },
      { label: "Paper", value: "Cold-pressed cotton rag" },
    ],
  },
  {
    slug: "the-salon",
    title: "THE SALON / المجلس",
    titleEn: "THE SALON",
    titleAr: "المجلس",
    type: "Hospitality Identity",
    year: "2023",
    client: "Dar Al-Salon",
    role: "Hospitality Identity",
    scope: "Identity, menus, signage, staff uniforms",
    location: "AlUla",
    image: photo(photos.room, 1800),
    alt: "Contemporary interior with Arabic art",
    standfirst:
      "An identity for a nine-room guesthouse that behaves like a majlis — a room you are invited into rather than a venue you book.",
    body: [
      "The majlis has one social rule: you enter from the side, never the front, and you are offered the seat nearest the door as a courtesy. The identity follows the same logic. Nothing faces the entrance directly.",
      "Every piece of collateral is a single sheet, folded once, with the room number on the reverse. Menus are letterpressed on the same stock as the guest cards so the whole place feels cut from one block.",
      "The palette is the corridor at dusk: lime-washed walls, a deep madder runner, and oil lamps. We kept it to three materials so the fabrication cost stayed inside what a nine-room house could sustain.",
    ],
    gallery: [
      { image: photo(photos.room, 2000, 900), alt: "Wide view of a guesthouse salon", caption: "Salon, west aspect", ratio: "wide" },
      { image: photo(photos.room, 1400, 1050), alt: "Detail of lime-washed interior", caption: "Lime-wash texture", ratio: "standard" },
      { image: photo(photos.room, 1100, 1500), alt: "Vertical study of a guest room", caption: "Guest room study", ratio: "portrait" },
    ],
    credits: [
      { label: "Letterpress", value: "Two-colour, cotton stock" },
      { label: "Furniture", value: "Local carpentry, AlUla" },
      { label: "Lighting", value: "Oil and brass" },
    ],
  },
  {
    slug: "night-house",
    title: "NIGHT HOUSE / دار",
    titleEn: "NIGHT HOUSE",
    titleAr: "دار",
    type: "Brand Experience",
    year: "2024",
    client: "Jeddah Biennial",
    role: "Brand Experience",
    scope: "Spatial identity, projection, printed matter",
    location: "Jeddah",
    image: photo(photos.night, 1800),
    alt: "People gathering outside a building at night",
    standfirst:
      "A brand experience for a biennial pavilion that only exists after dark — an identity made of light, shade, and one very long table.",
    body: [
      "The pavilion had no facade and no signage budget. It had a courtyard, a projector, and a generator. So the identity had to be something you walked into rather than something you read.",
      "We projected the wordmark onto the courtyard floor at ankle height, so it is legible from above and from a long table, and invisible to anyone standing at street level. The whole mark is one word in a wide grotesk, set long.",
      "Printed matter followed the same rule: everything is black, uncoated, and meant to be read by torchlight. We ran three print runs and none of them were in colour.",
    ],
    gallery: [
      { image: photo(photos.night, 2000, 900), alt: "Wide view of a gathering outside at night", caption: "Courtyard, 22:40", ratio: "wide" },
      { image: photo(photos.night, 1400, 1050), alt: "Detail of light and shade at night", caption: "Projected mark, ankle height", ratio: "standard" },
      { image: photo(photos.night, 1100, 1500), alt: "Vertical study of a lit facade at night", caption: "Facade study", ratio: "portrait" },
    ],
    credits: [
      { label: "Projection", value: "Short-throw, 3 units" },
      { label: "Print", value: "Black only, uncoated" },
      { label: "Power", value: "Diesel, silenced" },
    ],
  },
  {
    slug: "earth",
    title: "EARTH / أرض",
    titleEn: "EARTH",
    titleAr: "أرض",
    type: "Packaging System",
    year: "2025",
    client: "Rawdha Date Co.",
    role: "Packaging System",
    scope: "Structural design, material specification, artwork",
    location: "Al-Ahsa",
    image: photo(photos.hero, 1600),
    alt: "Sun-washed Saudi architecture",
    standfirst:
      "A packaging system for dates that refuses to be a box — built from moulded clay, designed to be kept after it is emptied.",
    body: [
      "Dates are sold in plastic trays that go straight in the bin. We designed a moulded clay vessel instead: heavier, breakable, and reusable enough that it becomes tableware. The commercial argument only works if the object is beautiful once empty.",
      "The structural problem was the stem. A clay vessel needs a rim stiff enough to stack four high in a date palm's worth of humidity. We solved it with a chamfered lip and a foot ring, both thrown rather than cut.",
      "Artwork is debossed, never printed. Nothing sits on the surface that could be scratched off, and every mark is legible in raking light, which is the only light the product is ever seen in.",
    ],
    gallery: [
      { image: photo(photos.hero, 2000, 900), alt: "Wide view of earthen architecture in sunlight", caption: "Material reference", ratio: "wide" },
      { image: photo(photos.hero, 1400, 1050), alt: "Detail of a clay surface", caption: "Deboss detail", ratio: "standard" },
      { image: photo(photos.hero, 1100, 1500), alt: "Vertical study of a moulded clay form", caption: "Vessel profile", ratio: "portrait" },
    ],
    credits: [
      { label: "Ceramicist", value: "Al-Ahsa, traditional kiln" },
      { label: "Structural", value: "In-house prototyping, 6 iterations" },
      { label: "Artwork", value: "Deboss, no print" },
    ],
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

function useDocumentTitle(title: string) {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);
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
      <div className="project-image image-reveal">
        <img src={project.image} alt={project.alt} loading={index > 1 ? "lazy" : "eager"} />
      </div>
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

  useDocumentTitle("Three Sisters — Creative Studio, Jeddah");
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
            <img src={photo(photos.hero, 1600)} alt="Sun-washed Saudi architecture" />
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

  useDocumentTitle("All Projects — Three Sisters");
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

function NotFoundPage() {
  useDocumentTitle("Not Found — Three Sisters");

  return (
    <div className="portfolio-page">
      <Header dark />
      <main>
        <section className="portfolio-intro">
          <p className="eyebrow">ERROR — 404</p>
          <div className="archive-line">
            <h1>NOT FOUND</h1>
          </div>
          <p className="portfolio-arabic" lang="ar" dir="rtl">غير موجود</p>
        </section>
      </main>
      <div className="portfolio-end">
        <a href="/portfolio">← ALL PROJECTS</a>
        <a href="/">← BACK TO HOME</a>
      </div>
    </div>
  );
}

function currentRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return { name: "landing" } as const;
  if (path === "/portfolio") return { name: "portfolio" } as const;
  return { name: "not-found" } as const;
}

export default function App() {
  const route = currentRoute();

  if (route.name === "portfolio") return <PortfolioPage />;
  if (route.name === "not-found") return <NotFoundPage />;
  return <LandingPage />;
}
