import React, { useEffect, useState } from "react";
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let [updateProduct, setUpdateProduct] = useState(null);

  let {id} = useParams()

  let naviagate = useNavigate()

  useEffect( ()=>{
      axios.get( `http://localhost:5000/products/${id}` )
      .then(  res => setUpdateProduct( res.data ))  
  }, [] )


  

  let handleChange = (e) => {
    let { value, name } = e.target;

    let fieldName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

  let handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("Saved Successfully");
      naviagate("/products")
    });
  };

  if(updateProduct!==null){
      return (
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" textAlign="center" style={{ margin: "10x 0" }}>
            {" "}
            Update Product{" "}
          </Typography>
          <Grid2
            component="form"
            style={{ display: "grid", gap: "20px" }}
            onSubmit={handleUpdate}
          >
            <TextField
              value={updateProduct.title}
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              value={updateProduct.category}
              name="category"
              label="Category"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <TextField
                  value={updateProduct.rating.rate}
                  name="rating.rate"
                  type="number"
                  label="Rate"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 size={6}>
                <TextField
                  value={updateProduct.rating.count}
                  name="rating.count"
                  type="number"
                  label="Count"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
            </Grid2>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Save
            </Button>
          </Grid2>
        </Paper>
      );
  }
  else{
    <div> Loading.. </div>
  }
};

export default UpdateProduct;
