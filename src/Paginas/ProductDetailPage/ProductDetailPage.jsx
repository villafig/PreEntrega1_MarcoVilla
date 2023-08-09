import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = doc(db, "Productos", id);
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
          const data = productSnapshot.data();
          setProduct({ id, ...data });
        } else {
          console.log("No existe el producto con el ID proporcionado.");
        }
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
