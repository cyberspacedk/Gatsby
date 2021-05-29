import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import BeerList from '../components/BeerList';

const BeersPage = ({ data }) => {
  const { beers } = data;

  return (
    <>
      <SEO title="Beers" />
      <BeerList beers={beers.nodes} />
    </>
  );
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
