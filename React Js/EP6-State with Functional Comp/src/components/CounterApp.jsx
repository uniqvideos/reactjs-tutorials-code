import React, { useState } from "react";

const CounterApp = () => {
  //    let count = 0

  let arr1 = [1, () => {}];

  let [a, b] = arr1;

  const [count, setCount] = useState(0);

  function returnState(){
    console.log( 100 );
    return 100
  }

  let [sample, setSample] = useState( ()=>{ return returnState() } )

  //    console.log( useState(0) );

  function handleIncrease() {
    setCount((prevCount) => prevCount+1 );
    setCount((prevCount) => prevCount+1 );
    setCount((prevCount) => prevCount+1 );
    // count +=1
    // console.log( count );
  }
  function handleDecrease() {
    setCount( (prevCount)=>{ return prevCount-1 } );
    setCount( (prevCount)=>{ return prevCount-1 } );
    setCount( (prevCount)=>{ return prevCount-1 } );
    // count -=1
    // console.log( count );
  }

  return (
    <div>
      <h1> Counter Application - {count} - {sample} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrase</button>
    </div>
  );
};

export default CounterApp;
