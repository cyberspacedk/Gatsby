const fetch = require('isomorphic-fetch');

exports.fetchBeersAndCreateNodes = async ({ actions, createContentDigest }) => {
  // Fetch for an external data
  const response = await fetch('https://api.sampleapis.com/beers/ale');
  const beers = await response.json();

  // map through and
  beers.forEach((beer) => {
    beer.id = String(beer.id);
    // create node
    const node = {
      ...beer,
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json', // needs for plugins that parses data (can be markdown )
        contentDigest: createContentDigest(beer), // generates hash based on content
      },
    };

    // create node for this data
    actions.createNode(node);
  });
};
