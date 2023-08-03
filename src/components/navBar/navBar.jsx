import React from "react";
import "./navBar.css";
import { Carwidget } from "./Carwidget";

export const NavBar = ({ greetings }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/users">Registro</a>
        </li>
        <li>
          <a href="/">Catálogo General</a>
        </li>
        <li>
          <a href="/category/women's clothing">Chamarras</a>
        </li>
        <li>
          <a href="/category/men's clothing">Sudaderas</a>
        </li>
      </ul>
    </nav>
  );
};
