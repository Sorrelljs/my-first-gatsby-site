import * as React from 'react';
import Layout from "../components/layout";
import {graphql} from 'gatsby'


const Blog = ({ data }) => {

    console.log(data)
    return (
            <Layout pageTitle="Blog">
                <li>
                    {data.allFiles.nodes.map(node => {
                        return <li key={node.name}>{node.name}</li>
                    })
                    }
                </li>
            </Layout>
    )
}

export const query = graphql`
query  {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
  `;
export default Blog;