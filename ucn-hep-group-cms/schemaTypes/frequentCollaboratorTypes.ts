import {defineField, defineType} from 'sanity'

export const frequentCollaboratorType = defineType({
  name: 'frequentCollaborator',
  title: 'Frequent Collaborators',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institutionEs',
      title: 'Institution (Spanish)',
      type: 'string',
      description: 'Translate only when the institution has an established Spanish name.',
    }),
    defineField({name: 'position', title: 'Position or role', type: 'string'}),
    defineField({name: 'positionEs', title: 'Position or role (Spanish)', type: 'string'}),
    defineField({
      name: 'collaborationFocus',
      title: 'Collaboration focus',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'collaborationFocusEs',
      title: 'Collaboration focus (Spanish)',
      type: 'text',
      rows: 4,
      description: 'Optional Spanish version. English is used as a fallback.',
    }),
    defineField({
      name: 'profileUrl',
      title: 'Institutional or personal profile',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'isActive',
      title: 'Currently a frequent collaborator',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      type: 'number',
      description: 'Optional. Lower numbers appear first.',
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],
  preview: {
    select: {title: 'name', institution: 'institution', position: 'position', media: 'photo'},
    prepare({title, institution, position, media}) {
      return {title, subtitle: [position, institution].filter(Boolean).join(' · '), media}
    },
  },
})
