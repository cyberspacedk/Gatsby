const path = require('path');

exports.toppingPageBuilder = async (graphql, action) => {
  const toppingTemplate = path.resolve(__dirname, '../pages/pizzas.js');

  const { data } = await graphql(`
    query Toppings {
      toppings: allSanityTopping {
        nodes {
          id
          name
        }
      }
    }
  `);

  data.toppings.nodes.forEach((topping) => {
    action.createPage({
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: {
        name: topping.name,
        toppingRegex: `/${topping.name}/i`,
      },
    });
  });
};
