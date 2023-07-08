export default {
    name: 'Dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Dish Name',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Dish Image',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
    ]
}
