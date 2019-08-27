import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-medium-res.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return <Img
    fixed={data.file.childImageSharp.fixed}
    style={{
      backgroundColor: `rgb(253, 250, 235)`,
      borderRadius: `3%`,
      border: `3px solid black`
    }}
    alt="Seattle Moshav Logo"
  />
}
