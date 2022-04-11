import { Box, Grid, Typography } from "@mui/material";

const CartItems = ({ cart }) => {
  return (
    <>
      {cart.map((product) => (
        <Grid item key={product.id} sx={{ my: "0.5rem" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "rgb(242, 242, 242)",
                height: "150px",
                width: "150px",
                mr: "1rem",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt="product-image"
                height="100%"
                width="100%"
                sx={{
                  padding: "1.5rem",
                  mixBlendMode: "multiply",
                }}
              ></Box>
            </Box>
            <Box sx={{ display: "flex", flex: "1", padding: "1rem 0" }}>
              <Box>
                <Typography fontWeight="700">{product.name}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexGrow: "1",
                }}
              >
                <Typography letterSpacing="2px">{product.price}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default CartItems;
