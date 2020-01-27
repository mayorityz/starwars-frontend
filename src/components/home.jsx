import React from "react";
import logo from "../starwars.png";
import Button from "../components/button";

const Landing = props => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Button />
    </div>
  );
};

export default Landing;
