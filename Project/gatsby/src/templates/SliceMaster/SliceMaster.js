import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../../components/SEO';

const SliceMaster = ({ data }) => {
  console.log('🚀 ~ file: SliceMaster.js ~ line 8 ~ SliceMaster ~ data', data);
  const { name, image, description } = data.person;
  return (
    <>
      <SEO title={name} image={image?.asset?.fluid?.src} />

      <div className="center">
        <Link to="/slicemasters">Back to all masters</Link>
        <Img fluid={image.asset.fluid} />
        <h2>
          <span className="mark">{name}</span>
        </h2>
        <p>{description}</p>
      </div>
    </>
  );
};

// dynamic query with param
export const pageQuery = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      id
      name
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default SliceMaster;
