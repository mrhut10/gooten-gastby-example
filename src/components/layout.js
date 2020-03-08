import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700 bg-gray-100">
      <Header />

      <main className="flex flex-col flex-1 w-full max-w-4xl px-4 py-8 mx-auto mt-12 md:justify-center md:p-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
