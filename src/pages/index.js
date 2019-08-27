import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LogoImage from "../components/logo-image"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Seattle Moshav" />
    <main className={indexStyles.main}>
      <h1 className={indexStyles.h1}>Seattle Moshav</h1>
      <h2 className={indexStyles.h2}>A Cohousing Community with a Jewish Heart</h2>
      <nav className={indexStyles.nav}>
        <ul className={indexStyles.ul}>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/cohousing-faq"><li>Cohousing FAQ</li></Link>
          <Link to="/contact"><li>Keep In Touch</li></Link>
        </ul>
      </nav>
      <LogoImage className={indexStyles.logoImage} />
    </main>
  </Layout>
)

export default IndexPage