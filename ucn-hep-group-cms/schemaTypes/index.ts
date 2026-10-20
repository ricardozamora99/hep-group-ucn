// Here are the schema types of the document schemas defined in your project.
// Import them and add them to the schemaTypes array to make them
// available in Sanity Studio.

import {personType} from './personTypes'
import {journalClubTalkType} from './journalClubTalkTypes'
import {academicActivityType} from './academicActivityTypes'
import {institutionalCollaborationType} from './institutionalCollaborationTypes'
import {frequentCollaboratorType} from './frequentCollaboratorTypes'
import {groupAcademicActivityType} from './groupAcademicActivityTypes'
import {beyondAcademiaMomentType} from './beyondAcademiaMomentTypes'

export const schemaTypes = [
  personType,
  journalClubTalkType,
  academicActivityType,
  institutionalCollaborationType,
  frequentCollaboratorType,
  groupAcademicActivityType,
  beyondAcademiaMomentType,
]
