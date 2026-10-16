"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
          <span className={styles.kicker}><LocalizedText id="p_82b2eb07aaea">Publications</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_e0847e2ad54c">Recent output,</LocalizedText><span><LocalizedText id="p_e6319c97449d">selected as a reading point</LocalizedText></span>
          </h2>
        </div>

        <div className={styles.layout}>
          <article className={styles.featuredCard}>
            <span className={styles.featuredTag}><LocalizedText id="p_9c1f9d4e89e5">Featured publication</LocalizedText></span>
            <h3><LocalizedText text={items[0].title} /></h3>
            <div className={styles.meta}>{items[0].meta}</div>
            <p><LocalizedText text={items[0].text} /></p>
          </article>

          <div className={styles.sideList}>
            {items.slice(1).map((item) => (
              <article key={item.title} className={styles.sideCard}>
                <h3><LocalizedText text={item.title} /></h3>
                <div className={styles.meta}>{item.meta}</div>
                <p><LocalizedText text={item.text} /></p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <Link className={styles.btnGhost} href={`/${locale}/publications`}><LocalizedText id="p_82b0e24397cf">View All Publications</LocalizedText></Link>
        </div>
      </Container>
    </section>
  );
}
