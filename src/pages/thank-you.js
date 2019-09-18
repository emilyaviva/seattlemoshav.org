import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Thank You" />
    <div className="is-hidden-mobile" style={{ padding: `2rem 0` }} />
    <h1 className="title is-1 has-text-centered">
      Thank You
    </h1>
    <h2 className="subtitle is-3 has-text-centered">
      We'll be in touch soon.
    </h2>
    <p>
      <Link className="button is-link" to="/">Back to Home</Link>
    </p>
  </Layout>
)
