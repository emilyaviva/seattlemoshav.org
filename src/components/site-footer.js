import React from "react"
import { Link } from "gatsby"

import SiteFooterStyles from "./site-footer.module.css"

export default () => (
  <footer className={SiteFooterStyles.footer}>
    <p>
      <Link to="/">© Seattle Moshav</Link>
    </p>
    <p>
      <a href="https://github.com/emilyaviva/seattlemoshav.org/">
        This website is open-source
      </a>
    </p>
  </footer>
)
