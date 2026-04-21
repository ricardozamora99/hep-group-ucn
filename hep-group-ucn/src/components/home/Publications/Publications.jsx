"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./Publications.module.css";
import Container from "@/components/layout/Container";

const items = [
  {
    title: "Featured Publication Title",
    meta: "Journal / arXiv — 2026",
    text: "A highlighted recent contribution from the group, representing an active research direction and a visible scientific result.",
  },
  {
    title: "Publication Title 2",
    meta: "Journal / arXiv — 2025",
    text: "Short contextual summary of the result and its relevance.",
  },
  {
    title: "Publication Title 3",
    meta: "Journal / arXiv — 2025",
    text: "Short contextual summary of the result and its relevance.",
  },
];

export default function Publications() {
  const locale = useLocale();

  return (
    <section id="publications-preview" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.kicker}>Publications</span>
          <h2 className={styles.title}>
            Recent output,
            <span>selected as a reading point</span>
          </h2>
        </div>

        <div className={styles.layout}>
          <article className={styles.featuredCard}>
            <span className={styles.featuredTag}>Featured publication</span>
            <h3>{items[0].title}</h3>
            <div className={styles.meta}>{items[0].meta}</div>
            <p>{items[0].text}</p>
          </article>

          <div className={styles.sideList}>
            {items.slice(1).map((item) => (
              <article key={item.title} className={styles.sideCard}>
                <h3>{item.title}</h3>
                <div className={styles.meta}>{item.meta}</div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
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