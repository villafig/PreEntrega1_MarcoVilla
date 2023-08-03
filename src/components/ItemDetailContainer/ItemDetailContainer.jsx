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
//         console.log("No hay disponibilidad del producto");
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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemDetailContainer = ({ id, onItemLoaded }) => {
  const [item, setItem] = useState({});
  const [itemNotFound, setItemNotFound] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const itemDoc = await getDoc(doc(db, "Chamarras", id));
      if (itemDoc.exists()) {
        setItem({ id: itemDoc.id, ...itemDoc.data() });
        onItemLoaded(itemDoc.data());
      } else {
        setItemNotFound(true);
      }
    };

    fetchItem();
  }, [id, onItemLoaded]);

  return (
    <div>
      {itemNotFound ? (
        <p>Producto sin Disponibilidad</p>
      ) : (
        <>
          <h1>{item.title}</h1>
          <img src={item.Foto} alt={item.title} />
          <p>{item.Precio} USD</p>
          <p>{item.Descripción}</p>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
