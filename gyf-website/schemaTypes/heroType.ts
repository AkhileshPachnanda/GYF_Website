import { defineField, defineType } from 'sanity'

export const heroType = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'badge',
            type: 'string',
            title: 'Badge Text',
            initialValue: 'Powering 500+ Brands'
        }),
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading (First Part)',
            initialValue: "We're changing how the world tries on"
        }),
        defineField({
            name: 'highlightedWord',
            type: 'string',
            title: 'Highlighted Word',
            description: 'The word that gets the green squiggle underline',
            initialValue: 'clothes.'
        }),
        defineField({
            name: 'subheading',
            type: 'text',
            title: 'Subheading',
            initialValue: 'The API layer for bold fashion brands. Visual styling, fit recommendations, and skin tone analysis that actually works.'
        }),
        defineField({
            name: 'primaryCta',
            type: 'string',
            title: 'Primary CTA Text',
            initialValue: 'Start Building'
        }),
        defineField({
            name: 'secondaryCta',
            type: 'string',
            title: 'Secondary CTA Text',
            initialValue: 'Book Demo'
        }),
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'subheading',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Hero Section',
                subtitle: subtitle || 'Hero component',
            }
        },
    },
})
