import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, handleClick, buttonText }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 200,
        marginBottom: "20px",
        textAlign: "text-align",
      }}
    >
      <CardActionArea onClick={goToDetails}>
        <CardMedia component="img" image={product.Foto} alt="imagen_producto" />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.Categoria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.Descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {product.Precio}
        </Typography>
      </CardContent>
      <button onClick={() => handleClick(product)}>{buttonText}</button>
    </Card>
  );
};

export default ProductCard;
