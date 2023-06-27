import React from "react";
import "./header.css";
import image from "./e-commerce-logo.jpeg";

const Header = () => {
  return (
    <div className="Header">
      <h1> Bienvenido </h1>
      <a href="/">
        <img src={image} alt="logo.png" />
      </a>
    </div>
  );
};

export default Header;
