import { defineQuery } from "next-sanity";

export const PEOPLE_QUERY = defineQuery(`
  *[_type == "person"] | order(name asc) {
    _id,
    name,
    photo,
    countryCode,
    role,
    "description": select($locale == "es" => coalesce(descriptionEs, description), description),
    email,
    membershipStatus,
    startYear,
    endYear,
    "currentlyAt": select($locale == "es" => coalesce(currentlyAtEs, currentlyAt), currentlyAt),
    isGroupHead,
    office,
    phone,
    displayOrder,
    isJournalClubTeam,
  }
`);

export const CONTACT_QUERY = defineQuery(`
  *[
    _type == "person" &&
    membershipStatus == "current"
  ] | order(name asc) {
    _id,
    name,
    role,
    email,
    isGroupHead,
    office,
    phone
  }
`);

// Busca todos los documentos
// _type == "person"

// ↓
// ordénalos alfabéticamente

// ↓
// devuelve solo los campos que necesitamos
export const JOURNAL_CLUB_QUERY = defineQuery(`
  *[_type == "journalClubTalk"] | order(date desc) {
    _id,
    "mainTopic": select($locale == "es" => coalesce(mainTopicEs, mainTopic), mainTopic),
    "title": select($locale == "es" => coalesce(titleEs, title), title),
    speaker,
    "affiliation": select($locale == "es" => coalesce(affiliationEs, affiliation), affiliation),
    date,
    time,
    "location": select($locale == "es" => coalesce(locationEs, location), location),
    "abstract": select($locale == "es" => coalesce(abstractEs, abstract), abstract),
    poster,
    isUpcoming
  }
`);

export const PUBLICATION_AUTHORS_QUERY = defineQuery([
  '*[_type == "person" && defined(inspireAuthorId) && inspireAuthorId != ""]',
  '| order(name asc) {',
  "  _id,",
  "  name,",
  "  inspireAuthorId",
  "}",
].join("\n"));

const activityProjection = `
  _id,
  "title": select($locale == "es" => coalesce(titleEs, title), title),
  activityType,
  organizerType,
  responsiblePeople,
  startDate,
  endDate,
  organizingInstitution,
  venue,
  city,
  country,
  eventUrl,
  "summary": select($locale == "es" => coalesce(summaryEs, summary), summary),
  "description": select($locale == "es" => coalesce(descriptionEs, description), description),
  coverImage,
  gallery[]{
    ...,
    "caption": select($locale == "es" => coalesce(captionEs, caption), caption)
  },
  participants[]{
    _key,
    role,
    contributionTitle,
    "person": person->{_id, name, photo}
  }
`;

export const ACADEMIC_ACTIVITIES_QUERY = defineQuery(`{
  "items": *[_type == "academicActivity"]
    | order(startDate desc, _createdAt desc) [$start...$end] {
      ${activityProjection}
    },
  "total": count(*[_type == "academicActivity"])
}`);

export const ACADEMIC_ACTIVITY_BY_ID_QUERY = defineQuery(`
  *[_type == "academicActivity" && _id == $id][0] {
    ${activityProjection}
  }
`);

export const ACADEMIC_NEWS_QUERY = defineQuery(`
  *[
    _type == "academicActivity" &&
    featuredInNews == true
  ] | order(startDate desc, _createdAt desc) [0...3] {
    ${activityProjection}
  }
`);

export const INSTITUTIONAL_COLLABORATIONS_QUERY = defineQuery(`
  *[_type == "institutionalCollaboration"]
    | order(coalesce(displayOrder, 9999) asc, name asc) {
      _id,
      name,
      "fullName": select($locale == "es" => coalesce(fullNameEs, fullName), fullName),
      kind,
      relationshipStatus,
      startYear,
      endYear,
      "description": select($locale == "es" => coalesce(descriptionEs, description), description),
      website,
      image,
      activeMembers[]->{
        _id,
        name,
        photo,
        membershipStatus
      }
    }
`);

export const FREQUENT_COLLABORATORS_QUERY = defineQuery(`
  *[_type == "frequentCollaborator" && isActive != false]
    | order(coalesce(displayOrder, 9999) asc, name asc) {
      _id,
      name,
      photo,
      "institution": select($locale == "es" => coalesce(institutionEs, institution), institution),
      "position": select($locale == "es" => coalesce(positionEs, position), position),
      "focus": select(
        $locale == "es" => coalesce(collaborationFocusEs, collaborationFocus),
        collaborationFocus
      ),
      profileUrl
    }
`);
