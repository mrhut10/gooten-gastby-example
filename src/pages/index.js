import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Products from "../components/products";
import QueryStringToCode from "../components/query-string-to-code";

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

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `gooten`, "ecommerce", "dropshipping"]}
        title="Home"
      />
      <Hero />
      <hr className="my-24" />
      <Products />
      <hr className="my-24" />
      <article>
        <QueryStringToCode title="Query" queryString={productQueryString}>
          <p>This is the GraphQL query used for this page</p>
          <p>
            Want to see full page source? Click {""}
            <a
              className="font-medium text-teal-600 transition duration-150 ease-in-out transform hover:text-teal-500 focus:underline focus:outline-none"
              href="https://github.com/mrhut10/gooten-gastby-example/blob/main/src/pages/index.js"
            >
              here
            </a>
          </p>
        </QueryStringToCode>
      </article>
    </Layout>
  );
}

export default IndexPage;
