import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

export const NavBar = ({ greetings }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/users">Registro</Link>
        </li>
        <li>
          <Link to="/">Catálogo General</Link>
        </li>
        <li>
          <Link to="/chamarras">Chamarras</Link>{" "}
        </li>
        <li>
          <Link to="/sudaderas">Sudaderas</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
