import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {

  return (
    <div>
      Products
      <Link to="list"> List </Link>
      <Link to="details"> Details </Link>
      <Outlet/>
    </div>
  )
}

export default Products