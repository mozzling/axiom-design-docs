import React from "react"
import { graphql } from "gatsby"
import PageHeading from "../axiom-docs/PageHeading"
import SectionTitle from "../axiom-docs/SectionTitle"
import ImageWithCopy from "../axiom-docs/ImageWithCopy"
import "./component-template.css"

export default function ComponentTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <div className="body">
      <PageHeading
        title={frontmatter.title}
        content={frontmatter.main_introduction}
      />
      {frontmatter.sections.map(({ title, blocks, text }) => {
        return (
          <div className='section-title'>
            <SectionTitle title={title} content={text} />
            {blocks.map(({ title, text, image }) => (
              <div>
                <ImageWithCopy title={title} content={text} img={image} />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  fragment BlockList on Sections {
    type
    title
    blocks {
      title
      text
      image
      alt
    }
  }

  query($component_name: String!) {
    markdownRemark(frontmatter: { component_name: { eq: $component_name } }) {
      frontmatter {
        title
        component_name
        main_introduction
        sections {
          ...BlockList
        }
      }
    }
  }
`
