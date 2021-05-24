import React from 'react';
import { graphql } from 'gatsby';

import SliceMasters from '../components/SliceMasters';
import Pagination from '../components/Pagination';

const SliceMastersPage = ({ data, pageContext }) => {
  const { currentPage, skip } = pageContext;
  return (
    <>
      <Pagination
        totalCount={data.persons.totalCount}
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        currentPage={currentPage || 0}
        skip={skip}
        base="slicemasters"
      />
      <SliceMasters persons={data.persons.nodes} />
    </>
  );
};

export const pageQuery = graphql`
  query Persons($skip: Int, $pageSize: Int) {
    persons: allSanityPerson(limit: $pageSize, skip: $skip) {
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
