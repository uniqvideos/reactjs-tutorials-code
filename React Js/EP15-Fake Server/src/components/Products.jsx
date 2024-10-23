import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Products = () => {

  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(0)

  // useEffect( ()=>{
  //     console.log( "This Effect will run after every render" );   
  // })

  // useEffect( ()=>{
  //     console.log( "This Effect will run only on intial render" );   
  // }, [])

  useEffect( ()=>{
      console.log( "This Effect will run only dependency change" );
      
      return ()=>{
        
      }
  }, [count])

  useEffect( ()=>{
      console.log( "This Effect will run only dependency change" + count1 );   
  }, [count1])


  console.log( "Intial Render" ); 

  return (
    <div>
      <h1> Products - {count} - {count1} </h1>
      <Button variant='primary' onClick={ ()=>setCount( count+1 ) } > Increase </Button>
      <Button variant='primary' onClick={ ()=>setCount1( count1+1 ) } > Increase1 </Button>
      <Link to="list"> List </Link>
      <Link to="details"> Details </Link>
      <Outlet/>
    </div>
  )
}

export default Products