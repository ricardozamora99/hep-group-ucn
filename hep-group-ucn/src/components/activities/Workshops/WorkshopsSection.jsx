import styles from "./WorkshopsSection.module.css";
import Container from "@/components/layout/Container";
import WorkshopBlock from "./WorkshopBlock";

const typeLabels = {
  en: {
    workshop: "Workshop",
    colloquium: "Invited colloquium or seminar",
    visitor: "Academic visitor",
    meeting: "Scientific meeting",
    training: "Course or training",
    outreach: "Outreach activity",
    other: "Academic activity",
  },
  es: {
    workshop: "Taller",
    colloquium: "Coloquio o seminario invitado",
    visitor: "Visita académica",
    meeting: "Encuentro científico",
    training: "Curso o capacitación",
    outreach: "Actividad de divulgación",
    other: "Actividad académica",
  },
};

function formatDate(startDate, endDate, locale) {
  if (!startDate) return "";
  const language = locale === "es" ? "es-CL" : "en-US";
  const format = (value) =>
    new Intl.DateTimeFormat(language, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
      .format(new Date(`${value}T00:00:00Z`));
  return endDate && endDate !== startDate ? `${format(startDate)} — ${format(endDate)}` : format(startDate);
}

function normalizeActivity(activity, index, locale) {
  const images = [activity.coverImage, ...(activity.gallery ?? [])]
    .filter((image, imageIndex, list) => image && list.findIndex((candidate) => candidate?.asset?._ref === image?.asset?._ref) === imageIndex);
  const place = [activity.venue, activity.city, activity.country].filter(Boolean).join(", ");

  return {
    id: activity._id,
    number: String(index + 1).padStart(2, "0"),
    title: activity.title,
    type: typeLabels[locale]?.[activity.activityType] ?? typeLabels.en[activity.activityType] ?? activity.activityType,
    place,
    date: formatDate(activity.startDate, activity.endDate, locale),
    speaker: (activity.guests ?? [])
      .map((guest) => {
        const context = [guest.role, guest.affiliation].filter(Boolean).join(" · ");
        return [guest.name, context].filter(Boolean).join(" — ");
      })
      .filter(Boolean)
      .join(", "),
    organizers: (activity.responsiblePeople ?? []).map((person) => person.name).filter(Boolean).join(", "),
    description: activity.description,
    images,
    eventUrl: activity.eventUrl,
  };
}

export default function WorkshopsSection({ activities = [], locale = "en" }) {
  const entries = activities.map((activity, index) => normalizeActivity(activity, index, locale));

  return (
    <section className={styles.section} id="group-activities">
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>{locale === "es" ? "Actividades académicas del grupo" : "Group academic activities"}</span>
            <h2 className={styles.title}>{locale === "es" ? "Encuentros que reúnen" : "Events that bring"}<span>{locale === "es" ? "a nuestra comunidad científica" : "our scientific community together"}</span>
            </h2>
          </div>

          <p className={styles.intro}>{locale === "es" ? "Talleres, coloquios, visitas y otros espacios organizados o recibidos por el grupo para promover el intercambio, la formación y nuevas conexiones científicas." : "Workshops, colloquia, visits, and other spaces organized or hosted by the group to encourage exchange, training, and new scientific connections."}</p>
        </div>

        <div className={styles.list}>
          {entries.map((workshop, index) => (
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
