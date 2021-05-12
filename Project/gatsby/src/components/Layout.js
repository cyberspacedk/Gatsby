import React from 'react';

import Footer from './Footer';
import Nav from './Nav';

// Styles
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import TypographyStyles from '../styles/Typography';

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
    <GlobalStyles />
    <TypographyStyles />
  </div>
);

export default Layout;
