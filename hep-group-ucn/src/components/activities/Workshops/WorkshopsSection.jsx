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
            <h2 className={styles.title}><LocalizedText id="p_activities_record">A record of workshops</LocalizedText><span><LocalizedText id="p_activities_exchange">and scientific exchange</LocalizedText></span>
            </h2>
          </div>

          <p className={styles.intro}><LocalizedText id="p_activities_archive_intro">Each entry documents a concrete event, its speakers, subject, and place in the group’s academic trajectory.</LocalizedText></p>
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
