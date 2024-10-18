import React from "react";
import Shop from "./Shop";

const Content = ( {user} ) => { 

  return (
    <main>
      <Shop user = {user} />
    </main>
  );
};

export default Content;