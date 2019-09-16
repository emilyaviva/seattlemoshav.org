import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"
import "./layout.scss"

const Layout = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "seattle-unsplash.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="div"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          width="100%"
        >
          <SiteHeader />
          <main className="container is-fluid">
            {children}
          </main>
          <SiteFooter />
        </BackgroundImage>
      )
    }}
  />
)

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  className: `BackgroundImage`
}

export default Layout
