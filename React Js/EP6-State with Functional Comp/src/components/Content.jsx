import React from "react";
import styled from 'styled-components'
import CounterApp from "./CounterApp";

let Button = styled.button
` background-color : blue;
  color : white;
  width : 100px;
  height : 50px;
`

let NewButton = styled(Button)
`
  background-color : red;
  box-shadow : 10px 10px 10px black;
`

const Content = () => { 

  let headingStyle = {
    backgroundColor : "red",
    color : "white",
    boxShadow : "10px 10px 5px black"
  }

  let user = "Kesavan"

  function printSomething(e){
    // console.log( e.target.innerText );
    // console.log( "Hello" );
    user = "Murugesan"
    console.log( user );  
  }
  function printSomething1(event){
    // console.log( event.target.innerText );
    // console.log( "Hello World " );
    user = "Rangaswamy"
    console.log( user );
  }
 
  return (
    <main>
      <p style={ headingStyle }>Main Content - {user}</p>
      <Button onClick={printSomething} > Click Me! </Button>
      <NewButton onClick={ (e)=>{  printSomething1(e) } }> Duplicate </NewButton> 
      <CounterApp />
    </main>
  );
};

export default Content;