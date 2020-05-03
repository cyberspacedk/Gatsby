import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';

import gastbyLogo from '../images/gatsby-astronaut.png';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.1rem;
`;


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
     
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <header>
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
      </HeaderContainer> 
    </HeaderWrapper>
 
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
