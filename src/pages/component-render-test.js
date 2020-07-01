import React from "react"
import { Link } from "gatsby"
import { Base, Image } from "@brandwatch/axiom-components"

import PageHeading from "../axiom-docs/PageHeading"
import ImageWithCopy from "../axiom-docs/ImageWithCopy"
import SectionTitle from "../axiom-docs/SectionTitle"

import "../axiom-docs/axiom-docs.css"

const ComponentRenderTest = () => {
  const markdownObj = [
    {
      type: "page-title",
      title: "This is my Page",
      content: "This is the introduction to the page...",
      imageAlign: null,
      img: null,
    },
    {
      type: "section-title",
      title: "I am the Section title",
    },
    {
      type: "paragraph",
      content:
        "This is the paragraph component, which contains lots of words and text and strings and things ",
    },
    {
      type: "image-with-copy",
      imageAlign: "right",
      title: "My first image",
      content: "info about my first image",
      img: "",
    },
    {
      type: "image-with-copy",
      imageAlign: "left",
      title: "My second image",
      content: "info about my second image",
      img: "",
    },
    {
      type: "image-block",
      img:
        "https://vectorlogoseek.com/wp-content/uploads/2019/09/brandwatch-vector-logo.jpg",
    },
  ]
  return (
    <Base className="component-test-container">
      <Link to="/">Go back to the homepage</Link>
      {markdownObj.map(obj => {
        if (obj.type === "page-title") {
          return <PageHeading title={obj.title} content={obj.content} />
        }
        if (obj.type === "section-title") {
          return <SectionTitle title={obj.title} content={obj.content} />
        }
        if (obj.type === "paragraph") {
          return <p>{obj.content}</p>
        }
        if (obj.type === "image-with-copy") {
          return (
            <ImageWithCopy
              imageAlign={obj.imageAlign}
              title={obj.title}
              content={obj.content}
              img={obj.img}
            />
          )
        }
        if (obj.type === "image-block") {
          return <Image src={obj.img} />
        }
        return null
      })}
      <p>The collection that makes the above page...</p>
      <pre>
        <code>{JSON.stringify(markdownObj, null, 1)}</code>
      </pre>
    </Base>
  )
}

export default ComponentRenderTest
