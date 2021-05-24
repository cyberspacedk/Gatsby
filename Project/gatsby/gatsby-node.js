// page builders
const { pizzaPageBuilder } = require('./src/nodeHelpers/pizzaPageBuilder');
const { toppingPageBuilder } = require('./src/nodeHelpers/toppingPageBuilder');

// graphql layer - external source retriever
const {
  fetchBeersAndCreateNodes,
} = require('./src/nodeHelpers/fetchBeersAndCreateNodes');

// HOOKS

// page creator hook
exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    pizzaPageBuilder(graphql, actions),
    toppingPageBuilder(graphql, actions),
  ]);
};

// graphql layer - source node builder
exports.sourceNodes = async (params) => {
  await Promise.all([fetchBeersAndCreateNodes(params)]);
};
