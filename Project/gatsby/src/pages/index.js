import React from 'react';

import HotSlices from '../components/HotSlices';
import CurrentlySlicing from '../components/CurrentlySlicing';

import { useLatestData } from '../utils/useLatestData';

import { HomeWrapperStyled, HomePageGridStyled } from '../styles/Grid';

const HomePage = () => {
  const [slices, masters] = useLatestData();
  return (
    <HomeWrapperStyled>
      <h1>The best Pizza Downtown! </h1>
      <p>Open 11am to 11pm Every Single Day</p>

      <HomePageGridStyled>
        <CurrentlySlicing masters={masters} />
        <HotSlices slices={slices} />
      </HomePageGridStyled>
    </HomeWrapperStyled>
  );
};

export default HomePage;
