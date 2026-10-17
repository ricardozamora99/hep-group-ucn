"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./PublicationsCTA.module.css";
import Container from "@/components/layout/Container";

export default function PublicationsCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}><LocalizedText id="p_226366c3301a">Next Step</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_06137b3d9352">Explore the research</LocalizedText><span><LocalizedText id="p_0bd29ec575ad">behind the publications</LocalizedText></span>
          </h2>
          <p className={styles.text}><LocalizedText id="p_c39b713b0e8f">See how individual papers connect to the group’s broader questions and methods.</LocalizedText></p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/research`}><LocalizedText id="p_989d068de9a7">Explore Research</LocalizedText></Link>
            <Link className={styles.btnGhost} href={`/${locale}/people`}><LocalizedText id="p_72271dec619e">Meet the Team</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
