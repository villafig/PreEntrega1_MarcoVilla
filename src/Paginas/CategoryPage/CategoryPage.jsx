import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const categoryPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Item</h1>
      <ItemListContainer category={id}></ItemListContainer>
    </div>
  );
};

export default categoryPage;
