import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LogoImage from "../components/logo-image"
import SEO from "../components/seo"

// import indexStyles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Seattle Moshav" />
    <div className="is-hidden-mobile" style={{ padding: `2rem 0` }} />
    <h1 className="title is-1 has-text-centered">
      Seattle Moshav
    </h1>
    <h2 className="subtitle is-3 has-text-centered">
      A Cohousing Community with a Jewish Heart
    </h2>
    <div className="is-hidden-mobile" style={{ padding: `3rem 0` }} />
    <nav className="columns">
      <div className="column">
        <a className="button is-medium is-link is-fullwidth" href="https://www.urbanmoshav.org/seattle-faq.html">
          About Us
        </a>
      </div>
      <div className="column">
        <Link className="button is-medium is-link is-fullwidth" to="/blog">
          Blog
        </Link>
      </div>
      <div className="column">
        <a className="button is-medium is-link is-fullwidth" href="https://www.cohousing.org/what-cohousing/cohousing/">
          About Cohousing
        </a>
      </div>
      <div className="column">
        <Link className="button is-medium is-link is-fullwidth" to="/contact">
          Keep In Touch
        </Link>
      </div>
    </nav>
    <div className="is-hidden-mobile" style={{ padding: `4rem 0` }} />
    <div className="columns is-mobile is-centered">
      <LogoImage className="column is-full" />
    </div>
  </Layout>
)

export default IndexPage
