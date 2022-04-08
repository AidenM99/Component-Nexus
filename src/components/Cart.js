import { Box, Drawer, Grid, Typography } from "@mui/material";

const Cart = ({ drawerState, toggleDrawer, cart }) => {
  return (
    <Drawer
      anchor={"right"}
      open={drawerState}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: { width: "35%", background: "#f8f5f2" },
      }}
    >
      <Box>
        <Typography variant="h4">
          Your
          <br />
          Shopping
          <br />
          Bag
        </Typography>
        {cart.map((product) => (
          <>
            <Box
              component="img"
              src={product.image}
              alt="product-image"
              height="100px"
              width="100px"
            ></Box>
            <Grid container>
              <Grid item>
                <Typography>{product.category}</Typography>
              </Grid>
              <Grid item>
                <Typography>{product.price}</Typography>
              </Grid>
            </Grid>
            <Typography>{product.name}</Typography>
          </>
        ))}
      </Box>
    </Drawer>
  );
};

export default Cart;
