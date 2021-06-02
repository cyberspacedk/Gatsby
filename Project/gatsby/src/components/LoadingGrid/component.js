import React from 'react';

import { ItemsGrid, ItemLoading } from '../../styles/Grid';
import {} from './styled';

const LoadingGrid = ({ count }) => (
  <ItemsGrid>
    {Array.from({ length: count }, (_, i) => (
      <ItemLoading>
        <p>
          <span className="mark">Loading...</span>
        </p>
        <img
          src="data:base64,iVBORw0KGgoAAAANSUhEU"
          className="loading"
          alt="Loading"
          width="500"
          height="400"
        />
      </ItemLoading>
    ))}
  </ItemsGrid>
);

export default LoadingGrid;
