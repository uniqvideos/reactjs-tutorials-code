import React, { useState } from "react";
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  /* 
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
    */

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleChange = (e) => {
        let {value, name} = e.target

        let fieldName = name.split("rating.")[1]       

        if( name.includes( "rating." ) ){
            setNewProduct( {
                ...newProduct,
                rating : {
                    ...newProduct.rating,
                    [fieldName] : value
                }
            } )
        }
        else{
            setNewProduct( {
                ...newProduct,
                [name] : value
            } )                       
        }
  }

  let handleAdd = (e) => {
    e.preventDefault()

    fetch( "http://localhost:5000/products", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify( newProduct )
    } )
    .then( ()=>{
      alert( "Data Added Successfully" )
      setNewProduct( {
        title: "",
        price: 500,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 0,
          count: 0,
        },
      } )
    } )
  } 
  
  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" textAlign="center" style={{ margin: "10x 0" }}>
        {" "}
        Create New Product{" "}
      </Typography>
      <Grid2 component="form" style={{ display: "grid", gap: "20px" }} onSubmit={handleAdd}>
        <TextField
          value={newProduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={newProduct.category}
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              value={newProduct.rating.rate}
              name="rating.rate"
              type="number"
              label="Rate"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              value={newProduct.rating.count}
              name="rating.count"
              type="number"
              label="Count"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>
        <Button type="submit" variant="contained" fullWidth >
          Add
        </Button>
      </Grid2>
    </Paper>
  );
};

export default NewProduct;
