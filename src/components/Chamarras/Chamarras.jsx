import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ProductCard from "../ProductCard/productCard";
import Carwidget from "../Cardwidget/Carwidget";

const Chamarras = () => {
  const [sudaderas, setSudaderas] = useState([]);

  useEffect(() => {
    fetchSudaderas();
  }, []);

  const fetchSudaderas = async () => {
    try {
      const q = query(
        collection(db, "Productos"),
        where("Categoria", "==", "Chamarras")
      );
      const querySnapshot = await getDocs(q);
      const sudaderasData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSudaderas(sudaderasData);
    } catch (error) {
      console.error("Produtco no Disponible", error);
    }
  };

  const handleBuyClick = (precio) => {};

  return (
    <div>
      <h1>Chamarras</h1>
      <Carwidget />{" "}
      <div>
        {sudaderas.map((sudadera) => (
          <ProductCard
            key={sudadera.id}
            product={sudadera}
            handleBuyClick={handleBuyClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Chamarras;
