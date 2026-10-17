"use client";
import LocalizedText from "@/components/i18n/LocalizedText";
import { useLocale } from "next-intl";

import Image from "next/image";
import styles from "./FeaturedPublication.module.css";
import Container from "@/components/layout/Container";
import LatexText from "@/components/math/LatexText";

export default function FeaturedPublication({ paper }) {
  const locale = useLocale();
  if (!paper) return null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.badge}><LocalizedText id="p_2adbf615cd4b">Featured Publication</LocalizedText></span>
            <h2 className={styles.title}><LatexText>{paper.title}</LatexText></h2>
            <p className={styles.authors}>{paper.authors}</p>
            {paper.info && <p className={styles.info}><LatexText>{paper.info}</LatexText></p>}

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
                alt="arXiv logo"
                width={92}
                height={92}
                className={styles.logo}
              />
            </div>
            <div className={styles.journal}>{paper.source}</div>
            {paper.journal && (
              <div className={styles.journalDetails}>
                <strong>{locale === "es" ? "Revista:" : "Journal:"}</strong>{" "}
                {paper.journal}
              </div>
            )}
            <div className={styles.year}>{paper.year}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
