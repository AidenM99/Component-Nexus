import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import CloseCart from "./CloseCart";
import { Drawer, Grid, Typography } from "@mui/material";

const Cart = ({
  cart,
  setCart,
  setItemLimit,
  cartDrawer,
  toggleCartDrawer,
  handleQuantityChange,
}) => {
  const calculateSubtotal = () => {
    return cart.reduce(
      (previousValue, currentValue) =>
        previousValue +
        parseFloat(currentValue.originalPrice * currentValue.quantity),
      0
    );
  };

  const removeCartItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Drawer
      anchor={"right"}
      open={cartDrawer}
      onClose={() => toggleCartDrawer(false)}
      PaperProps={{
        sx: {
          width: { xs: "100%", md: "50%", lg: "50%", xl: "35%" },
        },
      }}
    >
      <CloseCart toggleCartDrawer={toggleCartDrawer} />
      <Grid
        container
        direction="column"
        sx={{ padding: "7.5rem 10%", flexGrow: 1 }}
      >
        <Grid item sx={{ mb: "2rem" }}>
          <Typography variant="h4" fontWeight={600} lineHeight="32px">
            Your
            <br />
            Shopping
            <br />
            Cart
          </Typography>
        </Grid>
        {cart.length === 0 ? (
          <EmptyCart toggleCartDrawer={toggleCartDrawer} />
        ) : (
          <CartItems
            cart={cart}
            setCart={setCart}
            setItemLimit={setItemLimit}
            removeCartItem={removeCartItem}
            calculateSubtotal={calculateSubtotal}
            handleQuantityChange={handleQuantityChange}
          />
        )}
      </Grid>
    </Drawer>
  );
};

export default Cart;
