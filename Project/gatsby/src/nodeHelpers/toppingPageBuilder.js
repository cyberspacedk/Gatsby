const path = require('path');

exports.toppingPageBuilder = async (graphql, action) => {
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
      component: path.resolve(__dirname, '../pages/pizzas.js'),
      context: {
        name: topping.name,
        toppingRegex: `/${topping.name}/i`,
      },
    });
  });
};
