import React from 'react';

import Footer from '../Footer';
import Nav from '../Nav';

// Styles
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import TypographyStyles from '../../styles/Typography';
import { SiteBorderStyled, ContentStyles } from './styled';

const Layout = ({ children }) => (
  <>
    <SiteBorderStyled>
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </SiteBorderStyled>

    <GlobalStyles />
    <TypographyStyles />
  </>
);

export default Layout;
