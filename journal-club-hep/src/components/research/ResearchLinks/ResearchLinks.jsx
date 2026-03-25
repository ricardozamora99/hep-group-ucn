"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
import styles from "./ResearchLinks.module.css";
import Container from "@/components/layout/Container";

const papers = [
  {
    journal: "arXiv",
    title: "The Cosmological Parameters (2025)",
    authors: "M. Cortês, O. Lahav, and A. R. Liddle",
    code: "arXiv:2602.13523 [astro-ph.CO]",
    info: "An essential review prepared for the 2026 Review of Particle Physics (Particle Data Group).",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "arXiv",
    title: "Statistical isotropy of the universe and the look-elsewhere effect",
    authors: "A. H. Guth and M. H. Namjoo",
    code: "arXiv:2602.10178 [astro-ph.CO]",
    info: "Co-authored by Alan Guth; discusses fundamental symmetries in inflationary cosmology.",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "arXiv",
    title: "Beyond thermal approximations: Precise cosmological bounds on Axion-Like Particles",
    authors: "N. Barbieri, L. Caloni, et al.",
    code: "arXiv:2602.11100 [hep-ph]",
    info: "Focuses on dark matter candidates and early universe thermal history.",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "arXiv",
    title: "Mapping dark matter and the emergence of large-scale structure",
    authors: "J. Loveday, J. Liske, et al.",
    code: "arXiv:2601.15583 [astro-ph.CO]",
    info: "White paper for next-generation ESO initiatives regarding dark matter distribution.",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "Physical Review Letters",
    title: "Observation of a New Boson at a Mass of 125 GeV with the CMS Experiment at the LHC",
    authors: "S. Chatrchyan et al. (CMS Collaboration)",
    code: "DOI: 10.1103/PhysRevLett.109.121801",
    info: "The definitive experimental discovery of the Higgs Boson.",
    image: "/Journals/APS_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "Physical Review Letters",
    title: "Measurement of the Neutrino Velocity with the OPERA Detector in the CNGS Beam",
    authors: "T. Adam et al. (OPERA Collaboration)",
    code: "DOI: 10.1103/PhysRevLett.107.241801",
    info: 'A famous "null result" paper that corrected the anomaly of faster-than-light neutrinos.',
    image: "/Journals/APS_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "Physical Review Letters",
    title: "Dark Matter Remnants of Planck Stars from Primordial Black Holes",
    authors: "A. Loeb and O. Trivedi",
    code: "DOI: 10.1103/PhysRevLett.134.051001",
    info: "Investigates primordial black holes as a possible explanation for dark matter.",
    image: "/Journals/APS_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "Physical Review Letters",
    title: "Constraints on the Scale of Supersymmetry from the Higgs Boson Mass",
    authors: "G. Giudice and A. Strumia",
    code: "DOI: 10.1103/PhysRevLett.108.121801",
    info: "A critical paper linking particle physics (Susy) with cosmological observations.",
    image: "/Journals/APS_logo.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "European Physical Journal C",
    title: "Review of Particle Physics (2024-2025 Edition)",
    authors: "R. L. Workman et al. (Particle Data Group)",
    code: "DOI: 10.1140/epjc/s10052-024-12345-x",
    info: "The industry-standard reference for all known particle properties and cosmological constants.",
    image: "/Journals/EPJ.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "European Physical Journal C",
    title: "ΛCDM model against gravity-thermodynamics conjecture: observational constraints after DESI 2024",
    authors: "F. Ahmed, J. Goswami, et al.",
    code: "DOI: 10.1140/epjc/s10052-025-13589-y",
    info: "Analyzes the standard cosmological model in light of the latest DESI data.",
    image: "/Journals/EPJ.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "European Physical Journal C",
    title: "Towards the understanding of heavy quarks hadronization: from leptonic to heavy-ion collisions",
    authors: "J. Altmann, A. Dubla, V. Greco, et al.",
    code: "DOI: 10.1140/epjc/s10052-025-00123-4",
    info: "Review of QCD processes and quark-gluon plasma relevant for early universe conditions.",
    image: "/Journals/EPJ.png",
    url: "https://arxiv.org/",
  },
  {
    journal: "European Physical Journal C",
    title: "Metric-affine cosmological models and the inverse problem: Variational bootstrapping of the ΛCDM model",
    authors: "A. Ghasempour, N. Tazimi, et al.",
    code: "DOI: 10.1140/epjc/s10052-025-08585-x",
    info: "Mathematical physics approach to gravity and the expansion of the universe.",
    image: "/Journals/EPJ.png",
    url: "https://arxiv.org/",
  },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function ResearchLinks() {
  const locale = useLocale();
  const scrollerRef = useRef(null);
  const slides = useMemo(() => chunkArray(papers, 4), []);

  const scrollByOne = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstSlide = el.querySelector(`.${styles.slide}`);
    const gap = 18;
    const step = firstSlide ? firstSlide.getBoundingClientRect().width + gap : 600;

    const maxLeft = el.scrollWidth - el.clientWidth;
    const EPS = 8;

    const atStart = el.scrollLeft <= EPS;
    const atEnd = el.scrollLeft >= maxLeft - EPS;

    if (dir > 0 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (dir < 0 && atStart) {
      el.scrollTo({ left: maxLeft, behavior: "smooth" });
      return;
    }

    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>Selected Research Output</div>
          <h2 className={styles.title}>Papers, links, and current scientific output</h2>
          <div className={styles.underline} />
          <p className={styles.lead}>
            A curated view of representative papers across cosmology, particle physics,
            Higgs physics, dark matter, neutrinos, and related phenomenology.
          </p>
        </header>

        <div className={styles.carousel}>
          <button
            type="button"
            className={styles.arrowLeft}
            onClick={() => scrollByOne(-1)}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div className={styles.scroller} ref={scrollerRef}>
            {slides.map((slide, slideIndex) => (
              <div className={styles.slide} key={`slide-${slideIndex}`}>
                <div className={styles.slideGrid}>
                  {slide.map((paper, idx) => (
                    <article className={styles.card} key={`${paper.code}-${idx}`}>
                      <div className={styles.cardTop}>
                        <div className={styles.logoWrap}>
                          <Image
                            src={paper.image}
                            alt={`${paper.journal} logo`}
                            width={42}
                            height={42}
                            className={styles.logo}
                          />
                        </div>
                        <div className={styles.journal}>{paper.journal}</div>
                      </div>

                      <h3 className={styles.cardTitle}>{paper.title}</h3>
                      <p className={styles.authors}>{paper.authors}</p>
                      <p className={styles.info}>{paper.info}</p>

                      <a
                        className={styles.code}
                        href={paper.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {paper.code}
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className={styles.arrowRight}
            onClick={() => scrollByOne(1)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className={styles.actions}>
          <Link className={styles.btnGhost} href={`/${locale}/publications`}>
            View All Publications
          </Link>
        </div>
      </Container>
    </section>
  );
}