import {defineArrayMember, defineField, defineType} from 'sanity'

const groupActivityTypes = [
  {title: 'Workshop', value: 'workshop'},
  {title: 'Invited colloquium or seminar', value: 'colloquium'},
  {title: 'Academic visitor', value: 'visitor'},
  {title: 'Scientific meeting', value: 'meeting'},
  {title: 'Course or training', value: 'training'},
  {title: 'Outreach activity', value: 'outreach'},
  {title: 'Other', value: 'other'},
]

export const groupAcademicActivityType = defineType({
  name: 'groupAcademicActivity',
  title: 'Group Academic Activities',
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
      name: 'activityType',
      title: 'Type of activity',
      type: 'string',
      options: {list: groupActivityTypes, layout: 'dropdown'},
      validation: (Rule) => Rule.required(),
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
    defineField({name: 'venue', title: 'Venue', type: 'string'}),
    defineField({name: 'city', title: 'City', type: 'string'}),
    defineField({name: 'country', title: 'Country', type: 'string'}),
    defineField({
      name: 'responsiblePeople',
      title: 'Responsible group member(s)',
      type: 'array',
      description: 'Current and former members can be selected so the historical record remains intact.',
      of: [defineArrayMember({type: 'reference', to: [{type: 'person'}]})],
    }),
    defineField({
      name: 'guests',
      title: 'Guest(s), speaker(s), or visitor(s)',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'guest',
          title: 'Guest',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'role', title: 'Role', type: 'string'}),
            defineField({name: 'affiliation', title: 'Institution or affiliation', type: 'string'}),
          ],
          preview: {
            select: {title: 'name', role: 'role', affiliation: 'affiliation'},
            prepare({title, role, affiliation}) {
              return {title, subtitle: [role, affiliation].filter(Boolean).join(' · ')}
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Short summary (deprecated)',
      type: 'text',
      description: 'No longer used. Use Full description instead.',
      deprecated: {reason: 'Group activities now use the full description everywhere.'},
      readOnly: true,
      hidden: true,
      initialValue: undefined,
    }),
    defineField({
      name: 'summaryEs',
      title: 'Short summary (Spanish, deprecated)',
      type: 'text',
      description: 'No longer used. Use Full description (Spanish) instead.',
      deprecated: {reason: 'Group activities now use the full description everywhere.'},
      readOnly: true,
      hidden: true,
      initialValue: undefined,
    }),
    defineField({
      name: 'description',
      title: 'Full description',
      type: 'text',
      rows: 8,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Full description (Spanish)',
      type: 'text',
      rows: 8,
      description: 'Optional Spanish version. English is used as a fallback.',
    }),
    defineField({
      name: 'eventUrl',
      title: 'Related website',
      type: 'url',
      description: 'Optional. Use it when the activity has an official or related page.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
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
    {title: 'Event date, newest first', name: 'eventDateDesc', by: [{field: 'startDate', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', date: 'startDate', type: 'activityType', media: 'coverImage'},
    prepare({title, date, type, media}) {
      const typeTitle = groupActivityTypes.find((item) => item.value === type)?.title ?? type
      return {
        title: title ?? 'Untitled group activity',
        subtitle: [typeTitle, date].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
