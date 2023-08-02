import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemDetailContainer = ({ id, onItemLoaded }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setItem(response.data);
      onItemLoaded(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default ItemDetailContainer;
