export default {
  name: 'person',
  type: 'document',
  title: 'Slicemasters',
  icon: () => '🐨',

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Who are you',
      description: 'Tell about yourself',
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
      title: 'Person photo',
      options: {
        hotspot: true,
      },
    },
  ],
};
