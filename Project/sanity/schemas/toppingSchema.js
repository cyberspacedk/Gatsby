export default {
  name: 'toppings', // schema Name
  type: 'document',
  title: 'Toppings', // Tile for records
  icon: () => '🥗',

  fields: [
    {
      name: 'topping',
      type: 'string',
      title: 'Topping',
    },
    {
      name: 'vegetarian',
      type: 'boolean',
      title: 'Is vegetarian',
      options: {
        layout: 'checkbox',
      },
    },
  ],

  //   Preview for record in list
  preview: {
    select: {
      title: 'topping', // here we have to point to NAME property of the field
      vegetarian: 'vegetarian',
    },
    // Map through all fields
    prepare: (field) =>
      ![field.title, field.vegetarian].includes(undefined)
        ? {
            title: `${field.title} ${field.vegetarian ? '🥦' : '🍖'}`,
          }
        : {},
  },
};
