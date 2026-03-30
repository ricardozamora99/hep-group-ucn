"use client";

import Image from "next/image";
import styles from "./CollaborationsOverview.module.css";
import Container from "@/components/layout/Container";
import { collaborations } from "./collaborationsData";

function CollaborationCard({ item, reverse = false }) {
  return (
    <article
      className={`${styles.card} ${reverse ? styles.cardReverse : ""}`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={styles.image}
          sizes="(max-width: 980px) 100vw, 42vw"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.kicker}>Collaboration</span>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.subtitle}>{item.subtitle}</p>
        <p className={styles.description}>{item.description}</p>

        <div className={styles.meta}>
          <span className={styles.metaLabel}>Time range</span>
          <p className={styles.metaText}>{item.period}</p>
        </div>
      </div>
    </article>
  );
}

export default function CollaborationsOverview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div>
            <span className={styles.topKicker}>Institutional & Experimental Links</span>
            <h2 className={styles.topTitle}>
              Collaborations that extend
              <span>the group’s scientific reach</span>
            </h2>
          </div>

          <p className={styles.topIntro}>
            These links connect the group with broader experimental and academic
            environments, strengthening research exchange, visibility, and
            future opportunities for participation and training.
          </p>
        </div>

        <div className={styles.stack}>
          {collaborations.map((item, index) => (
            <CollaborationCard
              key={item.name}
              item={item}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}