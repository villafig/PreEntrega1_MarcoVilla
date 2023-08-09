import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [totalPrecio, setTotalPrecio] = useState(0);
  const [productos, setProductos] = useState([]);

  const calcularTotal = (productos) =>
    productos.reduce((totalPrecio, producto) => {
      return totalPrecio + producto.Precio;
    }, 0);

  const agregarProducto = (producto) => {
    setProductos((productos) => {
      const actualizacion = [...productos, producto];
      setTotalPrecio(calcularTotal(actualizacion));

      return actualizacion;
    });
  };

  const removerProducto = (producto) => {
    setProductos((productos) => {
      const index = productos.findIndex(
        (product) => product.id === producto.id
      );
      const actualizacion = [
        ...productos.slice(0, index),
        ...productos.slice(index + 1),
      ];

      setTotalPrecio(calcularTotal(actualizacion));
      return actualizacion;
    });
  };

  const reset = () => {
    setProductos([]);
    setTotalPrecio(0);
  };

  return (
    <ProductsContext.Provider
      value={{
        totalPrecio,
        productos,
        agregarProducto,
        removerProducto,
        reset,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
