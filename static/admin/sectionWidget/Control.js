import PropTypes from "prop-types"
import React from "react"
import { Map, setIn, has, updateIn } from "immutable"

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = { sections: [] }
  }

  render() {
    const { forID, value = Map(), onChange, classNameWrapper } = this.props
    const { sections } = this.state
    const numberSections = Map.isMap(value) && value.size

    return (
      <div id={forID}>
        <button
          onClick={() =>
            this.setState(prevState => ({
              sections: prevState.sections.concat(
                `section-${prevState.sections.length + 1}`
              ),
            }))
          }
        >
          Add Section
        </button>
        {sections.map(sectionId => (
          <Section
            sectionId={sectionId}
            classNameWrapper={classNameWrapper}
            value={value}
            onChange={onChange}
          />
        ))}
      </div>
    )
  }
}

class Section extends React.Component {
  render() {
    const { value, onChange, classNameWrapper, sectionId } = this.props

    const getValue = fieldName => {
      if (Map.isMap(value)) {
        if (value.get(sectionId)) {
          return value.get(sectionId).get(fieldName)
        }
      }

      return ""
    }

    const titleValue = getValue("title")
    const introductionValue = getValue("introduction")

    return (
      <div>
        <div>{sectionId}</div>
        <label>
          Title:
          <input
            className={classNameWrapper}
            type="text"
            value={titleValue}
            onChange={e => {
              if (has(value, sectionId)) {
                const nv = updateIn(
                  value,
                  [sectionId, "title"],
                  () => e.target.value
                )
                onChange(nv)
              } else {
                const nv = setIn(
                  value,
                  [sectionId],
                  Map({ title: e.target.value })
                )

                onChange(nv)
              }
            }}
          />
        </label>
        <label>
          Introduction:s
          <input
            type="text"
            className={classNameWrapper}
            value={introductionValue}
            onChange={e => {
              if (has(value, sectionId)) {
                const nv = updateIn(
                  value,
                  [sectionId, "introduction"],
                  () => e.target.value
                )

                onChange(nv)
              } else {
                const nv = setIn(
                  value,
                  [sectionId],
                  Map({ introduction: e.target.value })
                )

                onChange(nv)
              }
            }}
          />
        </label>
      </div>
    )
  }
}
