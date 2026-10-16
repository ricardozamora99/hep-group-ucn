"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
          <span className={styles.kicker}><LocalizedText id="p_69752f2313b2">News</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_0ced615d83a6">Highlights,</LocalizedText><span><LocalizedText id="p_c52f8746e95e">signals from the group’s present activity</LocalizedText></span>
          </h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.mainCard}>
            <span className={styles.mainLabel}><LocalizedText id="p_a46c5669cab1">Latest highlight</LocalizedText></span>
            <h3><LocalizedText text={news[0].title} /></h3>
            <p><LocalizedText text={news[0].text} /></p>
          </article>

          <div className={styles.sideCol}>
            {news.slice(1).map((item) => (
              <article key={item.title} className={styles.sideCard}>
                <h3><LocalizedText text={item.title} /></h3>
                <p><LocalizedText text={item.text} /></p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
