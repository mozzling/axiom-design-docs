import React from "react"

import { Base, Heading, Strong } from "@brandwatch/axiom-components"

import "./axiom-docs.css"

export default function SectionTitle({ title, content }) {
  return (
    <Base>
      <Heading textSize="headline">
        <Strong>{title}</Strong>
      </Heading>
      <Heading textSize="large">{content}</Heading>
    </Base>
  )
}
