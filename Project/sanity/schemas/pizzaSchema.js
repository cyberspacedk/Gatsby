import { MdLocalPizza } from 'react-icons/md';

function fieldCreator(name, type, title, description, opt, val) {
  return {
    name,
    type,
    title,
    description,
    options: opt || {},
    ...(val && { validation: val }),
  };
}

export default {
  // Computer name
  name: 'pizza',
  //   visible Title
  title: 'Pizzas',
  type: 'document',
  icon: MdLocalPizza, // icon for field
  fields: [
    fieldCreator('name', 'string', 'Pizza name', 'Name of the pizza'),
    fieldCreator('slug', 'slug', 'Slug', '', {
      source: 'name',
      maxLength: 100,
    }),
    fieldCreator('image', 'image', 'Image', '', {
      hotspot: true,
    }),
    fieldCreator(
      'price',
      'number',
      'Price',
      'Price of the pizza in cents',
      false,
      (rule) => rule.min(1000).max(50000)
      // TODO: Add custom input component
    ),
  ],
};
