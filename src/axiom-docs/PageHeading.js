import React from "react"

import { Base, Heading, Strong } from "@brandwatch/axiom-components"

import "./axiom-docs.css"

export default function PageHeading({ title, content }) {
  return (
    <Base className="page-heading">
      <Heading textSize="display1">
        <Strong>{title}</Strong>
      </Heading>
      <Heading textSize="large">{content}</Heading>
    </Base>
  )
}
