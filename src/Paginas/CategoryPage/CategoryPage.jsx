import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const CategoryPage = ({ id }) => {
  return (
    <div>
      <h1>{id}</h1>
      <ItemListContainer category={id} />
    </div>
  );
};

export default CategoryPage;
