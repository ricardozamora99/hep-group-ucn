"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./Activities.module.css";
import Container from "@/components/layout/Container";

const activities = [
  {
    title: "Journal Club",
    text: "A regular space for discussing current problems and ideas in high energy physics.",
    href: "/journal-club",
    type: "Core activity",
  },
  {
    title: "Seminars",
    text: "Invited talks and exchanges with collaborators and researchers from other institutions.",
    href: "/activities",
    type: "Academic life",
  },
  {
    title: "Workshops",
    text: "Focused events around methods, themes, and current research directions.",
    href: "/activities",
    type: "Special format",
  },
];

export default function Activities() {
  const locale = useLocale();

  return (
    <section id="activities-preview" className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.left}>
            <span className={styles.kicker}>Academic Life</span>
            <h2 className={styles.title}>
              The group is not only research,
              <span>it is also an academic environment</span>
            </h2>
          </div>

          <div className={styles.right}>
            <p>
              Discussion spaces, seminars, workshops, and collective academic
              activity are part of how the group thinks, grows, and stays alive.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {activities.map((item, idx) => (
            <Link
              key={item.title}
              href={`/${locale}${item.href}`}
              className={`${styles.card} ${idx === 0 ? styles.featured : ""}`}
            >
              <span className={styles.type}>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className={styles.foot}>Learn more</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}