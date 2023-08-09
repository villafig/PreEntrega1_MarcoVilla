import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ProductCard from "../../components/ProductCard/productCard";
import { ProductsContext } from "../../context/ProductsContext";

const CategoryPage = () => {
  const { agregarProducto } = useContext(ProductsContext);

  const handleBuyClick = (producto) => {
    agregarProducto(producto);
  };

  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const queryConstrain = categoryId
          ? where("Categoria", "==", categoryId)
          : undefined;
        const categoryQuery = query(
          collection(db, "Productos"),
          queryConstrain
        );
        const querySnapshot = await getDocs(categoryQuery);
        const productosData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener los productos: ", error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return (
    <section>
      <h1>{categoryId || "Todos los Productos"}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {productos.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleClick={handleBuyClick}
            buttonText={"Comprar"}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
