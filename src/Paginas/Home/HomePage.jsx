import React from "react";
import ProductList from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="grid-container">
        <ProductList></ProductList>
      </div>
    </div>
  );
};

export default Home;
