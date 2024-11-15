import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;

//abc@gmail.com
let schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your Fullname"),
  email: Yup.string()
    .email()
    .required("Email is Required")
    .matches(/^[a-z0-9]+@[a-z]{3,6}\.[a-z]{2,4}$/, "Enter a valid Email"),
  age: Yup.number()
    .integer()
    .positive()
    .required("Enter Your Age")
    .min(18, "Enter Age between 18 to 30")
    .max(30, "Enter Age between 18 to 30"),
  password: Yup.string().required("Password is Required"),
  cPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Password Must Watch"),
});

const SignUp = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };
  renderCount++;

  let [input, setInput] = useState("");

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  let handleData = (data) => {
    console.log(data);
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography textAlign="center" variant="h6">
        {" "}
        Create Account - {renderCount}{" "}
      </Typography>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Age"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        {...register("cPassword")}
        error={!!errors.cPassword}
        helperText={errors.cPassword?.message}
      />
      <Button variant="contained" type="submit">
        {" "}
        SignUp{" "}
      </Button>
    </Paper>
  );
};

export default SignUp;
