// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ItemDetailContainer = ({ id, onItemLoaded }) => {
//   const [item, setItem] = useState({});

//   useEffect(() => {
//     axios(`https://fakestoreapi.com/products/${id}`).then((response) => {
//       setItem(response.data);
//       onItemLoaded(response.data);
//     });
//   }, [id]);

//   return (
//     <div>
//       <h1>{item.title}</h1>
//       <img src={item.image} alt={item.title} />
//     </div>
//   );
// };

// export default ItemDetailContainer;

// import React from "react";
// import { useParams } from "react-router-dom";
// import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

// const CategoryPage = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>{id}</h1>
//       <ItemListContainer category={id} />
//     </div>
//   );
// };

// export default CategoryPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { collection, doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// const ItemDetailContainer = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState({});

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const docRef = doc(db, "Chamarras", id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setItem({ id: docSnap.id, ...docSnap.data() });
//       } else {
//         console.log("No hay disponibilidad");
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   return (
//     <div>
//       <h1>{item.title}</h1>
//       <img src={item.image} alt={item.title} />
//       <p>{item.price} USD</p>
//       <p>{item.description}</p>
//     </div>
//   );
// };

// export default ItemDetailContainer;

import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "Chamarras");
      let queryProducts;

      if (category === "Chamarras" || category === "Sudaderas") {
        queryProducts = query(
          productsCollection,
          where("Categoría", "==", category)
        );
      } else {
        queryProducts = query(productsCollection);
      }

      const querySnapshot = await getDocs(queryProducts);
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="productList">
      <div className="Product-Lists">
        {products.map((product) => (
          <div className="grid-item" key={product.id}>
            <div>
              <h2>{product.title}</h2>
              <img src={product.Foto} alt={product.title} />
              <p>{product.Precio} USD</p>
              <p>{product.Descripción}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
