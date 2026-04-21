"use client";

import styles from "./News.module.css";
import Container from "@/components/layout/Container";

const news = [
  {
    title: "Highlight Title",
    text: "A major update from the group, such as a collaboration milestone, invited talk, workshop, or recent academic achievement.",
  },
  {
    title: "News Item 2",
    text: "Short description of a recent activity or announcement.",
  },
  {
    title: "News Item 3",
    text: "Short description of a recent activity or announcement.",
  },
];

export default function News() {
  return (
    <section id="news-preview" className={styles.section}>
      <Container>
        <div className={styles.top}>
          <span className={styles.kicker}>News</span>
          <h2 className={styles.title}>
            Highlights,
            <span>signals from the group’s present activity</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.mainCard}>
            <span className={styles.mainLabel}>Latest highlight</span>
            <h3>{news[0].title}</h3>
            <p>{news[0].text}</p>
          </article>

          <div className={styles.sideCol}>
            {news.slice(1).map((item) => (
              <article key={item.title} className={styles.sideCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}