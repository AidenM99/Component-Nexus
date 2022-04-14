import { Button, Drawer, Grid, Typography } from "@mui/material";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import CloseButton from "./CloseButton";

const Cart = ({
  drawerState,
  toggleDrawer,
  cart,
  handleQuantityChange,
  removeCartItem,
}) => {
  return (
    <Drawer
      anchor={"right"}
      open={drawerState}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: { xs: "100%", md: "50%", lg: "50%", xl: "35%" },
        },
      }}
    >
      <CloseButton toggleDrawer={toggleDrawer} />
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
          <EmptyCart toggleDrawer={toggleDrawer} />
        ) : (
          <CartItems
            cart={cart}
            handleQuantityChange={handleQuantityChange}
            removeCartItem={removeCartItem}
          />
        )}
      </Grid>
    </Drawer>
  );
};

export default Cart;
