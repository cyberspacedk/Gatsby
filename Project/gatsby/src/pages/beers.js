import React from 'react';
import { graphql } from 'gatsby';

import BeerList from '../components/BeerList';

const BeersPage = ({ data }) => {
  const { beers } = data;

  return <BeerList beers={beers.nodes} />;
};

export const BeerPageQuery = graphql`
  query AllBeer {
    beers: allBeer {
      nodes {
        id
        name
        price
        rating {
          average
          reviews
        }
        image
      }
    }
  }
`;

export default BeersPage;
