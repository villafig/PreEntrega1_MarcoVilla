import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ProductCard from "../../components/ProductCard/productCard";

const HomePage = ({ setNumProductos, setTotalPrecio }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Productos"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
    } catch (error) {
      console.error("Producto no Disponible: ", error);
    }
  };

  const handleBuyClick = (precio) => {
    setNumProductos((prevNumProductos) => prevNumProductos + 1);
    setTotalPrecio((prevTotalPrecio) => prevTotalPrecio + precio);
  };

  return (
    <section className="todo-container">
      <h1 className="header">Todos los Productos</h1>
      <div
        className="todo"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {todos.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleBuyClick={handleBuyClick}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
