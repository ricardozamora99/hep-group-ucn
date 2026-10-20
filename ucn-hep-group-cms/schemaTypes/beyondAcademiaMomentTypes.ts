import {defineField, defineType} from 'sanity'

export const beyondAcademiaMomentType = defineType({
  name: 'beyondAcademiaMoment',
  title: 'Beyond Academia Moments',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Briefly describe the photo for accessibility.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Description (Spanish)',
      type: 'text',
      rows: 3,
      description: 'Optional Spanish version. English is used as a fallback.',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1900).max(2100),
    }),
  ],
  orderings: [
    {title: 'Year, newest first', name: 'yearDesc', by: [{field: 'year', direction: 'desc'}]},
  ],
  preview: {
    select: {description: 'description', year: 'year', media: 'image'},
    prepare({description, year, media}) {
      return {
        title: description ?? 'Untitled moment',
        subtitle: year ? String(year) : undefined,
        media,
      }
    },
  },
})
