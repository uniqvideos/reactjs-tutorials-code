import React, { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = ( {user} ) => {

  let [product, setproduct] = useState({
    name: "iPhone7",
    price: 10000,
    description: "8GB RAM with 128GB",
  });

  return (
    <div>
      <h1> Welcome to My Shop </h1>
      <ProductItem product = { product } user = {user}/>
    </div>
  );
};

export default Shop;
