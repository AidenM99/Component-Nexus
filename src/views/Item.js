import allProducts from "../utils/products/products";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ImageShowcase from "../components/ProductPage/ImageShowcase";
import ProductDetails from "../components/ProductPage/ProductDetails";

const GridContainer = styled(Grid)(() => ({
  alignItems: "center",
  display: "flex",
  margin: "auto",
  maxWidth: "1400px",
}));

const Item = ({ cart, setCart, handleQuantityChange }) => {
  const { id } = useParams();

  const findProduct = (id) => {
    return allProducts.filter((product) => product.id === id);
  };

  const product = findProduct(id);

  const [showcase, setShowcase] = useState(product[0].image);

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

  return (
    <Box sx={{ background: "rgb(242 ,242 ,242)" }}>
      <GridContainer
        container
        sx={{ height: { xs: "auto", md: "calc(100vh - 5rem)" } }}
      >
        <ImageShowcase
          product={product}
          showcase={showcase}
          setShowcase={setShowcase}
        />
        <ProductDetails product={product} addToCart={addToCart} />
      </GridContainer>
    </Box>
  );
};

export default Item;
