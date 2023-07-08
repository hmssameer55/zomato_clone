export default {
    name: 'Restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant Name',
            validation: Rule => Rule.required()
        },
        {
            name: 'shortDescription',
            type: 'string',
            title: 'Short Description',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Restaurant Image',
            validation: Rule => Rule.required()
        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude',
        },
        {
            name: 'lng',
            type: 'number',
            title: 'Longitude',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
            validation: Rule => Rule.required()
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating',
            validation: Rule => Rule.required().min(0).max(5).error('Rating must be between 0 and 5')
        },
        {
            name: 'type',
            type: 'reference',
            title: 'Category',
            to: [{ type: 'Category' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [{ type: 'reference', to: [{ type: 'Dish' }] }]
        },
    ]
}