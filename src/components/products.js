import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import ProductNodeToTile from "../components/product-node-to-tile";

const Products = () => {
  const {
    allGootenProduct: { nodes: ProductNodes },
    totalProducts
  } = useStaticQuery(graphql`
    {
      totalProducts: allGootenProduct {
        totalCount
      }
      allGootenProduct(limit: 6) {
        totalCount
        nodes {
          Name
          Images {
            ImageTypes
            Url
          }
          ShortDescription
        }
      }
    }
  `);
  return (
    <article>
      <h3 className="text-2xl font-medium text-gray-800 sm:text-center">
        Example of first 6 products returned from the Gooten API
      </h3>
      <div className="container w-full mt-12 sm:rounded-lg">
        <p>
          Click{" "}
          <Link
            className="font-medium text-teal-600 transition duration-150 ease-in-out transform hover:text-teal-500 focus:underline focus:outline-none"
            to="/allproducts"
          >
            here
          </Link>{" "}
          to see all {totalProducts.totalCount} products
        </p>
        <div className="grid row-gap-5 col-gap-4 mt-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {ProductNodes.map(ProductNodeToTile)}
        </div>
        <p className="mt-4 ">
          click{" "}
          <Link
            className="font-medium text-teal-600 transition duration-150 ease-in-out transform hover:text-teal-500 focus:underline focus:outline-none"
            to="/allproducts"
          >
            here
          </Link>{" "}
          to see all {totalProducts.totalCount} products
        </p>
      </div>
    </article>
  );
};

export default Products;
