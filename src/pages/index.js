import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from 'gatsby'
import QueryStringToCode from '../components/QueryStringToCode'
import ProductNodeToTile from "../components/ProductNodeToTile";
// import ProductNodeToTile from '../components/ProductNodeToTile'

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
}`
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
`

function IndexPage() {
  const { allGootenProduct : { nodes: ProductNodes } } = useStaticQuery(productQuery);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `gooten`, 'ecommerce', 'dropshipping']}
        title="Home"
      />

      <section className="text-center">
        
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Integrate Gooten Api into Your Gatsby JS Page
        </h2>
        <p className="leading-loose">
          Below is an example of first 9 products returned from API
        </p>
        <QueryStringToCode className="m-md p-md" title="GraphQl Query" queryString={productQueryString}/>
        <div className="flex flex-wrap shadow-lg container w-full p-md m-md">
          {ProductNodes.map(ProductNodeToTile)}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
