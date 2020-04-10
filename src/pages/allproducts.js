import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import ProductNodeToTile from "../components/product-node-to-tile";

const productQuery = graphql`
  {
    allGootenProduct {
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

function allProductsPage() {
  const {
    allGootenProduct: { nodes: ProductNodes }
  } = useStaticQuery(productQuery);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `gooten`, "ecommerce", "dropshipping"]}
        title="All Products"
      />
      <div className="grid row-gap-5 col-gap-4 mt-4 -mx-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
        {ProductNodes.map(ProductNodeToTile)}
      </div>
    </Layout>
  );
}

export default allProductsPage;
