import { useContext } from "react";
import { UserContext } from "../App";

function Header(props) {
  // console.log( props );

  let {
    user: { uName },
  } = useContext(UserContext);

  return (
    <header>
      <h1> Todo List </h1>
      <p
        style={{
          backgroundColor: "Brown",
          width: "30px",
          height: "30px",
          textAlign: "center",
          borderRadius : "50%"
        }}
      >
        {" "}
        {uName.slice(0, 1)}{" "}
      </p>
    </header>
  );
}

export default Header;
