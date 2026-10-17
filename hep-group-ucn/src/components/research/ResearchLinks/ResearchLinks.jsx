"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
import styles from "./ResearchLinks.module.css";
import Container from "@/components/layout/Container";
import LatexText from "@/components/math/LatexText";

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function ResearchLinks({ papers }) {
  const locale = useLocale();
  const scrollerRef = useRef(null);
  const slides = useMemo(() => chunkArray(papers, 4), [papers]);

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
          <div className={styles.kicker}><LocalizedText id="p_eefafad84921">Selected Research Output</LocalizedText></div>
          <h2 className={styles.title}><LocalizedText id="p_fca2181336b8">Papers, links, and current scientific output</LocalizedText></h2>
          <div className={styles.underline} />
          <p className={styles.lead}><LocalizedText id="p_cbe0c1329ec7">A curated view of representative papers across cosmology, particle physics, Higgs physics, dark matter, neutrinos, and related phenomenology.</LocalizedText></p>
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
                        <div className={styles.journal}>{paper.source}</div>
                      </div>

                      {paper.journal && (
                        <p className={styles.publicationJournal}>
                          <strong>{locale === "es" ? "Revista:" : "Journal:"}</strong>{" "}
                          {paper.journal}
                        </p>
                      )}
                      <h3 className={styles.cardTitle}><LatexText>{paper.title}</LatexText></h3>
                      <p className={styles.authors}>{paper.authors}</p>
                      {paper.info && <p className={styles.info}><LatexText>{paper.info}</LatexText></p>}

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
          <Link className={styles.btnGhost} href={`/${locale}/publications`}><LocalizedText id="p_82b0e24397cf">View All Publications</LocalizedText></Link>
        </div>
      </Container>
    </section>
  );
}
