import {defineArrayMember, defineField, defineType} from 'sanity'

const collaborationKinds = [
  {title: 'Scientific experiment', value: 'experiment'},
  {title: 'University', value: 'university'},
  {title: 'Research center or institute', value: 'researchCenter'},
  {title: 'Scientific network or consortium', value: 'network'},
  {title: 'Other institution', value: 'other'},
]

export const institutionalCollaborationType = defineType({
  name: 'institutionalCollaboration',
  title: 'Institutional Collaborations',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Short name',
      type: 'string',
      description: 'For example: DUNE, NOvA, CERN, or the university acronym.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullName',
      title: 'Full name / subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullNameEs',
      title: 'Full name / subtitle (Spanish)',
      type: 'string',
      description: 'Optional Spanish version. English is used as a fallback.',
    }),
    defineField({
      name: 'kind',
      title: 'Type of collaboration',
      type: 'string',
      options: {list: collaborationKinds, layout: 'dropdown'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relationshipStatus',
      title: 'Relationship status',
      type: 'string',
      options: {
        list: [
          {title: 'Active collaboration', value: 'active'},
          {title: 'Prospective / developing link', value: 'prospective'},
          {title: 'Past collaboration', value: 'past'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startYear',
      title: 'Start year',
      type: 'number',
      validation: (Rule) => Rule.integer().min(1900).max(2200),
    }),
    defineField({
      name: 'endYear',
      title: 'End year',
      type: 'number',
      hidden: ({document}) => document?.relationshipStatus !== 'past',
      validation: (Rule) =>
        Rule.integer().min(1900).max(2200).custom((endYear, context) => {
          const startYear = context.document?.startYear
          if (!endYear || !startYear) return true
          return endYear >= startYear ? true : 'The end year cannot be earlier than the start year.'
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Description (Spanish)',
      type: 'text',
      rows: 6,
      description: 'Optional Spanish version. English is used as a fallback.',
    }),
    defineField({
      name: 'website',
      title: 'Official website',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'image',
      title: 'Logo or representative image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activeMembers',
      title: 'Active group members in this collaboration',
      type: 'array',
      description:
        'Select current group members who participate actively. Existing references are preserved if a member later becomes Former.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'person'}],
          options: {filter: 'membershipStatus == "current"'},
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      type: 'number',
      description: 'Optional. Lower numbers appear first.',
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],
  orderings: [
    {title: 'Display order', name: 'displayOrder', by: [{field: 'displayOrder', direction: 'asc'}]},
    {title: 'Name', name: 'name', by: [{field: 'name', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'fullName', status: 'relationshipStatus', media: 'image'},
    prepare({title, subtitle, status, media}) {
      const statusLabel = status === 'active' ? 'Active' : status === 'past' ? 'Past' : 'Prospective'
      return {title, subtitle: `${statusLabel} · ${subtitle ?? ''}`, media}
    },
  },
})
