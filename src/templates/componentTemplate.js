import React from "react"
import { graphql } from "gatsby"
import PageHeading from "../axiom-docs/PageHeading"
import SectionTitle from "../axiom-docs/SectionTitle"
import ImageWithCopy from "../axiom-docs/ImageWithCopy"

export default function ComponentTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log("frontmatter", frontmatter)
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <PageHeading
          title={frontmatter.component_name}
          content={frontmatter.introduction}
        />
        {Object.entries(frontmatter.section).map(([key, value]) => {
          if (!value) return null
          return (
            <div>
              <SectionTitle title={value.title} content={value.introduction} />
              <ImageWithCopy img={value.image} content={value.introduction} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($component_name: String!) {
    markdownRemark(frontmatter: { component_name: { eq: $component_name } }) {
      html
      frontmatter {
        title
        component_name
        introduction
        section {
          section_1 {
            title
            introduction
          }
          section_2 {
            title
            introduction
          }
          section_3 {
            title
            introduction
          }
          section_4 {
            title
            introduction
          }
        }
      }
    }
  }
`
