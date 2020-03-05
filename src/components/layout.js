import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-blue-700">
        <nav className="flex flex-wrap justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-center text-white w-full sm:w-1/3">
            Plugin{"'"}s{" "}
            <a
              className="font-bold no-underline text-white"
              href="https://www.npmjs.com/package/gatsby-source-gooten"
            >
              npm
            </a>
            {" and "}
            <a className="font-bold no-underline text-white" href="">
              Github
            </a>
          </p>
          <p className="text-center text-white w-full sm:w-1/3">
            {"Site Source "}
            <a
              className="font-bold no-underline text-white"
              href="https://github.com/mrhut10/gatsby-source-gooten"
            >
              Github
            </a>
          </p>
          <p className="text-center text-white w-full sm:w-1/3">
            Creator:{" "}
            <a
              className="font-bold no-underline text-white"
              href="https://twitter.com/ahut10"
            >
              @ahut10
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
