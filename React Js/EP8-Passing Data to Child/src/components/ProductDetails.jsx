import React from 'react'
import PropTypes from 'prop-types'

const ProductDetails = ({ deepName = "SAMSUNG", deepPrice = 2000, deepDescription = "12GB RAM with 240GB" }) => {
    
  return (
    <section>
        <h3> {deepName} </h3>
        <h6> {deepPrice} </h6>
        <p> {deepDescription} </p>
    </section>
  )
}

export default ProductDetails

// ProductDetails.defaultProps = {
//     deepName : "SAMSUNG",
//     deepPrice : 2000,
//     deepDescription : "12GB RAM with 240GB"
// }

ProductDetails.propTypes = {
    deepName : PropTypes.string.isRequired,
    deepPrice : PropTypes.number.isRequired,
    deepDescription : PropTypes.string.isRequired
}