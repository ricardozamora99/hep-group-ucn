"use client";

import Image from "next/image";
import styles from "./FeaturedPublication.module.css";
import Container from "@/components/layout/Container";

export default function FeaturedPublication({ paper }) {
  if (!paper) return null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.badge}>Featured Publication</span>
            <h2 className={styles.title}>{paper.title}</h2>
            <p className={styles.authors}>{paper.authors}</p>
            <p className={styles.info}>{paper.info}</p>

            <div className={styles.meta}>
              <span className={styles.topic}>{paper.topic}</span>
              <a
                className={styles.link}
                href={paper.url}
                target="_blank"
                rel="noreferrer"
              >
                {paper.code}
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.logoWrap}>
              <Image
                src={paper.image}
                alt={`${paper.journal} logo`}
                width={92}
                height={92}
                className={styles.logo}
              />
            </div>
            <div className={styles.journal}>{paper.journal}</div>
            <div className={styles.year}>{paper.year}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}