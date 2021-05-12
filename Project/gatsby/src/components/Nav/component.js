import React from 'react';
import { Link } from 'gatsby';

import Logo from '../Logo';
import { navData } from './constants';
import { NavStyled } from './styled';

const Nav = () => (
  <NavStyled>
    <ul>
      {navData.map(({ src, label }) => (
        <li>
          <Link to={src}>{label === 'LOGO' ? <Logo /> : label}</Link>
        </li>
      ))}
    </ul>
  </NavStyled>
);

export default Nav;
