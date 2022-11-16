import React, { useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  function handleClick() {
    api.getCompaniesNames().then((data) => {
      console.log(data.data.data);

      console.log(typeof data.data.data);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
