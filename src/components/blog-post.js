import React from 'react'
import { Link, graphql } from 'gatsby'

import BlogLayout from './blog-layout'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  return (
    <BlogLayout>
      <article>
        <header>
          <h3>{post.frontmatter.title}</h3>
          <h4>{post.frontmatter.date}</h4>
        </header>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: post.html
            }}
          />
        </section>
      </article>
      <aside>
        <ul style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0
        }}>
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← Previous post: {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                Next post: {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </aside>
    </BlogLayout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
      }
    }
  }
`
