"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Image from "next/image";
import { useLocale } from "next-intl";
import styles from "./CollaborationsOverview.module.css";
import Container from "@/components/layout/Container";

const kindLabels = {
  en: { experiment: "Scientific experiment", university: "University", researchCenter: "Research center", network: "Scientific network", other: "Institutional collaboration" },
  es: { experiment: "Experimento científico", university: "Universidad", researchCenter: "Centro de investigación", network: "Red científica", other: "Colaboración institucional" },
};

function periodLabel(item, locale) {
  const es = locale === "es";
  if (item.relationshipStatus === "prospective") return es ? "Vínculo en desarrollo" : "Developing link";
  if (item.relationshipStatus === "past") {
    return [item.startYear, item.endYear].filter(Boolean).join("–") || (es ? "Colaboración anterior" : "Past collaboration");
  }
  if (item.startYear) return `${item.startYear}–${es ? "presente" : "present"}`;
  return es ? "Colaboración activa" : "Active collaboration";
}

function CollaborationCard({ item, reverse = false }) {
  const locale = useLocale();

  return (
    <article
      className={`${styles.card} ${reverse ? styles.cardReverse : ""}`}
    >
      <div className={styles.imageWrap}>
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.image?.alt || item.name}
            fill
            className={styles.image}
            sizes="(max-width: 980px) 100vw, 42vw"
          />
        ) : <div className={styles.imageFallback}>{item.name}</div>}
      </div>

      <div className={styles.content}>
        <span className={styles.kicker}>{kindLabels[locale]?.[item.kind] || kindLabels.en.other}</span>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.subtitle}>{item.fullName}</p>
        <p className={styles.description}>{item.description}</p>

        <div className={styles.meta}>
          <span className={styles.metaLabel}><LocalizedText id="p_58acc5109e03">Time range</LocalizedText></span>
          <p className={styles.metaText}>{periodLabel(item, locale)}</p>
        </div>

        {item.activeMembers?.length > 0 && (
          <div className={styles.members}>
            <span className={styles.metaLabel}>{locale === "es" ? "Miembros participantes" : "Participating members"}</span>
            <div className={styles.memberList}>
              {item.activeMembers.map((member) => (
                <div key={member._id} className={styles.member}>
                  {member.imageUrl && <Image src={member.imageUrl} alt={member.name} width={38} height={38} />}
                  <span>{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.website && (
          <a className={styles.website} href={item.website} target="_blank" rel="noreferrer">
            {locale === "es" ? "Sitio oficial ↗" : "Official website ↗"}
          </a>
        )}
      </div>
    </article>
  );
}

export default function CollaborationsOverview({ items = [] }) {
  const locale = useLocale();
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div>
            <span className={styles.topKicker}><LocalizedText id="p_5e5cca7079ff">Institutional & Experimental Links</LocalizedText></span>
            <h2 className={styles.topTitle}><LocalizedText id="p_fdcc35b5b1a8">Collaborations that extend</LocalizedText><span><LocalizedText id="p_37eb41883bde">the group’s scientific reach</LocalizedText></span>
            </h2>
          </div>

          <p className={styles.topIntro}><LocalizedText id="p_473aa04b650e">These links connect the group with broader experimental and academic environments, strengthening research exchange, visibility, and future opportunities for participation and training.</LocalizedText></p>
        </div>

        <div className={styles.stack}>
          {items.map((item, index) => (
            <CollaborationCard
              key={item.name}
              item={item}
              reverse={index % 2 !== 0}
            />
          ))}
          {items.length === 0 && (
            <div className={styles.empty}>
              <p>{locale === "es" ? "Las colaboraciones institucionales aparecerán aquí a medida que se agreguen al archivo del grupo." : "Institutional collaborations will appear here as they are added to the group archive."}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
