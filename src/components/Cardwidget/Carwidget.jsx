import React, { useContext, useEffect, useState } from "react";
import carrito_de_compras from "./carrito_de_compras.png";
import { ProductsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";

const Carwidget = () => {
  const [numProductos, setNumProductos] = useState(0);
  const { totalPrecio, productos } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shopping-car`);
  };

  useEffect(() => {
    setNumProductos(productos.length);
  }, [productos]);

  return (
    <div>
      <img
        src={carrito_de_compras}
        alt="Carrito de compras"
        style={{ width: "80px", height: "80px", cursor: "pointer" }}
        onClick={handleClick}
      />
      <div>
        <p>Productos Seleccionados {numProductos}</p>
        <p>Precio Total: ${totalPrecio}</p>
      </div>
    </div>
  );
};

export default Carwidget;
