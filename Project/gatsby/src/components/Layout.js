import React from 'react';

import Footer from './Footer';
import Nav from './Nav';

import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
    <GlobalStyles />
  </div>
);

export default Layout;
