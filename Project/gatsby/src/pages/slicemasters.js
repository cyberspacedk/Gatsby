import React from 'react';
import { graphql } from 'gatsby';

import SliceMasters from '../components/SliceMasters';

const SliceMastersPage = ({ data }) => (
  <>
    <SliceMasters persons={data.persons.nodes} />
  </>
);

export const pageQuery = graphql`
  query Persons {
    persons: allSanityPerson {
      totalCount

      nodes {
        id
        name
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
export default SliceMastersPage;
