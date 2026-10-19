"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

const roleLabels = {
  en: { attendee: "Attendee", speaker: "Speaker", poster: "Poster presenter", organizer: "Organizer", visitor: "Visitor" },
  es: { attendee: "Asistente", speaker: "Ponente", poster: "Presentación de póster", organizer: "Organización", visitor: "Visitante" },
};

function formatDate(startDate, endDate, locale, long = false) {
  if (!startDate) return "";
  const language = locale === "es" ? "es-CL" : "en-US";
  const format = new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: long ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const start = format.format(new Date(`${startDate}T00:00:00Z`));
  if (!endDate || endDate === startDate) return start;
  return `${start} — ${format.format(new Date(`${endDate}T00:00:00Z`))}`;
}

function activityImages(activity) {
  if (!activity) return [];
  const images = [];
  if (activity.coverImage?.asset) images.push({ ...activity.coverImage, _key: "cover" });
  for (const image of activity.gallery ?? []) {
    if (image?.asset && image._key !== "cover") images.push(image);
  }
  return images;
}

function ActivityModal({ activity, locale, onClose }) {
  const es = locale === "es";
  const [imageIndex, setImageIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const images = useMemo(() => activityImages(activity), [activity]);
  const activeImage = images[imageIndex] ?? null;
  const location = [activity.venue, activity.city, activity.country].filter(Boolean).join(" · ");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") setImageIndex((index) => Math.max(0, index - 1));
      if (event.key === "ArrowRight") setImageIndex((index) => Math.min(images.length - 1, index + 1));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activity._id, images.length, onClose]);

  return (
    <div className={styles.modalLayer}>
      <button className={styles.backdrop} type="button" onClick={onClose} aria-label={es ? "Cerrar detalle" : "Close details"} />
      <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="activity-modal-title">
        <div className={styles.modalHeader}>
          <div>
            <span>{typeLabels[locale]?.[activity.activityType] || typeLabels.en.other}</span>
            <h3 id="activity-modal-title">{activity.title}</h3>
          </div>
          <button ref={closeButtonRef} type="button" className={styles.closeButton} onClick={onClose} aria-label={es ? "Cerrar" : "Close"}>×</button>
        </div>

        <div className={styles.modalGrid}>
          <div className={styles.modalInfo}>
            <p className={styles.modalSummary}>{activity.summary}</p>

            <dl className={styles.facts}>
              <div><dt>{es ? "Fecha" : "Date"}</dt><dd>{formatDate(activity.startDate, activity.endDate, locale, true)}</dd></div>
              {location && <div><dt>{es ? "Lugar" : "Location"}</dt><dd>{location}</dd></div>}
              {activity.organizingInstitution && <div><dt>{es ? "Institución" : "Institution"}</dt><dd>{activity.organizingInstitution}</dd></div>}
              {activity.responsiblePeople?.length > 0 && <div><dt>{es ? "Responsables" : "Responsible people"}</dt><dd>{activity.responsiblePeople.join(", ")}</dd></div>}
            </dl>

            {activity.description && <p className={styles.modalDescription}>{activity.description}</p>}

            {activity.participants?.length > 0 && (
              <div className={styles.participantSection}>
                <h4>{es ? "Participación del grupo" : "Group participation"}</h4>
                <div className={styles.participantList}>
                  {activity.participants.map((entry) => (
                    <div className={styles.participant} key={entry._key}>
                      {entry.person?.photo && (
                        <Image
                          src={urlFor(entry.person.photo).width(96).height(96).fit("crop").url()}
                          alt={entry.person.name}
                          width={48}
                          height={48}
                        />
                      )}
                      <div>
                        <strong>{entry.person?.name}</strong>
                        <span>{roleLabels[locale]?.[entry.role] || entry.role}</span>
                        {entry.contributionTitle && <p>{entry.contributionTitle}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activity.eventUrl && (
              <a className={styles.officialLink} href={activity.eventUrl} target="_blank" rel="noreferrer">
                {es ? "Visitar sitio oficial" : "Visit official website"} ↗
              </a>
            )}
          </div>

          <div className={styles.modalGallery}>
            {activeImage ? (
              <>
                <div className={styles.mainImage}>
                  <Image
                    src={urlFor(activeImage)
                      .ignoreImageParams()
                      .width(1500)
                      .height(1100)
                      .fit("max")
                      .url()}
                    alt={activeImage.alt || activity.title}
                    fill
                    sizes="(max-width: 800px) 94vw, 56vw"
                  />
                  {images.length > 1 && (
                    <>
                      <button type="button" className={styles.previousImage} onClick={() => setImageIndex((index) => Math.max(0, index - 1))} disabled={imageIndex === 0} aria-label={es ? "Foto anterior" : "Previous photo"}>‹</button>
                      <button type="button" className={styles.nextImage} onClick={() => setImageIndex((index) => Math.min(images.length - 1, index + 1))} disabled={imageIndex === images.length - 1} aria-label={es ? "Foto siguiente" : "Next photo"}>›</button>
                    </>
                  )}
                </div>
                <div className={styles.imageCaption}>
                  <span>{imageIndex + 1} / {images.length}</span>
                  {activeImage.caption && <p>{activeImage.caption}</p>}
                </div>
                {images.length > 1 && (
                  <div className={styles.thumbnails}>
                    {images.map((image, index) => (
                      <button key={image._key} type="button" className={index === imageIndex ? styles.thumbnailActive : ""} onClick={() => setImageIndex(index)} aria-label={`${es ? "Ver foto" : "View photo"} ${index + 1}`}>
                        <Image src={urlFor(image).width(180).height(120).fit("crop").url()} alt="" fill sizes="90px" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className={styles.noGallery}>{es ? "Galería en preparación" : "Gallery coming soon"}</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AcademicParticipation({ items, total, page, totalPages, locale, initialActivity }) {
  const es = locale === "es";
  const [activeActivity, setActiveActivity] = useState(initialActivity);

  const closeActivity = () => {
    setActiveActivity(null);
    if (window.location.search.includes("activity=")) {
      window.history.replaceState({}, "", `${window.location.pathname}#academic-participation`);
    }
  };

  return (
    <section id="academic-participation" className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div>
            <span className={styles.kicker}>{es ? "Participación académica" : "Academic participation"}</span>
            <h2 className={styles.title}>{es ? "El grupo en movimiento" : "The group in motion"}<span>{es ? "más allá de UCN" : "beyond UCN"}</span></h2>
          </div>
          <p className={styles.intro}>{es ? "Escuelas, congresos, visitas y encuentros donde nuestros integrantes amplían su formación y construyen nuevas redes científicas." : "Schools, conferences, visits, and gatherings where our members broaden their training and build new scientific connections."}</p>
        </div>

        {items.length > 0 ? (
          <>
            <div className={styles.grid}>
              {items.map((item) => {
                const location = [item.city, item.country].filter(Boolean).join(", ");
                const imageUrl = item.coverImage ? urlFor(item.coverImage).width(900).height(560).fit("crop").url() : null;
                return (
                  <article key={item._id} className={styles.card}>
                    <button type="button" className={styles.imageWrap} onClick={() => setActiveActivity(item)} aria-label={`${es ? "Ver" : "View"} ${item.title}`}>
                      {imageUrl ? <Image src={imageUrl} alt={item.coverImage.alt || item.title} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" className={styles.image} /> : <div className={styles.imagePlaceholder} aria-hidden="true"><span>{typeLabels[locale]?.[item.activityType] || typeLabels.en.other}</span></div>}
                    </button>
                    <div className={styles.cardBody}>
                      <div className={styles.meta}><span>{typeLabels[locale]?.[item.activityType] || typeLabels.en.other}</span><time dateTime={item.startDate}>{formatDate(item.startDate, item.endDate, locale)}</time></div>
                      <h3><button type="button" onClick={() => setActiveActivity(item)}>{item.title}</button></h3>
                      {(location || item.organizingInstitution) && <p className={styles.place}>{location || item.organizingInstitution}</p>}
                      <p className={styles.summary}>{item.summary}</p>
                      {item.participants?.length > 0 && <p className={styles.people}><strong>{es ? "Participantes:" : "Participants:"}</strong>{" "}{item.participants.map(({ person }) => person?.name).filter(Boolean).join(", ")}</p>}
                      <button type="button" onClick={() => setActiveActivity(item)} className={styles.readMore}>{es ? "Ver actividad" : "View activity"} <span aria-hidden="true">→</span></button>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.pagination} aria-label={es ? "Páginas de actividades" : "Activity pages"}>
              {page > 1 ? <Link href={`/${locale}/activities?participationPage=${page - 1}#academic-participation`}>← {es ? "Anterior" : "Previous"}</Link> : <span />}
              <p>{es ? `Página ${page} de ${totalPages}` : `Page ${page} of ${totalPages}`} · {total} {es ? "actividades" : "activities"}</p>
              {page < totalPages ? <Link href={`/${locale}/activities?participationPage=${page + 1}#academic-participation`}>{es ? "Siguiente" : "Next"} →</Link> : <span />}
            </div>
          </>
        ) : (
          <div className={styles.empty}><span>{es ? "Archivo en preparación" : "Archive in preparation"}</span><p>{es ? "Las participaciones en escuelas, congresos, visitas y otros encuentros aparecerán aquí." : "Participation in schools, conferences, visits, and other gatherings will appear here."}</p></div>
        )}
      </Container>

      {activeActivity && <ActivityModal key={activeActivity._id} activity={activeActivity} locale={locale} onClose={closeActivity} />}
    </section>
  );
}
