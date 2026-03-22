"use client";

import styles from "./News.module.css";
import Container from "@/components/layout/Container";

const news = [
  {
    title: "Highlight Title",
    text: "A major update from the group, such as a talk, collaboration milestone, workshop, or recent achievement.",
    large: true,
  },
  {
    title: "News Item 2",
    text: "Short description of a recent activity or announcement.",
    large: false,
  },
  {
    title: "News Item 3",
    text: "Short description of a recent activity or announcement.",
    large: false,
  },
];

export default function News() {
  return (
    <section id="news-preview" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>News</div>
          <h2 className={styles.title}>Highlights & Updates</h2>
          <div className={styles.underline} />
        </header>

        <div className={styles.grid}>
          <article className={styles.mainCard}>
            <div className={styles.mainLabel}>Latest Highlight</div>
            <h3 className={styles.mainTitle}>{news[0].title}</h3>
            <p className={styles.mainText}>{news[0].text}</p>
          </article>

          <div className={styles.sideCol}>
            {news.slice(1).map((item) => (
              <article key={item.title} className={styles.sideCard}>
                <h3 className={styles.sideTitle}>{item.title}</h3>
                <p className={styles.sideText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}