import { Drawer, Grid, Typography } from "@mui/material";
import CartItems from "./CartItems";

const Cart = ({ drawerState, toggleDrawer, cart, handleQuantityChange }) => {
  return (
    <Drawer
      anchor={"right"}
      open={drawerState}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: { width: "35%" },
      }}
    >
      <Grid container direction="column" sx={{ padding: "5rem 7.5%" }}>
        <Grid item>
          <Typography variant="h4">
            Your
            <br />
            Shopping
            <br />
            Bag
          </Typography>
        </Grid>
        <CartItems cart={cart} handleQuantityChange={handleQuantityChange} />
      </Grid>
    </Drawer>
  );
};

export default Cart;
