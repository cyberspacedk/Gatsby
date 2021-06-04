import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        description
        siteUrl
        defaultTitle: title
      }
    }
  }
`;

const SEO = ({ children, title, image, location }) => {
  const { site } = useStaticQuery(query);
  const { description, defaultTitle } = site.siteMetadata;

  return (
    <Helmet titleTemplate={`%s - ${defaultTitle}`}>
      <html lang="en" />
      <title>{title || defaultTitle}</title>

      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />

      {/* Open graph */}
      {location && <meta property="og:url/" content={location.href} />}
      <meta property="og:image" content={image || 'logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:sitename" content={defaultTitle} key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
};

export default SEO;
