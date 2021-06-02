import React from 'react';

import LoadingGrid from '../LoadingGrid';

import {} from './styled';

const CurrentlySlicing = ({ masters }) => (
  <div>
    <p>CurrentlySlicing</p>
    {!masters && <LoadingGrid count={4} />}
    {masters && !masters?.length && <p>No one is working right now!</p>}
  </div>
);

export default CurrentlySlicing;
