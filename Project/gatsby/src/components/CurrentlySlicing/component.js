import React from 'react';

import LoadingGrid from '../LoadingGrid';
import ItemGrid from '../ItemGrid';

const CurrentlySlicing = ({ masters }) => (
  <div>
    <h2 className="center">
      <span className="mark tilt">Slicemasters On</span>
    </h2>
    <p>Standing by, ready to slice you up!</p>
    {!masters && <LoadingGrid count={4} />}
    {masters && !masters?.length && <p>No one is working right now!</p>}
    {masters?.length && <ItemGrid items={masters} />}
  </div>
);

export default CurrentlySlicing;
