import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.Categoria}</h1>
      <h1>{product.Descripcion}</h1>
      <p>Precio: ${product.Precio}</p>
      <img src={product.Foto} alt={product.title} style={{ width: "200px" }} />
    </div>
  );
};

export default ProductDetail;
