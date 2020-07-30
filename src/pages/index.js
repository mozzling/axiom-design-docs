import React from "react"
import { Base, Heading, Button, Strong } from "@brandwatch/axiom-components"
import SideNav from "../components/SideNav"

import "./home.css"

const IndexPage = ({ data }) => {
  const documentNames = data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.component_name
  })

  return (
    <Base className="home-nav-container ax-theme--day">
      <SideNav documents={documentNames} />
      <Base className="home-content">
        <Button style={{ float: "right", margin: "20px 20px 0 0" }}>
          Edit this page
        </Button>
        <Base className="home-heading">
          <Heading style={{ "font-size": "80px" }} textSize="display1">
            <Strong>axiom </Strong>Design Docs
          </Heading>
        </Base>
      </Base>
    </Base>
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
