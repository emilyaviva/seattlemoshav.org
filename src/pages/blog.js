import React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/blog-layout"

function createPostElements({ data }) {
  return data.allMarkdownRemark.edges.map(({ node }) => {
    const slug = node.fields.slug
    const title = node.frontmatter.title || slug
    const date = node.frontmatter.date
    return (
      <article key={slug}>
        <header>
          <h3><Link to={`blog${slug}`}>{title}</Link></h3>
          <h4>{date}</h4>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.excerpt
            }}
          />
        </section>
      </article>
    )
  })
}

export default ({ data }) => {
  const postElements = createPostElements({ data })
  return (
    <BlogLayout>
      {postElements}
    </BlogLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
