import React from "react";
import PropTypes from "prop-types";

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
  Name: PropTypes.string,
  Images: PropTypes.arrayOf(
    PropTypes.shape({
      ImageTypes: PropTypes.arrayOf(PropTypes.string),
      Url: PropTypes.string
    })
  ),
  ShortDescription: PropTypes.string
};

export default ProductNodeToTile;