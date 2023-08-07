import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const ProductDetailPage = ({ setNumProductos, setTotalPrecio }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const productDoc = doc(db, "Productos", id);
      const productSnapshot = await getDoc(productDoc);

      if (productSnapshot.exists()) {
        const data = productSnapshot.data();
        setProduct(data);
      } else {
        console.log("No existe el producto con el ID proporcionado.");
      }
    } catch (error) {
      console.error("Error al obtener el producto: ", error);
    }
  };

  const handleBuyClick = (precio) => {
    setNumProductos((prevNumProductos) => prevNumProductos + 1);
    setTotalPrecio((prevTotalPrecio) => prevTotalPrecio + precio);
  };

  return (
    <div>
      {product ? (
        <ProductDetail product={product} handleBuyClick={handleBuyClick} />
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
