import React from 'react';

import { ItemsGridStyled, ItemStyled } from '../../styles/Grid';
import {} from './styled';

const LoadingGrid = ({ count }) => (
  <ItemsGridStyled>
    {Array.from({ length: count }, (_, i) => (
      <ItemStyled>
        <p>
          <span className="mark">Loading...</span>
        </p>
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          className="loading"
          alt="Loading"
          width="500"
          height="400"
        />
      </ItemStyled>
    ))}
  </ItemsGridStyled>
);

export default LoadingGrid;
