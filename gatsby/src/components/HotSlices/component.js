import React from 'react';

import ItemGrid from '../ItemGrid';
import LoadingGrid from '../LoadingGrid';

const HotSlices = ({ slices }) => (
  <div>
    <h2 className="center">
      <span className="mark">Hot slices</span>
    </h2>
    <p>Come on, buy the slice!</p>

    {!slices && <LoadingGrid count={4} />}
    {slices && !slices?.length && <p>Nothing in the Case</p>}
    {slices?.length && <ItemGrid items={slices} />}
  </div>
);

export default HotSlices;
