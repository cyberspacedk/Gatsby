const path = require('path');

exports.sliceMastersPageBuilder = async (graphql, actions) => {
  // need query all slice masters to find out count of persons
  const { data } = await graphql(`
    query AllPersons {
      persons: allSanityPerson {
        totalCount
        nodes {
          id
          name
          description
          slug {
            current
          }
        }
      }
    }
  `);

  // Create single sliceMaster Page
  data.persons.nodes.forEach((person) => {
    actions.createPage({
      path: `/slicemasters/${person.slug.current}`,
      component: path.resolve(
        __dirname,
        '../templates/SliceMaster/SliceMaster.js'
      ),
      context: {
        slug: person.slug.current,
      },
    });
  });

  // calculate count of pages
  // grab count of pages from settings
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  // define count of pages
  const pageCount = Math.ceil(data.persons.totalCount / pageSize);

  // loop from 1 to n and create the pages
  Array.from({ length: pageCount }).forEach((_, idx) => {
    actions.createPage({
      path: `/slicemasters/${idx + 1}`,
      component: path.resolve(__dirname, '../pages/slicemasters.js'),
      context: {
        skip: idx * pageSize, // skip amount of records
        currentPage: idx + 1,
        pageSize, // records per page,
      },
    });
  });
};
