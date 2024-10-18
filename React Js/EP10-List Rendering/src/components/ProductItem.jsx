import React from 'react'
import ProductDetails from './ProductDetails';

const ProductItem = ( {product, user} ) => {

    // console.log( props );  
    // let {product} = props
    // console.log( product );
    console.log( user );
    

  return (
    <div>
        <h1> Displaying Product Items - {user.age} </h1>
        <ProductDetails
            deepName = {product.name} 
            deepPrice = {product.price}
            deepDescription = { product.description }
         />
    </div>
  )
}

export default ProductItem