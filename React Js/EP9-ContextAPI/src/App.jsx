import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { createContext, useState } from "react";

export let UserContext = createContext();

function App() {
  let [user, setUser] = useState({
    uName: "Kesavan",
    age: 35,
    email: "abc@gmail.com",
  });


  // console.log( UserContext );

  return (
    <UserContext.Provider  value={ {user} } >
      <div className="app">
        <Header  />
        <Content user = {user} />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
