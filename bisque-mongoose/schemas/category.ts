export default {
    name: 'Category',
    title: 'Menu Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Category Name',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Category Image',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
    ]
}

