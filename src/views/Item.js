import allProducts from "../utils/products/products";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Item = ({ cart, setCart, handleQuantityChange }) => {
  const { id } = useParams();

  const findProduct = (id) => {
    return allProducts.filter((product) => product.id === id);
  };

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      const index = cart
        .map(function (item) {
          return item.id;
        })
        .indexOf(product.id);

      if (cart[index].quantity < 5) {
        handleQuantityChange(cart[index], parseInt(cart[index].quantity) + 1);
      }

      return;
    }

    setCart((prevState) => [...prevState, product]);
  };

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
