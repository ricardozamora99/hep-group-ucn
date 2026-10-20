import {defineArrayMember, defineField, defineType} from 'sanity'

const activityTypes = [
  {title: 'Workshop', value: 'workshop'},
  {title: 'Conference / Congress', value: 'conference'},
  {title: 'School', value: 'school'},
  {title: 'Academic visit', value: 'academicVisit'},
  {title: 'Research stay', value: 'researchStay'},
  {title: 'External talk or seminar', value: 'externalTalk'},
  {title: 'Outreach event', value: 'outreach'},
  {title: 'Other', value: 'other'},
]

export const academicActivityType = defineType({
  name: 'academicActivity',
  title: 'Academic Participation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Activity title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEs',
      title: 'Activity title (Spanish)',
      type: 'string',
      description: 'Optional Spanish version. English is used as a fallback.',
    }),
    defineField({
      name: 'slug',
      title: 'URL slug (deprecated)',
      type: 'slug',
      description: 'No longer used. Activities now open in an on-page detail window.',
      deprecated: {reason: 'Activities no longer have individual URL pages.'},
      readOnly: true,
      hidden: true,
      initialValue: undefined,
    }),
    defineField({
      name: 'activityType',
      title: 'Type of activity',
      type: 'string',
      options: {list: activityTypes, layout: 'dropdown'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organizerType',
      title: 'Organized by (deprecated)',
      type: 'string',
      description: 'No longer used. Academic Participation now contains external activities only.',
      deprecated: {reason: 'Group-organized events now belong in Group Academic Activities.'},
      readOnly: true,
      hidden: true,
      initialValue: undefined,
      options: {
        list: [
          {title: 'UCN HEP Group', value: 'group'},
          {title: 'External organization', value: 'external'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'responsiblePeople',
      title: 'Responsible person(s) (deprecated)',
      type: 'array',
      description: 'No longer used. Add group-organized events to Group Academic Activities.',
      deprecated: {reason: 'Use Responsible group member(s) in Group Academic Activities.'},
      readOnly: true,
      hidden: true,
      initialValue: undefined,
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'date',
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const startDate = context.document?.startDate
          return !endDate || !startDate || endDate >= startDate
            ? true
            : 'The end date cannot be earlier than the start date.'
        }),
    }),
    defineField({name: 'organizingInstitution', title: 'Event organizer / institution', type: 'string'}),
    defineField({name: 'venue', title: 'Venue', type: 'string'}),
    defineField({name: 'city', title: 'City', type: 'string'}),
    defineField({name: 'country', title: 'Country', type: 'string'}),
    defineField({
      name: 'eventUrl',
      title: 'Official event website',
      type: 'url',
      description: 'Official website for the external event.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}).required(),
    }),
    defineField({
      name: 'summary',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      description: 'Used on activity cards and in the News section.',
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: 'summaryEs',
      title: 'Short summary (Spanish)',
      type: 'text',
      rows: 3,
      description: 'Optional Spanish version. English is used as a fallback.',
      validation: (Rule) => Rule.max(320),
    }),
    defineField({
      name: 'description',
      title: 'Full description',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Full description (Spanish)',
      type: 'text',
      rows: 8,
      description: 'Optional Spanish version. English is used as a fallback.',
    }),
    defineField({
      name: 'participants',
      title: 'Group participants',
      type: 'array',
      description:
        'Current and former members are both available. Changing a person to Former does not remove their historical participation.',
      of: [
        defineArrayMember({
          name: 'participation',
          title: 'Participant',
          type: 'object',
          fields: [
            defineField({
              name: 'person',
              title: 'Person',
              type: 'reference',
              to: [{type: 'person'}],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Participation role',
              type: 'string',
              options: {
                list: [
                  {title: 'Attendee', value: 'attendee'},
                  {title: 'Speaker', value: 'speaker'},
                  {title: 'Poster presenter', value: 'poster'},
                  {title: 'Organizer', value: 'organizer'},
                  {title: 'Visitor', value: 'visitor'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'contributionTitle',
              title: 'Talk / poster / contribution title',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'person.name', subtitle: 'role', media: 'person.photo'},
          },
        }),
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alternative text', type: 'string'}),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
        defineField({name: 'captionEs', title: 'Caption (Spanish)', type: 'string'}),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Photo gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alternative text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
            defineField({name: 'captionEs', title: 'Caption (Spanish)', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'featuredInNews',
      title: 'Feature on the Home page',
      type: 'boolean',
      description: 'When enabled, this activity can appear in the Home page News section.',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Event date, newest first',
      name: 'eventDateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', date: 'startDate', type: 'activityType', media: 'coverImage'},
    prepare({title, date, type, media}) {
      const typeTitle = activityTypes.find((item) => item.value === type)?.title ?? type
      return {
        title: title ?? 'Untitled activity',
        subtitle: [typeTitle, date].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
