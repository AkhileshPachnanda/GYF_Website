import { defineField, defineType } from 'sanity'

export const pageType = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Page Title',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Page Components',
            of: [
                { type: 'hero' },
            ],
        }),
    ],
})
