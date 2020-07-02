import React from "react"

import {
  Base,
  Heading,
  Grid,
  GridCell,
  Image,
  Strong,
} from "@brandwatch/axiom-components"

import "./axiom-docs.css"

export default function ImageWithCopy({ imageAlign ="left", title, content, img }) {
  function ImageBlock() {
    return (
      <Base className="image-right__img">
        <Image src={img}></Image>
      </Base>
    )
  }

  function ContentBlock() {
    return (
      <Base className="image-right-content">
        <Heading textSize="headtitle">
          <Strong>{title}</Strong>
        </Heading>
        <Heading>{content}</Heading>
      </Base>
    )
  }

  return (
    <Base className="image-right__container">
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
