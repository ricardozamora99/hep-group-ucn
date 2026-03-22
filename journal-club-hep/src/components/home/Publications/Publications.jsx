"use client";

import Link from "next/link";
import styles from "./Publications.module.css";
import Container from "@/components/layout/Container";

const items = [
  {
    title: "Featured Publication Title",
    meta: "Journal / arXiv — 2026",
    text: "A highlighted recent contribution from the group, presenting current directions in particle physics, cosmology, or related phenomenology.",
    featured: true,
  },
  {
    title: "Publication Title 2",
    meta: "Journal / arXiv — 2025",
    text: "Short description or one-line highlight of the result and its context.",
    featured: false,
  },
  {
    title: "Publication Title 3",
    meta: "Journal / arXiv — 2025",
    text: "Short description or one-line highlight of the result and its context.",
    featured: false,
  },
];

export default function Publications() {
  return (
    <section id="publications-preview" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>Publications</div>
          <h2 className={styles.title}>Recent Scientific Output</h2>
          <div className={styles.underline} />
          <p className={styles.lead}>
            Selected publications reflecting current research activity in the group.
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.featuredCard}>
            <div className={styles.featuredTag}>Featured</div>
            <h3 className={styles.featuredTitle}>{items[0].title}</h3>
            <div className={styles.featuredMeta}>{items[0].meta}</div>
            <p className={styles.featuredText}>{items[0].text}</p>
          </article>

          <div className={styles.sideList}>
            {items.slice(1).map((item) => (
              <article key={item.title} className={styles.sideCard}>
                <h3 className={styles.sideTitle}>{item.title}</h3>
                <div className={styles.sideMeta}>{item.meta}</div>
                <p className={styles.sideText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <Link className={styles.btnGhost} href="/publications">
            View All Publications
          </Link>
        </div>
      </Container>
    </section>
  );
}