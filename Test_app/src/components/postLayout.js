import React from 'react'
import Layout from './layout';
import {graphql, useStaticQuery} from 'gatsby';

// Static Query
// Used anywhere, cant accept variable, cant use context

// Page Query
// Must be used on pages

const PostLayout = ({data}) => {

  return (
    <Layout>
      <p>Тут тестируем динамически сгенерированный контент</p>
      <h2>Article title - {data.markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{
        __html: data.markdownRemark.html
      }}/>
    </Layout>
  )
}

// переменная slug подтянется из контекста который мы описали при создании страницы в gatsby-node.js
export const query = graphql`
  query postQuery($slug: String!){  
    markdownRemark(frontmatter:{
      slug: {
        eq: $slug
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