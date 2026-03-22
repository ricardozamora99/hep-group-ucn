"use client";

import Link from "next/link";
import styles from "./Research.module.css";
import Container from "@/components/layout/Container";

const areas = [
  {
    title: "Particle Physics",
    text: "Unveiling the fundamental structure of matter and interactions through theoretical models and phenomenological studies.",
    tag: "Matter & Interactions",
    featured: true,
  },
  {
    title: "Cosmology",
    text: "Studying the origin, evolution, and large-scale structure of the universe, with emphasis on fundamental physics connections.",
    tag: "Universe & Evolution",
    featured: false,
  },
  {
    title: "Astroparticle Physics",
    text: "Connecting particle physics with astrophysical observations to explore the universe across multiple scales and messengers.",
    tag: "Particles & Cosmos",
    featured: false,
  },
];

export default function Research() {
  return (
    <section id="research-preview" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>Research</div>
          <h2 className={styles.title}>Research Areas</h2>
          <div className={styles.underline} />
          <p className={styles.lead}>
            Our work spans key areas of high energy physics and cosmology,
            combining theoretical insight, phenomenology, and computational methods.
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.featuredCard}>
            <div className={styles.featuredTop}>
              <span className={styles.tag}>{areas[0].tag}</span>
            </div>

            <div className={styles.featuredBody}>
              <h3 className={styles.featuredTitle}>{areas[0].title}</h3>
              <p className={styles.featuredText}>{areas[0].text}</p>
            </div>

            <div className={styles.featuredFoot}>
              <span className={styles.footNote}>Core theoretical direction</span>
            </div>
          </article>

          <div className={styles.sideColumn}>
            {areas.slice(1).map((area) => (
              <article key={area.title} className={styles.sideCard}>
                <div className={styles.sideTop}>
                  <span className={styles.tag}>{area.tag}</span>
                </div>

                <h3 className={styles.sideTitle}>{area.title}</h3>
                <p className={styles.sideText}>{area.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Related Content</span>
            <span className={styles.metaValue}>
              Projects · Thesis · Publications
            </span>
          </div>

          <div className={styles.actions}>
            <Link className={styles.btnGhost} href="/research">
              Explore Research
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}