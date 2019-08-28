import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog…</h1>
    <p>There will eventually be a blog here, I promise.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

