import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import CartImage from "./CartImage";
import CartItemDetails from "./CartItemDetails";

const StyledFlexContainer = styled(Box)(() => ({
  display: "flex",
}));

const CartItems = ({ cart, handleQuantityChange, removeCartItem }) => {
  const calculateSubtotal = () => {
    return cart.reduce(
      (previousValue, currentValue) =>
        previousValue +
        parseFloat(currentValue.originalPrice * currentValue.quantity),
      0
    );
  };

  return (
    <>
      {cart.map((product) => (
        <Grid item key={product.id} sx={{ my: "0.5rem" }}>
          <StyledFlexContainer>
            <CartImage product={product} />
            <CartItemDetails
              product={product}
              handleQuantityChange={handleQuantityChange}
              removeCartItem={removeCartItem}
            />
          </StyledFlexContainer>
        </Grid>
      ))}
      <StyledFlexContainer sx={{ justifyContent: "flex-end" }}>
        <Typography letterSpacing="1px" fontWeight="600">
          Subtotal: £
          {calculateSubtotal().toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </Typography>
      </StyledFlexContainer>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mt: "1rem" }}
      >
        Checkout
      </Button>
    </>
  );
};

export default CartItems;
