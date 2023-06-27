import React, { useState, useEffect } from "react";
import axios from "axios";

const itemDetails = ({ id }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setItem(response.data);
    });
  }, []);

  return <h1>{item.title}</h1>;
};

export default itemDetails;
