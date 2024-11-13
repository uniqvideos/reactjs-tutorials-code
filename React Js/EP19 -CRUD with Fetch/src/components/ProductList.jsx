import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine } from "react-loading-indicators";
import useFetch from "./custom-hook/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlineFolderDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ProductList = () => {
  let navigate = useNavigate();

  let { products, error, isLoading, setProducts } = useFetch(
    "http://localhost:5000/products"
  );

  let handleDelete = (id) => {
    console.log(id);

    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });

      let newProductList = products.filter((product) => product.id !== id);

      setProducts(newProductList);
    });
  };

  if (isLoading) {
    return (
      <div>
        <center>
          <LifeLine
            color="#32cd32"
            size="large"
            text="Loading..."
            textColor="red"
          />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <article>
          <span> To Create New Product </span>
          <Button onClick={ ()=>navigate("/newProduct") } > CLick me! </Button>
        </article>
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
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button variant="primary">
                    <MdAddShoppingCart />
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      navigate(`/update/${product.id}`);
                    }}
                  >
                    <FaEdit />{" "}
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    {" "}
                    <MdOutlineFolderDelete />{" "}
                  </Button>
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
