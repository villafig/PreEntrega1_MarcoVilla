import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/productCard";

const productList = ({ category }) => {
  const [products, setProducts] = useState([]);
  console.log(category);
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((response) => {
      let filterproducts = response.data;
      if (category)
        filterproducts = filterproducts.filter(
          (products) => products.category === category
        );
      setProducts(filterproducts);
    });
  }, []);

  return (
    <div className="productList">
      <div className="Product-Lists">
        {products.map((product) => (
          <div className="grid-item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default productList;
