import React from 'react';
import {StaticQuery, Link} from 'gatsby';


const Listing = () => {
  return (
    <StaticQuery 
      query={LISTING_QUERY}
      render={({allMarkdownRemark})  => (
        allMarkdownRemark.edges.map(({node})=> (
          <article key={node.frontmatter.slug}>
            <Link to={`posts/${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2> 
            </Link>
            <p>{node.frontmatter.date}</p> 
            <p>{node.excerpt}</p>
            <Link to={node.frontmatter.slug}>Read More</Link>
          </article>
        ))
      )}
    /> 
  )
}

export default Listing;

const LISTING_QUERY = graphql`
  query BlogPostListing{
    allMarkdownRemark(limit:10, sort:{
      order:DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node { 
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
