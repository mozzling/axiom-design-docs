import PropTypes from "prop-types";
import React from "react";

export default function Preview({ value = {} }) {
  // console.log("Preview value", value);
  return (
    <div>
      {Object.entries(value).map(([key, value]) => {
        return (
          <div>
            section: {key} title: {value.title}, introduction:{" "}
            {value.introduction}
          </div>
        );
      })}
    </div>
  );
}

Preview.propTypes = {
  value: PropTypes.node,
};
