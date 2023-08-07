import React from "react";
import carrito_de_compras from "./carrito_de_compras.png";

const Carwidget = ({ numProductos, totalPrecio }) => {
  return (
    <div>
      <img
        src={carrito_de_compras}
        alt="Carrito de compras"
        style={{ width: "80px", height: "80px" }}
      />
      <div>
        <p>Productos Seleccionados {numProductos}</p>
        <p>Precio Total: ${totalPrecio}</p>
      </div>
    </div>
  );
};

export default Carwidget;
