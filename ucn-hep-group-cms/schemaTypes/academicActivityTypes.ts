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
      title: 'URL slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
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
      title: 'Organized by',
      type: 'string',
      description: 'Use External for schools, congresses, visits, and events attended by group members.',
      options: {
        list: [
          {title: 'UCN HEP Group', value: 'group'},
          {title: 'External organization', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'external',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'responsiblePeople',
      title: 'Responsible person(s)',
      type: 'array',
      description:
        'Enter the names manually. This is intended for workshops and other activities organized by the UCN HEP Group.',
      hidden: ({document}) => document?.organizerType !== 'group',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) =>
        Rule.custom((names, context) => {
          if (context.document?.organizerType !== 'group') return true
          return Array.isArray(names) && names.some((name) => name?.trim())
            ? true
            : 'Add at least one responsible person for a group-organized activity.'
        }),
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
    defineField({name: 'organizingInstitution', title: 'Organizing institution', type: 'string'}),
    defineField({name: 'venue', title: 'Venue', type: 'string'}),
    defineField({name: 'city', title: 'City', type: 'string'}),
    defineField({name: 'country', title: 'Country', type: 'string'}),
    defineField({
      name: 'eventUrl',
      title: 'Official event website',
      type: 'url',
      description:
        'Required for externally organized activities. Optional for activities organized by the UCN HEP Group.',
      validation: (Rule) =>
        Rule.uri({scheme: ['http', 'https']}).custom((url, context) => {
          if (context.document?.organizerType !== 'external') return true
          return url ? true : 'An official event website is required for external activities.'
        }),
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
