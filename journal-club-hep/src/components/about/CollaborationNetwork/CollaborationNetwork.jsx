"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./CollaborationNetwork.module.css";
import Container from "@/components/layout/Container";

export default function CollaborationNetwork() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <div className={styles.left}>
            <span className={styles.kicker}>Collaborations</span>
            <h2 className={styles.title}>
              Institutional and experimental links
            </h2>
            <p className={styles.text}>
              The group’s collaborations with universities, research networks,
              and large experiments are presented in more detail on the
              dedicated Collaborations page.
            </p>
          </div>

          <div className={styles.right}>
            <Link href={`/${locale}/collaborations`} className={styles.btnGhost}>
              Visit Collaborations
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}