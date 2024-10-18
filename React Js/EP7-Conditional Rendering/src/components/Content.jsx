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

  return (
    <main>
      <CounterApp />
    </main>
  );
};

export default Content;