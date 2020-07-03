import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi Axiom Design Docs</h1>
      <Link to="/component-render-test/">
        Have a look at the custom axiom doc components
      </Link>{" "}
      <p>
        They dont have the needed styling and don't match the gallery.io layout
        blocks yet, but you'll get the idea
      </p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <pre>{JSON.stringify(node.frontmatter.component_name)}</pre>
      ))}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <pre>{JSON.stringify(node.frontmatter)}</pre>
      ))}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            component_name
            main_introduction
          }
        }
      }
    }
  }
`
