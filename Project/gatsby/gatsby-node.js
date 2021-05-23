const path = require('path');

const pizzaPageBuilder = async (graphql, actions) => {
  // get page template reference
  const pizzaPageTemplate = path.resolve('./src/templates/Pizza.js');

  //   make query for getting data
  const { data } = await graphql(`
    query AllPizzas {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // map through nodes and create pages
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`, // url for new page
      component: pizzaPageTemplate, // template to render
      // data to passed to Component as props "pageContext"
      context: {
        slug: pizza.slug.current, // will be available as variable $slug for query param
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await pizzaPageBuilder(graphql, actions);
};
