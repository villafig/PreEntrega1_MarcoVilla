import React from "react";
import { Carwidget } from "./Carwidget";

export const NavBar = ({ greetings }) => {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/category/women's clothing">Mujer</a>
        </li>
        <li>
          <a href="/category/men's clothing">Hombre</a>
        </li>
      </ul>
    </nav>
  );
};
