import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { urlFor } from "@/sanity/lib/image";
import styles from "./AcademicParticipation.module.css";

const typeLabels = {
  en: {
    workshop: "Workshop",
    conference: "Conference",
    school: "School",
    academicVisit: "Academic visit",
    researchStay: "Research stay",
    externalTalk: "Talk or seminar",
    outreach: "Outreach",
    other: "Academic activity",
  },
  es: {
    workshop: "Taller",
    conference: "Congreso",
    school: "Escuela",
    academicVisit: "Visita académica",
    researchStay: "Estancia de investigación",
    externalTalk: "Charla o seminario",
    outreach: "Divulgación",
    other: "Actividad académica",
  },
};

function formatDate(startDate, endDate, locale) {
  const language = locale === "es" ? "es-CL" : "en-US";
  const format = new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const start = format.format(new Date(`${startDate}T00:00:00Z`));
  if (!endDate || endDate === startDate) return start;
  return `${start} — ${format.format(new Date(`${endDate}T00:00:00Z`))}`;
}

export default function AcademicParticipation({ items, total, page, totalPages, locale }) {
  const es = locale === "es";

  return (
    <section id="academic-participation" className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div>
            <span className={styles.kicker}>{es ? "Participación académica" : "Academic participation"}</span>
            <h2 className={styles.title}>
              {es ? "El grupo en movimiento" : "The group in motion"}
              <span>{es ? "más allá de UCN" : "beyond UCN"}</span>
            </h2>
          </div>
          <p className={styles.intro}>
            {es
              ? "Escuelas, congresos, visitas y encuentros donde nuestros integrantes amplían su formación y construyen nuevas redes científicas."
              : "Schools, conferences, visits, and gatherings where our members broaden their training and build new scientific connections."}
          </p>
        </div>

        {items.length > 0 ? (
          <>
            <div className={styles.grid}>
              {items.map((item) => {
                const location = [item.city, item.country].filter(Boolean).join(", ");
                const imageUrl = item.coverImage
                  ? urlFor(item.coverImage).width(900).height(560).fit("crop").url()
                  : null;

                return (
                  <article key={item._id} className={styles.card}>
                    <Link href={`/${locale}/activities/${item.slug}`} className={styles.imageWrap}>
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={item.coverImage.alt || item.title}
                          fill
                          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          className={styles.image}
                        />
                      ) : (
                        <div className={styles.imagePlaceholder} aria-hidden="true">
                          <span>{typeLabels[locale]?.[item.activityType] || typeLabels.en.other}</span>
                        </div>
                      )}
                    </Link>

                    <div className={styles.cardBody}>
                      <div className={styles.meta}>
                        <span>{typeLabels[locale]?.[item.activityType] || typeLabels.en.other}</span>
                        <time dateTime={item.startDate}>{formatDate(item.startDate, item.endDate, locale)}</time>
                      </div>
                      <h3>
                        <Link href={`/${locale}/activities/${item.slug}`}>{item.title}</Link>
                      </h3>
                      {(location || item.organizingInstitution) && (
                        <p className={styles.place}>{location || item.organizingInstitution}</p>
                      )}
                      <p className={styles.summary}>{item.summary}</p>
                      {item.participants?.length > 0 && (
                        <p className={styles.people}>
                          <strong>{es ? "Participantes:" : "Participants:"}</strong>{" "}
                          {item.participants.map(({ person }) => person?.name).filter(Boolean).join(", ")}
                        </p>
                      )}
                      <Link href={`/${locale}/activities/${item.slug}`} className={styles.readMore}>
                        {es ? "Ver actividad" : "View activity"} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.pagination} aria-label={es ? "Páginas de actividades" : "Activity pages"}>
              {page > 1 ? (
                <Link href={`/${locale}/activities?participationPage=${page - 1}#academic-participation`}>
                  ← {es ? "Anterior" : "Previous"}
                </Link>
              ) : <span />}
              <p>{es ? `Página ${page} de ${totalPages}` : `Page ${page} of ${totalPages}`} · {total} {es ? "actividades" : "activities"}</p>
              {page < totalPages ? (
                <Link href={`/${locale}/activities?participationPage=${page + 1}#academic-participation`}>
                  {es ? "Siguiente" : "Next"} →
                </Link>
              ) : <span />}
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <span>{es ? "Archivo en preparación" : "Archive in preparation"}</span>
            <p>
              {es
                ? "Las participaciones en escuelas, congresos, visitas y otros encuentros aparecerán aquí."
                : "Participation in schools, conferences, visits, and other gatherings will appear here."}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
