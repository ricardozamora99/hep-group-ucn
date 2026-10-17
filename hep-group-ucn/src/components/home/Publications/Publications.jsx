"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./Publications.module.css";
import Container from "@/components/layout/Container";
import LatexText from "@/components/math/LatexText";

function publicationMeta(paper) {
  return [paper.journal || paper.source, paper.year].filter(Boolean).join(" — ");
}

export default function Publications({ papers }) {
  const locale = useLocale();
  const [featured, ...secondary] = papers;

  if (!featured) return null;

  return (
    <section id="publications-preview" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.kicker}><LocalizedText id="p_82b2eb07aaea">Publications</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_e0847e2ad54c">Recent output,</LocalizedText><span><LocalizedText id="p_e6319c97449d">selected as a reading point</LocalizedText></span>
          </h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.featuredColumn}>
            <article className={styles.featuredCard}>
              <span className={styles.featuredTag}><LocalizedText id="p_9c1f9d4e89e5">Featured publication</LocalizedText></span>
              <h3>
                <a href={featured.url} target="_blank" rel="noreferrer">
                  <LatexText>{featured.title}</LatexText>
                </a>
              </h3>
              <div className={styles.meta}>{publicationMeta(featured)}</div>
              {featured.info && <p><LatexText>{featured.info}</LatexText></p>}
            </article>

            <div className={styles.actions}>
              <Link className={styles.btnGhost} href={`/${locale}/publications`}><LocalizedText id="p_82b0e24397cf">View All Publications</LocalizedText></Link>
            </div>
          </div>

          <div className={styles.sideList}>
            {secondary.map((paper) => (
              <article key={paper.id} className={styles.sideCard}>
                <h3>
                  <a href={paper.url} target="_blank" rel="noreferrer">
                    <LatexText>{paper.title}</LatexText>
                  </a>
                </h3>
                <div className={styles.meta}>{publicationMeta(paper)}</div>
                {paper.info && <p><LatexText>{paper.info}</LatexText></p>}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
