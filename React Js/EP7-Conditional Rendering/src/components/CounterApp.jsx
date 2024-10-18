import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: blue;
  color: white;
`;

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [ data, setData  ] = useState( "Error" )

  let message;
  let remainingClick = 10 - count;

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function resetCount(){
    setCount( (prevCount)=>{ return prevCount = 0 }  )
  }

  if (count < 10) {
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p> Still {remainingClick} more times to reach a 10% discount </p>
      </div>
    );
  } else if (count === 10) {
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p> You Unlocked a 10% discount </p>
      </div>
    );
  }
  else if( count < 20 ){
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p> You're on the way to get more rewards! Keep click for 20% discount </p>
      </div>
    );
  }
  else{
    message = (
      <div>
        <h3> You Clicked {count} times </h3>
        <p> You've reach a top rewards! You are a Click Master </p>
      </div>
    );
  }

  let displayComp = () =>{
    switch(data){
      case "Loading" : return <LoadingComp/>;
      break;
      case "Success" : return <SuccessComp/>;
      break;
      case "Error" : return <ErrorComp/>;
      break;

    }
  }

  return (
    <div>
      <h1> Click to Unlock Rewards 🎉 </h1>
      <Button onClick={handleIncrease}> Click Me! </Button>
      {message}
      {
        count >= 30 && <Button onClick={resetCount}> Reset Click </Button>
      }

      { displayComp()  }

      {/* {count >= 10 ? (
        <p> You unlocked a 10% Discount </p>
      ) : (
        <p> Click 10 times to unlock Rewards </p>
      )}

      {
        count >= 20 && <p> You're a Click Master  </p>
      } */}
    </div>
  );
};

export default CounterApp;


function LoadingComp(){
   return (
      <h6> Loading.... </h6>
   )
}
function SuccessComp(){
   return (
      <h6> Sucesss❤️ </h6>
   )
}
function ErrorComp(){
   return (
      <h6> Error😭 </h6>
   )
}