import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const ProductDetail = ({ product }) => {
  const { agregarProducto } = useContext(ProductsContext);

  return (
    <div>
      <h1>{product.Categoria}</h1>
      <h1>{product.Descripcion}</h1>
      <p>Precio: ${product.Precio}</p>
      <img src={product.Foto} alt={product.title} style={{ width: "200px" }} />
      <button onClick={() => agregarProducto(product)}>Comprar</button>
    </div>
  );
};

export default ProductDetail;
