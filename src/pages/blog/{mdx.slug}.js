import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link, graphql } from 'gatsby'

import * as React from 'react'
import Layout from '../../components/layout'


const BlogPost = ( {data} ) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id,
      body
    }
  }
`

export default BlogPost
