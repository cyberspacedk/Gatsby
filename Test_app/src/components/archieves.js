import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

const Archive = ({ children }) => {
  
   const {allMarkdownRemark: {edges}} = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node { 
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)  
  

  return (
    <> 
    <aside>
      <h3>
        Archieve
      </h3>
      <p>Here list of pages that creates by node <b>in gatsby-node.js file</b> </p>
      <ul>
        {edges.map(edge => (
          <Link to={edge.node.frontmatter.slug}>
            <li>{edge.node.frontmatter.title}</li>
          </Link>
        
        )) }
      </ul>    
    </aside> 
    </>
  )
}

Archive.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Archive
