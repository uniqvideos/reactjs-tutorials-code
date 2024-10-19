import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";

const ProductDetails = ({
  deepName = "SAMSUNG",
  deepPrice = 2000,
  deepDescription = "12GB RAM with 240GB",
}) => {
  let { user } = useContext(UserContext);

  // console.log( user );

  return (
    <section>
      <article>
        <h1> UserName : {user.uName} </h1>
        <h1> Email : {user.email} </h1>
      </article>
      <h3> {deepName} </h3>
      <h6> {deepPrice} </h6>
      <p> {deepDescription} </p>
    </section>
  );
};

export default ProductDetails;

// ProductDetails.defaultProps = {
//     deepName : "SAMSUNG",
//     deepPrice : 2000,
//     deepDescription : "12GB RAM with 240GB"
// }

ProductDetails.propTypes = {
  deepName: PropTypes.string.isRequired,
  deepPrice: PropTypes.number.isRequired,
  deepDescription: PropTypes.string.isRequired,
};
