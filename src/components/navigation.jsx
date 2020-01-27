import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="simple_nav">
      <ul>
        <li key={1}>
          <Link to="/login">Login</Link>
        </li>
        <li key={2}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
