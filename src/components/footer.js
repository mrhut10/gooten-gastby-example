import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 text-gray-400 bg-gray-900">
      <nav className="max-w-4xl p-4 mx-auto text-sm sm:flex sm:justify-between md:p-8">
        <p className="mt-3 text-center sm:mt-0 first:mt-0">
          Plugin{"'"}s{" "}
          <a
            className="font-medium text-gray-300 transition duration-150 ease-in-out transform hover:text-white focus:underline focus:outline-none"
            href="https://www.npmjs.com/package/gatsby-source-gooten"
          >
            npm
          </a>
          {" and "}
          <a
            className="font-medium text-gray-300 transition duration-150 ease-in-out transform hover:text-white focus:underline focus:outline-none"
            href="https://github.com/mrhut10/gatsby-source-gooten"
          >
            GitHub
          </a>
        </p>
        <p className="mt-3 text-center sm:mt-0 first:mt-0">
          {"Site source "}
          <a
            className="font-medium text-gray-300 transition duration-150 ease-in-out transform hover:text-white focus:underline focus:outline-none"
            href="https://github.com/mrhut10/gooten-gastby-example"
          >
            GitHub
          </a>
        </p>
        <p className="mt-3 text-center sm:mt-0 first:mt-0">
          Creator:{" "}
          <a
            className="font-medium text-gray-300 transition duration-150 ease-in-out transform hover:text-white focus:underline focus:outline-none"
            href="https://twitter.com/ahut10"
          >
            @ahut10
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
