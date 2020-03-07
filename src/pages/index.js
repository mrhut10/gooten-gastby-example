import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery, Link } from "gatsby";
import QueryStringToCode from "../components/QueryStringToCode";
import ProductNodeToTile from "../components/ProductNodeToTile";

const productQueryString = `
{
  allGootenProduct(limit: 6) {
    nodes {
      Name
      Images {
        ImageTypes
        Url
      }
      ShortDescription
    }
  }
}`;
const productQuery = graphql`
  {
    totalProducts : allGootenProduct {
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
`;

function IndexPage() {
  const {
    allGootenProduct: { nodes: ProductNodes },
    totalProducts
  } = useStaticQuery(productQuery);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `gooten`, "ecommerce", "dropshipping"]}
        title="Home"
      />

      <section className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3 align-middle transform rotate-2 md:rotate-5">
          Integrate Gooten Api into Your Gatsby JS Page
        </h2>
        <div className="w-full mx-auto p-4">
          <div className="flex flex-wrap p-4">
            <div className="w-full my-2 p-4 md:w-1/2 background bg-gray-900 text-white transform rotate-2">
              <a className="text-teal-500" href="https://www.gooten.com/">www.gooten.com</a> is a print on demand provider <br />
              You can create products definitions within the product hub, and they will manage shipping to your customers
            </div>
            <div className="w-full my-2 p-4 md:w-1/2 background bg-gray-200 transform rotate-2">
              <p>
                <a className="text-teal-500" href="">gatsby-source-gooten</a>{' '}
                aims to help you create a ecommerce store from the products {"you've "}
                defined in the product hub<br />
                <span className="text-bold">Early Stages!! </span>Development underway and not a full integration with there API yet <br />
              </p>
            </div>
          </div>
          <p className="mb-4">
            Contact me on{" "}
              <a className="text-teal-500" href="https://twitter.com/ahut10">@ahut10</a>{' '}
              or via <a className="text-teal-500" href="https://github.com/mrhut10/gatsby-source-gooten">github</a> to contribute and for updates
          </p>
          <p className="leading-loose">
          </p>
          <h4 className="font-bold">Example of first 6 products returned from the Gooten API</h4>
          <div className="flex flex-wrap shadow-lg container w-full p-4 m-md bg-gray-200">
            <p className="text-right w-full">click <Link className="text-teal-500" to="/allproducts">here</Link> to see all {totalProducts.totalCount} products</p>
            {ProductNodes.map(ProductNodeToTile)}
            <p className="text-right w-full">click <Link className="text-teal-500" to="/allproducts">here</Link> to see all {totalProducts.totalCount} products</p>
          </div>
          <br/>
          <QueryStringToCode
            className="m-md p-md font-small"
            title="Query"
            queryString={productQueryString}
          >
            <p>
              This is the GraphQL query used for this page <br />
              want to see full page source? click {''}
              <a className="text-teal-500" href="https://github.com/mrhut10/gooten-gastby-example/blob/main/src/pages/index.js">here</a>
            </p>
          </QueryStringToCode>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
