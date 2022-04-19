import CartImage from "./CartImage";
import CartItemDetails from "./CartItemDetails";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, Typography } from "@mui/material";

const StyledFlexContainer = styled(Box)(() => ({
  display: "flex",
}));

const CartItems = ({
  cart,
  setCart,
  setItemLimit,
  removeCartItem,
  calculateSubtotal,
  handleQuantityChange,
}) => {
  return (
    <>
      {cart.map((product) => (
        <Grid item key={product.id} sx={{ my: "0.5rem" }}>
          <StyledFlexContainer>
            <CartImage product={product} />
            <CartItemDetails
              product={product}
              setItemLimit={setItemLimit}
              removeCartItem={removeCartItem}
              handleQuantityChange={handleQuantityChange}
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
