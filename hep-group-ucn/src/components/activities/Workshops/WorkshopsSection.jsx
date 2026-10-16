"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./WorkshopsSection.module.css";
import Container from "@/components/layout/Container";
import WorkshopBlock from "./WorkshopBlock";
import { workshops } from "./workshopsData";

export default function WorkshopsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}><LocalizedText id="p_fe6f4386e285">Academic Activities</LocalizedText></span>
            <h2 className={styles.title}><LocalizedText id="p_5b152f0e6f86">Workshops, outreach,</LocalizedText><span><LocalizedText id="p_cb2668b279b8">and academic exchange</LocalizedText></span>
            </h2>
          </div>

          <p className={styles.intro}><LocalizedText id="p_68cd1de2a56d">A selection of workshops and related academic activities that reflect the group’s broader educational and scientific engagement.</LocalizedText></p>
        </div>

        <div className={styles.list}>
          {workshops.map((workshop, index) => (
            <WorkshopBlock
              key={workshop.id}
              workshop={workshop}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
