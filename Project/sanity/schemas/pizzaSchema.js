// import PriceInput from '../components/PriceInput';

export default {
  // Computer name
  name: 'pizza',
  type: 'document',
  //   visible Title
  title: 'Pizzas',
  icon: () => '🍕', // icon for field

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Pizza name',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Price of the pizza in cents',
      // Custom React component
      // inputComponent: PriceInput,

      validation: (Rule) => Rule.min(1000).max(50000),
      // TODO: Add custom input component
    },
    {
      name: 'choose',
      type: 'array',
      title: 'Toppings',
      of: [
        {
          type: 'reference',
          to: { type: 'toppings' },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare: (field) => ({ title: field.title, media: field.media }),
  },
};
