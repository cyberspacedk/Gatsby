import React from 'react'
import Layout from './layout';
import {graphql, useStaticQuery} from 'gatsby';

// Static Query
// Used anywhere, cant accept variable, cant use context

// Page Query
// Must be used on pages

const PostLayout = () => {
  return (
    <Layout>
      <h1>Тут тестируем запросы</h1>
    </Layout>
  )
}

export const query = graphql`
  query postQuery{ 
    markdownRemark(frontmatter:{
      slug: {
        eq: "/third-post"
      }
    }) {
      html
      frontmatter{
        title
        slug
        date
      }
    }
  }
`;

export default PostLayout;