import React from "react"
import propTypes from 'prop-types'


const maxCharInDescription = 50

const ProductNodeToTile = ({Name, Images, ShortDescription}) => <div className="w-full md:w-1/2 lg:w-1/3 shadow-lg text-center">
  <h4 className="m-4 font-bold">{Name}</h4>
  <img className="mx-auto" src={Images[0].Url}/>
  <p>
    {
      ShortDescription.substring(
        0,
        (ShortDescription.length >= maxCharInDescription ? maxCharInDescription : ShortDescription.length) - 1
      )
    }
    {ShortDescription.length >= maxCharInDescription ? ' ... ' : ''}
  </p>
</div>


ProductNodeToTile.propTypes = {
  Name: propTypes.string,
  Images: propTypes.arrayOf(
    propTypes.shape({
      ImageTypes: propTypes.arrayOf(propTypes.string),
      Url: propTypes.string,
    })
  ),
  ShortDescription: propTypes.string
}

export default ProductNodeToTile