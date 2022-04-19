import allProducts from "../utils/products/products";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ImageShowcase from "../components/ProductPage/ImageShowcase";
import ProductDetails from "../components/ProductPage/ProductDetails";
import CustomisedSnackbar from "../components/ProductPage/CustomisedSnackbar";

const GridContainer = styled(Grid)(() => ({
  alignItems: "center",
  display: "flex",
  margin: "auto",
  maxWidth: "1400px",
}));

const Item = ({
  cart,
  setCart,
  handleQuantityChange,
  itemLimit,
  setItemLimit,
}) => {
  const { id } = useParams();
  const product = allProducts.filter((product) => product.id === id);
  const [showcase, setShowcase] = useState(product[0].image);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const itemLimitReached = (product) => {
    const index = cart
      .map(function (item) {
        return item.id;
      })
      .indexOf(product.id);

    if (index === -1) return;

    cart[index].quantity === 5 ? setItemLimit(true) : setItemLimit(false);
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

  return (
    <Box
      sx={{
        background: "rgb(242, 242, 242)",
      }}
    >
      <GridContainer
        container
        sx={{
          minHeight: {
            xs: "auto",
            md: "calc(100vh - 5rem)",
          },
          alignContent: "center",
        }}
      >
        <ImageShowcase
          showcase={showcase}
          setShowcase={setShowcase}
          product={product}
        />
        <ProductDetails
          product={product}
          addToCart={addToCart}
          handleClick={handleClick}
          itemLimitReached={itemLimitReached}
        />
        <CustomisedSnackbar
          open={open}
          handleClose={handleClose}
          itemLimit={itemLimit}
        />
      </GridContainer>
    </Box>
  );
};

export default Item;
