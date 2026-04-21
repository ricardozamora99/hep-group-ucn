"use client";

import Container from "@/components/layout/Container";
import styles from "./ContactIntro.module.css";

export default function ContactIntro() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.top}>
            <div className={styles.heading}>
              <span className={styles.kicker}>Contact</span>
              <h1 className={styles.title}>
                Get in <span>Touch</span>
              </h1>
            </div>

            <p className={styles.intro}>
              For academic inquiries, research collaboration, or student
              contact, please use the information below.
            </p>
          </div>

          <article className={styles.mainCard}>
            <div className={styles.mainLeft}>
              <span className={styles.mainLabel}>Main Contact Information</span>
              <h2 className={styles.mainTitle}>Group Contact Details</h2>
              <p className={styles.mainText}>
                For general academic inquiries and collaboration requests,
                please contact the group head.
              </p>
            </div>

            <div className={styles.mainRight}>
              <div className={styles.infoItem}>
                <span className={styles.infoKey}>Office</span>
                <p className={styles.infoValue}>Oficina 507</p>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoKey}>Phone</span>
                <p className={styles.infoValue}>+56-55-235-5519</p>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoKey}>Head</span>
                <p className={styles.infoValue}>César Bonilla</p>
                <a
                  href="mailto:cesar.bonilla@ucn.cl"
                  className={styles.email}
                >
                  cesar.bonilla@ucn.cl
                </a>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}