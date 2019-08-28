import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Contact Us</h1>
    <p>Link to email, and so forth</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

