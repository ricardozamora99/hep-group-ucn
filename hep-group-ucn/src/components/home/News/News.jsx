import Link from "next/link";
import styles from "./News.module.css";
import Container from "@/components/layout/Container";

function dateLabel(date, locale) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-CL" : "en-US", {
    month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function News({ items = [], locale = "en" }) {
  if (items.length === 0) return null;
  const es = locale === "es";
  const [main, ...secondary] = items;

  return (
    <section id="news-preview" className={styles.section}>
      <Container>
        <div className={styles.top}>
          <span className={styles.kicker}>{es ? "Noticias" : "News"}</span>
          <h2 className={styles.title}>{es ? "El grupo," : "The group,"}<span>{es ? "más allá de su producción científica" : "beyond its scientific output"}</span>
          </h2>
        </div>

        <div className={`${styles.grid} ${secondary.length === 0 ? styles.single : ""}`}>
          <Link href={`/${locale}/activities?activity=${encodeURIComponent(main._id)}#academic-participation`} className={styles.mainCard}>
            <span className={styles.mainLabel}>{es ? "Última actividad" : "Latest activity"}</span>
            <time>{dateLabel(main.startDate, locale)}</time>
            <h3>{main.title}</h3>
            <p>{main.summary}</p>
            <strong>{es ? "Conocer la experiencia →" : "Explore the experience →"}</strong>
          </Link>

          {secondary.length > 0 && (
            <div className={styles.sideCol}>
              {secondary.map((item) => (
                <Link key={item._id} href={`/${locale}/activities?activity=${encodeURIComponent(item._id)}#academic-participation`} className={styles.sideCard}>
                  <time>{dateLabel(item.startDate, locale)}</time>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
