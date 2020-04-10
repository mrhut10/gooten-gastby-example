import React from "react";
import PropTypes from "prop-types";

const QueryStringToCode = ({ queryString, title, children }) => (
  <div>
    <h3 className="text-2xl font-medium text-gray-800 sm:text-center">
      {title}
    </h3>
    <div className="max-w-md sm:text-center sm:mx-auto">{children}</div>
    <div className="px-4 py-5 mt-12 text-gray-800 bg-white shadow sm:rounded-lg">
      <pre className="font-mono text-sm text-left language-graphql">
        {queryString.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </pre>
    </div>
  </div>
);

QueryStringToCode.propTypes = {
  title: PropTypes.string,
  queryString: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default QueryStringToCode;