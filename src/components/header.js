import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"

import gastbyLogo from '../images/gatsby-astronaut.png';



const Header = ({ siteTitle }) => {
  
  const post = useStaticQuery(graphql` 
  query MyQuery {
    allMarkdownRemark{
     edges{
       node{
         html
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
  `)
  console.log("➡️: Layout -> post", post)
  
  return (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          {/* <img src={gastbyLogo} alt="logo" width="100" /> */}
        </Link>
      </h1>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
