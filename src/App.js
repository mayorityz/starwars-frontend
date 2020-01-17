import React from "react";
import "./App.css";
import logo from "./starwars.png";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Button />
    </div>
  );
}

export default App;
