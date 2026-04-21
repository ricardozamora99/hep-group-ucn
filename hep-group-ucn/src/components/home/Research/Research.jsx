"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./Research.module.css";
import Container from "@/components/layout/Container";

const areas = [
  {
    title: "Particle Physics",
    text: "Theoretical and phenomenological work on the fundamental structure of matter and interactions.",
    tag: "Matter & Interactions",
  },
  {
    title: "Cosmology",
    text: "Questions about the universe, its evolution, and the role of fundamental physics across cosmic history.",
    tag: "Universe & Evolution",
  },
  {
    title: "Computational Physics",
    text: "Numerical methods, data-driven tools, and reproducible workflows for modern theoretical research.",
    tag: "Methods & Computation",
  },
];

export default function Research() {
  const locale = useLocale();

  return (
    <section id="research-preview" className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Research</span>
            <h2 className={styles.title}>
              Research directions,
              <span>introduced as a preview</span>
            </h2>
          </div>

          <div className={styles.sideIntro}>
            <p>
              The Home page offers a concise look at the group’s scientific
              profile. The full research structure, themes, and future dedicated
              sections belong to the Research page.
            </p>
            <Link className={styles.inlineLink} href={`/${locale}/research`}>
              Explore the full research profile
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {areas.map((area, idx) => (
            <article
              key={area.title}
              className={`${styles.card} ${idx === 0 ? styles.cardFeatured : ""}`}
            >
              <span className={styles.tag}>{area.tag}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.band}>
          <span className={styles.bandLabel}>Research language</span>
          <strong>
            Theory · Phenomenology · Cosmology · Computation
          </strong>
        </div>
      </Container>
    </section>
  );
}