import React from 'react';

import { LogoStyled } from './styled';

const Logo = () => (
  <LogoStyled className="logo">
    <div className="inner">
      <span className="est">EST 1994</span>
      <h1>
        <span className="slicks">
          <span className="letter S">S</span>
          <span className="letter l">l</span>
          <span className="letter i">i</span>
          <span className="letter c">c</span>
          <span className="letter k">k</span>
          <span className="letter apos">'</span>
          <span className="letter s">s</span>
        </span>
        <span className="slices">slices</span>
      </h1>
    </div>
  </LogoStyled>
);

export default Logo;
