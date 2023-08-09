import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/ProductCard/productCard";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function ShoppingCarPage() {
  const [order, setOrder] = useState();
  const { productos, removerProducto, reset } = useContext(ProductsContext);

  const onClick = async () => {
    const docRef = await addDoc(collection(db, "orders"), {
      productos,
    });

    setOrder(docRef.id);
    reset();
  };

  return (
    <div>
      <h1>Shopping Car</h1>
      {order ? (
        <h2>Tu numero de orden es: {order}</h2>
      ) : (
        <>
          {productos.length && (
            <button onClick={onClick}>Finalizar compra</button>
          )}
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {productos.length ? (
              productos.map((product, index) => (
                <ProductCard
                  key={product.id + index}
                  product={product}
                  handleClick={removerProducto}
                  buttonText={"Eliminar"}
                />
              ))
            ) : (
              <h2>No tienes productos en tu carrito</h2>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCarPage;
