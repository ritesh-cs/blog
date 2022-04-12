import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'


const BlogPage = ( {data} ) => {

    return (
       <Layout pageTitle="Blog">
           <ul>
               {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
               }
           </ul>
           <div>All my blogs will go here hhh...</div>
       </Layout>
    )
}

export const query = graphql`
 query {
    allFile {
        nodes {
            name
      }
    }
}
`

export default BlogPage;