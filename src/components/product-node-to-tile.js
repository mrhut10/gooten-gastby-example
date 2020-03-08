import React from "react";
import propTypes from "prop-types";

import Card from './card';

const ProductNodeToTile = ({ Name, Images, ShortDescription }) => (
  <Card heading={Name}>
      <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-600 line-clamp">
      {ShortDescription}
    </p>
    <br />
    <img className="mx-auto mt-auto" src={Images[0].Url} />
  </Card>
  );

ProductNodeToTile.propTypes = {
  Name: propTypes.string,
  Images: propTypes.arrayOf(
    propTypes.shape({
      ImageTypes: propTypes.arrayOf(propTypes.string),
      Url: propTypes.string
    })
  ),
  ShortDescription: propTypes.string
};

export default ProductNodeToTile;
