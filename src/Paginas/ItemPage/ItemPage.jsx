import React, { useState } from "react";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const handleItemLoaded = (data) => {
    setItem(data);
  };

  return (
    <div>
      <h1>Item</h1>
      <ItemDetailContainer id={id} onItemLoaded={handleItemLoaded} />
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default ItemPage;
