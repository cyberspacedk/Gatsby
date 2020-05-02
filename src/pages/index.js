import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const myPages = ['/about', '/archive', '/company/team', '/404']

const IndexPage = () => (
  <Layout>
    <SEO title="Home" /> 
    <p>Its index page.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image />  */}
      <p>Pages that was create manually</p>
      <ul>
        {myPages.map(p=> (
          <Link to={p} key={p}>
            <li>{p}</li>
          </Link>
        ))} 
      </ul> 
    </div>
  </Layout>
)

export default IndexPage
 