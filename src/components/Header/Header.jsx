import React from "react";
import "./header.css";
import image from "./e-commerce-logo.png";

const Header = (props) => {
  return (
    <div className="Header">
      <h1> {props.title} </h1>
      <h2>Bienvenido</h2>
      <a href="/">
        <img src={image} alt="logo_ecommerce.png" />
      </a>
    </div>
  );
};

export default Header;
