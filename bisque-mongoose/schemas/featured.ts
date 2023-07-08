export default {
    name: 'Featured',
    title: 'Featured Menu Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Category Name',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'shortDescription',
            type: 'string',
            title: 'Short Description',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'Restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{ type: 'reference', to: [{ type: 'Restaurant' }] }]
        },
    ]
}