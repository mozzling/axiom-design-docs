import PropTypes from "prop-types"
import React from "react"
import { Map, setIn, has, update, updateIn } from "immutable"

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
    const {
      forID,
      value = Map(),
      onChange,
      classNameWrapper,
      ...rest
    } = this.props
    const { sections } = this.state
    const numberSections = Map.isMap(value) && value.size
    console.log("numberSections", numberSections)
    // console.log("Map.isMap(value)", Map.isMap(value))
    console.log("value", value.toObject())
    // console.log("value", typeof value)

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

function getSectionKeys(value) {
  debugger
  return Object.fromEntries(
    Object.entries(value).filter(([key]) => {
      return key.startsWith("section-")
    })
  )
}

class Section extends React.Component {
  render() {
    const { value, onChange, classNameWrapper, sectionId, field } = this.props
    // console.log("introduction", value.get("section-1").get("introduction"))
    // console.log("field", this.props.value && Map.isMap(this.props.value))
    // console.log("getSectionKeys", getSectionKeys(value))

    const getValue = fieldName => {
      // debugger
      if (Map.isMap(value)) {
        if (value.get(sectionId)) {
          return value.get(sectionId).get(fieldName)
        }
      }

      return ""
    }

    const titleValue = getValue("title")
    const introductionValue = getValue("introduction")
    // const sectionValue = value.set(sectionId)
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
                console.log("has sectionId", sectionId)
                const nv = updateIn(
                  value,
                  [sectionId, 'title'],
                  val => e.target.value
                )
                console.log('new value', nv.toObject)
                onChange(nv)
              } else {
                const nv = setIn(
                  value,
                  [sectionId],
                  Map({ title: e.target.value })
                )

                console.log("new value", nv.toObject())
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
                console.log("has sectionId", sectionId)
                const nv = updateIn(
                  value,
                  [sectionId, 'introduction'],
                  val => e.target.value
                )
                console.log('new value', nv.toObject)
                onChange(nv)
              } else {
                const nv = setIn(
                  value,
                  [sectionId],
                  Map({ introduction: e.target.value })
                )

                console.log("new value", nv.toObject())
                onChange(nv)
              }
            }}
          />
        </label>
      </div>
    )
  }
}

//onChange(Map(value).get(sectionId).set('introduction', e.target.value))
