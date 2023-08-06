import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ProductCard from "../ProductCard/productCard";

const Sudaderas = () => {
  const [sudaderas, setSudaderas] = useState([]);

  useEffect(() => {
    fetchSudaderas();
  }, []);

  const fetchSudaderas = async () => {
    try {
      const q = query(
        collection(db, "Productos"),
        where("Categoria", "==", "Sudaderas")
      );
      const querySnapshot = await getDocs(q);
      const sudaderasData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSudaderas(sudaderasData);
    } catch (error) {
      console.error("Error al obtener las sudaderas: ", error);
    }
  };

  return (
    <div>
      <h1>Sudaderas</h1>
      <div>
        {sudaderas.map((sudadera) => (
          <ProductCard key={sudadera.id} product={sudadera} />
        ))}
      </div>
    </div>
  );
};

export default Sudaderas;
