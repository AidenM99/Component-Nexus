import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Item = ({ findProduct, addToCart }) => {
  const { id } = useParams();

  const product = findProduct(id);

  return (
    <Box>
      <Typography>{product[0].name}</Typography>
      <Typography>{product[0].category}</Typography>
      <Typography>{product[0].description}</Typography>
      <Button variant="contained" onClick={() => addToCart(product[0])}>
        Add To Cart
      </Button>
    </Box>
  );
};

export default Item;
