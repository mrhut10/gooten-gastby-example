import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import gootenIcon from "../images/gooten icon.png";
import GatsbyIcon from "../images/gatsbyIcon.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="sticky top-0 z-10 bg-gray-100 shadow sm:shadow-none sm:relative">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link
          className="flex flex-wrap items-center font-medium text-gray-800 transition duration-150 ease-in-out transform sm:flex-nowrap hover:text-gray-600 focus:underline focus:outline-none"
          to="/"
        >
          <img
            className="h-8 mr-2 overflow-hidden rounded-full"
            src={gootenIcon}
            alt="gooten icon"
          />
          <img className="h-8" src={GatsbyIcon} />
          <span className="ml-3 text-xl font-medium tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-gray-500 border border-gray-400 rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              className="block mt-4 font-medium text-gray-800 transition duration-150 ease-in-out transform hover:text-gray-600 focus:underline focus:outline-none md:inline-block md:mt-0 md:ml-6"
              // className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
