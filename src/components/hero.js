import React from "react";

import Banner from "./banner";
import Card from "./card";

const Hero = () => {
  return (
    <article>
      <Banner />
      <div className="grid row-gap-5 col-gap-4 mt-12 sm:gap-6 md:grid-cols-2">
        <Card heading="What is Gooten?" dark>
          <p>
            <a
              href="www.gooten.com"
              className="font-medium text-teal-600 transition duration-150 ease-in-out transform hover:text-teal-500 focus:underline focus:outline-none"
            >
              Gooten
            </a>{" "}
            is a print on demand provider You can create products definitions
            within the product hub, and they will manage shipping to your
            customers
          </p>
        </Card>
        <Card heading="What does this plugin do?">
          <p>
            <a
              href="www.gooten.com"
              className="font-medium text-teal-600 transition duration-150 ease-in-out transform hover:text-teal-500 focus:underline focus:outline-none"
            >
              <span className="font-mono">gatsby-source-gooten</span>
            </a>{" "}
            aims to help you create an ecommerce store from the products
            you&apos;ve defined in the product hub.
            <p className="mt-3">
              <span className="font-medium text-gray-800">Early Stages!! </span>
              Development underway and not a full integration with there API yet
            </p>
          </p>
        </Card>
      </div>
      <p className="mt-16 sm:text-center">
        Contact me on{" "}
        <a
          className="font-medium text-teal-600 transition duration-150 ease-in-out transform hover:text-teal-500 focus:underline focus:outline-none"
          href="https://twitter.com/ahut10"
        >
          @ahut10
        </a>{" "}
        or via{" "}
        <a
          className="font-medium text-teal-600 transition duration-150 ease-in-out transform hover:text-teal-500 focus:underline focus:outline-none"
          href="https://github.com/mrhut10/gatsby-source-gooten"
        >
          GitHub
        </a>{" "}
        to contribute and for updates
      </p>
    </article>
  );
};

export default Hero;
