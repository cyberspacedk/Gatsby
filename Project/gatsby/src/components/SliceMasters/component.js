import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { SliceMasterStyled } from './styled';

const SliceMasters = ({ persons }) => (
  <>
    <SliceMasterStyled>
      {persons.map((person) => (
        <div>
          <Link to={`slicemasters/${person.slug.current}`}>
            <h2>
              <span className="mark">{person.name}</span>
            </h2>
          </Link>
          <Img fluid={person.image.asset.fluid} />
          <p className="description">{person.description}</p>
        </div>
      ))}
    </SliceMasterStyled>
  </>
);

export default SliceMasters;
