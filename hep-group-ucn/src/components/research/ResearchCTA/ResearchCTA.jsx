"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./ResearchCTA.module.css";
import Container from "@/components/layout/Container";

export default function ResearchCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}><LocalizedText id="p_226366c3301a">Next Step</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_7cf1d7a8a200">Explore the people and outputs</LocalizedText><span><LocalizedText id="p_94fe7908295e">behind the research program</LocalizedText></span>
          </h2>
          <p className={styles.text}><LocalizedText id="p_22ae60a7077d">Discover the researchers, publications, and academic activity that give shape to the group’s scientific work.</LocalizedText></p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/people`}><LocalizedText id="p_72271dec619e">Meet the Team</LocalizedText></Link>
            <Link className={styles.btnGhost} href={`/${locale}/publications`}><LocalizedText id="p_a1a15db047d7">View Publications</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
