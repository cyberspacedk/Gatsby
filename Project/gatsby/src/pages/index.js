import React from 'react';

import HotSlices from '../components/HotSlices';
import CurrentlySlicing from '../components/CurrentlySlicing';

import { useLatestData } from '../utils/useLatestData';

import { HomePageGrid } from '../styles/Grid';

const HomePage = () => {
  const [slices, masters] = useLatestData();
  console.log('🚀 ~ file: index.js ~ line 10 ~ HomePage ~ slices', slices);
  return (
    <div>
      <h1>The best Pizza Downtown! </h1>
      <p>Open 11am to 11pm Every Single Day</p>

      <HomePageGrid>
        <CurrentlySlicing masters={masters} />
        <HotSlices slices={slices} />
      </HomePageGrid>
    </div>
  );
};

export default HomePage;
