import React from "react"

import {
  Base,
  Heading,
  Grid,
  GridCell,
  Image,
  Strong,
  Paragraph,
} from "@brandwatch/axiom-components"

import "./axiom-docs.css"

export default function ImageWithCopy({
  imageAlign = "left",
  title,
  content,
  img,
}) {
  function ImageBlock() {
    return (
      <Base className="image-block">
        <Image src={img}></Image>
      </Base>
    )
  }

  function ContentBlock() {
    const formattedContent = content?.split("\n") || [];
    return (
      <Base className="content-block">
        <Heading textSize="headtitle">
          <Strong>{title}</Strong>
        </Heading>
        {formattedContent.map(content => (
          <Paragraph>{content}</Paragraph>
        ))}
      </Base>
    )
  }

  return (
    <Base className="image-with-copy-container">
      <Grid>
        <GridCell>
          {imageAlign === "right" ? <ContentBlock /> : <ImageBlock />}
        </GridCell>
        <GridCell>
          {imageAlign === "right" ? <ImageBlock /> : <ContentBlock />}
        </GridCell>
      </Grid>
    </Base>
  )
}
