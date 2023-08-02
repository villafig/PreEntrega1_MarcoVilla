import React from "react";
//import carrito_de_compras from "../../assets/carrito_de_compras.webp";
import carrito_de_compras from "./carrito_de_compras.png";

export const Carwidget = () => {
  return (
    <div>
      <img
        src={carrito_de_compras}
        alt="Carrito de compras"
        style={{ width: "150px", height: "150px" }}
      />
    </div>
  );
};
