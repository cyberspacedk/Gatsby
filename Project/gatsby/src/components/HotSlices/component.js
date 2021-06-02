import React from 'react';

import LoadingGrid from '../LoadingGrid';
import {} from './styled';

const HotSlices = ({ slices }) => (
  <div>
    <p>HotSlices</p>
    {!slices && <LoadingGrid count={4} />}
    {slices && !slices?.length && <p>Nothing in the Case</p>}
  </div>
);

export default HotSlices;
