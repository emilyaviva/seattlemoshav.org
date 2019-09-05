import React from 'react'

import Layout from './layout'
import "./blog-layout.scss"

const BlogLayout = ({ children }) => (
  <Layout>
    <div className="BlogLayout">
      {children}
    </div>
  </Layout>
)

export default BlogLayout