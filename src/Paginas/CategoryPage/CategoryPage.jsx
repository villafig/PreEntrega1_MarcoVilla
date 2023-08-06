import React from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const CategoryPage = ({ id }) => {
  return (
    <div>
      <h1>{id}</h1>
      <ProductDetail category={id} />
    </div>
  );
};

export default CategoryPage;
