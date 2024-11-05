import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {LifeLine} from 'react-loading-indicators'
import useFetch from "./custom-hook/useFetch";

const ProductList = () => {
  // let [products, setProducts] = useState([]);
  // let [error, setError] = useState("");
  // let [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       if(response.ok){
  //         return response.json();
  //       }
  //       else{
  //         throw new Error( "Search Proper Data" )
  //       }    
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  let {products, error, isLoading} =   useFetch( "https://fakestoreapi.com/products" )
  

  if (isLoading) {
    return (
      <div >
        <center>
          <LifeLine color="#32cd32" size="large" text="Loading..." textColor="red" />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <h1> Product List </h1>
        {products.length !== 0 && (
          <section className="products">
            {products.map((product) => (
              <Card
                key={product.id}
                style={{ width: "18rem" }}
                className="product"
              >
                <center>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "9rem", height: "12rem" }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ overflow: "scroll", height: "200px" }}>
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary">Add to Card</Button>
                </Card.Footer>
              </Card>
            ))}
          </section>
        )}
        {error && <p> {error} </p>}
      </div>
    );
  }
};

export default ProductList;
