import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import QueryStringToCode from "../components/QueryStringToCode";
import ProductNodeToTile from "../components/ProductNodeToTile";

const productQueryString = `
{
  allGootenProduct(limit: 12) {
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
    allGootenProduct(limit: 12) {
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
    allGootenProduct: { nodes: ProductNodes }
  } = useStaticQuery(productQuery);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `gooten`, "ecommerce", "dropshipping"]}
        title="Home"
      />

      <section className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3 align-middle">
          Integrate Gooten Api into Your Gatsby JS Page
        </h2>
        <div className="w-full mx-auto">
          <p className="leading-loose">
            Example of first 12 products returned from the Gooten API
          </p>
          <div className="flex flex-wrap shadow-lg container w-full p-md m-md">
            {ProductNodes.map(ProductNodeToTile)}
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
