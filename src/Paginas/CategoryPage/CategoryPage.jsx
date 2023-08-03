// import { useParams } from "react-router-dom";
// import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

// const categoryPage = () => {
//   const { id } = useParams();
//   return (
//     <div>
//       <h1>Item</h1>
//       <ItemListContainer category={id}></ItemListContainer>
//     </div>
//   );
// };

// export default categoryPage;

// import React from "react";
// import { useParams } from "react-router-dom";
// import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

// const CategoryPage = () => {
//   const { id } = useParams();
//   const category = id.toLowerCase();

//   return (
//     <div>
//       <h1>{id}</h1>
//       <ItemListContainer category={category} />
//     </div>
//   );
// };

// export default CategoryPage;

import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const CategoryPage = ({ id }) => {
  return (
    <div>
      <h1>{id}</h1>
      <ItemListContainer category={id} />
    </div>
  );
};

export default CategoryPage;
