import React from "react"
import { Link } from "gatsby"

import { Base, Heading, TextInput, Strong } from "@brandwatch/axiom-components"

import "./sidenav.css"

const SideNav = ({ documents }) => {
  return (
    <div className="sidebar_">
      <Link style={{ "text-decoration": "none", color: "inherit" }} to="/">
        <Heading style={{ margin: "0 0 20px 15px" }} textSize="headline">
          <Strong>axiom </Strong> Components
        </Heading>
      </Link>
      <TextInput placeholder="search components" />
      <ul>
        {documents.map(doc => {
          return (
            <li key={doc}>
              <Base className="sidebar__link">
                <Link
                  activeClassName="sidebar__link active"
                  key={doc}
                  className="sidebar__link"
                  to={`/${doc.toLowerCase()}`}
                >
                  {doc}
                </Link>
              </Base>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideNav
