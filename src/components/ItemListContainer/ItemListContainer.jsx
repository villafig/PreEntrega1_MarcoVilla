// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductCard from "../ProductCard/productCard";

// const productList = ({ category }) => {
//   const [products, setProducts] = useState([]);
//   console.log(category);
//   useEffect(() => {
//     axios("https://fakestoreapi.com/products").then((response) => {
//       let filterproducts = response.data;
//       if (category)
//         filterproducts = filterproducts.filter(
//           (products) => products.category === category
//         );
//       setProducts(filterproducts);
//     });
//   }, []);

//   return (
//     <div className="productList">
//       <div className="Product-Lists">
//         {products.map((product) => (
//           <div className="grid-item" key={product.id}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default productList;

// import React, { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// import ProductCard from "../ProductCard/productCard";

// const ProductList = ({ collectionName }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const querySnapshot = await getDocs(collection(db, collectionName));
//       const productsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productsData);
//     };

//     fetchProducts();
//   }, [collectionName]);

//   return (
//     <div className="productList">
//       <div className="Product-Lists">
//         {products.map((product) => (
//           <div className="grid-item" key={product.id}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from "react";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// import ProductCard from "../ProductCard/productCard";

// const ItemListContainer = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsRef = collection(db, "Chamarras");
//       let productsQuery;

//       if (category === "Chamarras" || category === "Sudaderas") {
//         productsQuery = query(productsRef, where("category", "==", category));
//       } else {
//         productsQuery = productsRef;
//       }

//       const querySnapshot = await getDocs(productsQuery);
//       const productsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productsData);
//     };

//     fetchProducts();
//   }, [category]);

//   return (
//     <div className="productList">
//       <div className="Product-Lists">
//         {products.map((product) => (
//           <div className="grid-item" key={product.id}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemListContainer;

//ok

// import React, { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

// const ItemListContainer = ({ category }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       const querySnapshot = await getDocs(collection(db, "Chamarras"));
//       const itemsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setItems(itemsData);
//     };

//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h1>{category}</h1>
//       <div>
//         {items.map((item) => (
//           <div key={item.id}>
//             <ItemDetailContainer id={item.id} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemListContainer;

// import React, { useState, useEffect } from "react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// import ProductCard from "../ProductCard/ProductCard";

// const ItemListContainer = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, "Chamarras");
//       let queryProducts;

//       if (category === "Chamarras" || category === "Sudaderas") {

//         queryProducts = query(
//           productsCollection,
//           where("Categoría", "==", category)
//         );
//       } else {
//         queryProducts = query(productsCollection);
//       }

//       const querySnapshot = await getDocs(queryProducts);
//       const productsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productsData);
//     };

//     fetchProducts();
//   }, [category]);

//   return (
//     <div className="productList">
//       <div className="Product-Lists">
//         {products.map((product) => (
//           <div className="grid-item" key={product.id}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemListContainer;

import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import ProductCard from "../ProductCard/ProductCard";

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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
