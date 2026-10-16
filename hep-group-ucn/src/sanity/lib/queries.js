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
