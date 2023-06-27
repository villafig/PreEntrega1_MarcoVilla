import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Item</h1>
      <ItemDetailContainer id={id}></ItemDetailContainer>
    </div>
  );
};

export default ItemPage;
