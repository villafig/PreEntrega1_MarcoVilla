import React from "react";
import "./navBar.css";
import { Carwidget } from "./Carwidget";

export const NavBar = ({ greetings }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/category/women's clothing">Mujer</a>
        </li>
        <li>
          <a href="/category/men's clothing">Hombre</a>
        </li>
        <li>
          <a href="/users">Subir Info</a>
        </li>
      </ul>
    </nav>
  );
};
