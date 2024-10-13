import "./App.css";
import {Fragment} from 'react'

// function user(){
//   return "Kesavan",456,true
// }

// console.log( user() );

let author = "Kesavan"

let isLogged = false;

function App(props) {
  console.log( props );
  
  return (
    <Fragment>
      <h1 style={ { backgroundColor: "red", color:"white" } } > React JSX </h1>
      <label htmlFor="user">UserName:</label>
      <input id="user" type="text"/>
      <p> { author } </p>
      {
        isLogged && <p> Welcome to Our Website </p>
      }
      {/* <button onClick={newFun} ></button> */}
    </Fragment>,
    <>
      <h1> Next Episode - Component </h1>
    </>
  );
}

export default App;
