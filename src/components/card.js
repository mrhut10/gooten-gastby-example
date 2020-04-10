import PropTypes from "prop-types";
import React from "react";

const Card = ({ heading, children, dark }) => {
  return (
    <div
      className={`relative transition duration-150 transform shadow sm:rounded-lg hover:-rotate-2 hover:z-10 ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="px-4 py-5 sm:p-6">
        <h3
          className={`text-lg font-medium leading-6 ${
            dark ? "text-teal-500" : "text-teal-600"
          }`}
        >
          {heading}
        </h3>
        <div
          className={`max-w-xl mt-2 text-sm leading-5 ${
            dark ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  dark: PropTypes.bool
};

export default Card;
