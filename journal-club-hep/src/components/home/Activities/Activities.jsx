"use client";
import Link from "next/link";
import styles from "./Activities.module.css";
import Container from "@/components/layout/Container";

const activities = [
  {
    title: "Journal Club",
    text: "Weekly discussions on current topics in high energy physics.",
    href: "/journal-club",
    image: "/home/activities/logoucn.png",
    featured: true,
  },
  {
    title: "Workshops",
    text: "Specialized events focused on current research problems and methods.",
    href: "/activities",
    image: "/home/activities/logoucn.png",
    featured: false,
  },
  {
    title: "Seminars",
    text: "Talks by researchers and collaborators from different institutions.",
    href: "/activities",
    image: "/home/activities/logoucn.png",
    featured: false,
  },
];

export default function Activities() {
  return (
    <section id="activities-preview" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>Activities</div>
          <h2 className={styles.title}>Academic Life & Events</h2>
          <div className={styles.underline} />
          <p className={styles.lead}>
            Beyond research, the group maintains an active academic environment
            through discussion spaces, specialized workshops, and invited talks.
          </p>
        </header>

        <div className={styles.grid}>
          {activities.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`${styles.card} ${
                item.featured ? styles.featured : ""
              }`}
            >
              <div
                className={styles.bg}
                style={{ backgroundImage: `url(${item.image})` }}
                aria-hidden="true"
              />
              <div className={styles.overlay} aria-hidden="true" />

              <div className={styles.content}>
                <div className={styles.cardTop}>
                  <span className={styles.badge}>
                    {item.featured ? "Featured" : "Activity"}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.cardLink}>Learn More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Includes</span>
            <span className={styles.metaValue}>
              Journal Club · Workshops · Seminars
            </span>
          </div>

          <div className={styles.actions}>
            <Link className={styles.btnGhost} href="/activities">
              View Activities
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}