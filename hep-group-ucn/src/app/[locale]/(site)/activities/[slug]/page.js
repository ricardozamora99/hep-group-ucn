import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ACADEMIC_ACTIVITY_QUERY } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export const revalidate = 3600;

const types = {
  en: { workshop: "Workshop", conference: "Conference", school: "School", academicVisit: "Academic visit", researchStay: "Research stay", externalTalk: "Talk or seminar", outreach: "Outreach", other: "Academic activity" },
  es: { workshop: "Taller", conference: "Congreso", school: "Escuela", academicVisit: "Visita académica", researchStay: "Estancia de investigación", externalTalk: "Charla o seminario", outreach: "Divulgación", other: "Actividad académica" },
};

const roles = {
  en: { attendee: "Attendee", speaker: "Speaker", poster: "Poster presenter", organizer: "Organizer", visitor: "Visitor" },
  es: { attendee: "Asistente", speaker: "Ponente", poster: "Presentación de póster", organizer: "Organización", visitor: "Visitante" },
};

function formatDate(startDate, endDate, locale) {
  const formatter = new Intl.DateTimeFormat(locale === "es" ? "es-CL" : "en-US", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
  const start = formatter.format(new Date(`${startDate}T00:00:00Z`));
  if (!endDate || endDate === startDate) return start;
  return `${start} — ${formatter.format(new Date(`${endDate}T00:00:00Z`))}`;
}

export default async function AcademicActivityPage({ params }) {
  const { locale, slug } = await params;
  const activity = await client.fetch(
    ACADEMIC_ACTIVITY_QUERY,
    { locale, slug },
    { next: { revalidate: 3600 } }
  );

  if (!activity) notFound();
  const es = locale === "es";
  const location = [activity.venue, activity.city, activity.country].filter(Boolean).join(" · ");
  const coverUrl = activity.coverImage
    ? urlFor(activity.coverImage).width(1800).height(980).fit("crop").url()
    : null;

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        {coverUrl && (
          <Image src={coverUrl} alt={activity.coverImage.alt || activity.title} fill priority className={styles.cover} />
        )}
        <div className={styles.overlay} />
        <Container className={styles.headerInner}>
          <Link href={`/${locale}/activities#academic-participation`} className={styles.back}>
            ← {es ? "Volver a actividades" : "Back to activities"}
          </Link>
          <span className={styles.kicker}>{types[locale]?.[activity.activityType] || types.en.other}</span>
          <h1>{activity.title}</h1>
          <p>{activity.summary}</p>
        </Container>
      </header>

      <Container className={styles.content}>
        <aside className={styles.facts}>
          <div><span>{es ? "Fecha" : "Date"}</span><strong>{formatDate(activity.startDate, activity.endDate, locale)}</strong></div>
          {location && <div><span>{es ? "Lugar" : "Location"}</span><strong>{location}</strong></div>}
          {activity.organizingInstitution && <div><span>{es ? "Institución" : "Institution"}</span><strong>{activity.organizingInstitution}</strong></div>}
          {activity.responsiblePeople?.length > 0 && (
            <div>
              <span>{es ? "Responsables" : "Responsible people"}</span>
              <strong>{activity.responsiblePeople.join(", ")}</strong>
            </div>
          )}
          {activity.eventUrl && <a href={activity.eventUrl} target="_blank" rel="noreferrer">{es ? "Sitio oficial ↗" : "Official website ↗"}</a>}
        </aside>

        <div className={styles.main}>
          {activity.description && (
            <section>
              <span className={styles.sectionLabel}>{es ? "La experiencia" : "The experience"}</span>
              <p className={styles.description}>{activity.description}</p>
            </section>
          )}

          {activity.participants?.length > 0 && (
            <section>
              <span className={styles.sectionLabel}>{es ? "Participación del grupo" : "Group participation"}</span>
              <div className={styles.participants}>
                {activity.participants.map((entry) => (
                  <div key={entry._key} className={styles.participant}>
                    {entry.person?.photo && (
                      <Image
                        src={urlFor(entry.person.photo).width(120).height(120).fit("crop").url()}
                        alt={entry.person.name}
                        width={60}
                        height={60}
                      />
                    )}
                    <div>
                      <strong>{entry.person?.name}</strong>
                      <span>{roles[locale]?.[entry.role] || entry.role}</span>
                      {entry.contributionTitle && <p>{entry.contributionTitle}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </Container>

      {activity.gallery?.length > 0 && (
        <Container className={styles.gallerySection}>
          <span className={styles.sectionLabel}>{es ? "Galería" : "Gallery"}</span>
          <div className={styles.gallery}>
            {activity.gallery.map((image, index) => (
              <figure key={image._key || index}>
                <div className={styles.galleryImage}>
                  <Image
                    src={urlFor(image).width(1100).height(760).fit("crop").url()}
                    alt={image.alt || `${activity.title} ${index + 1}`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
