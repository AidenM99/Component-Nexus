import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const Products = ({ products, filterProducts }) => {
  return (
    <Box sx={{ background: "#fefefe" }}>
      <Typography
        color="secondary"
        variant="h3"
        textTransform="uppercase"
        textAlign="center"
        sx={{
          fontFamily: "Geforce",
          textDecoration: "underline",
          textDecorationColor: "#76b900",
          pt: "1.25rem",
        }}
      >
        Our Products
      </Typography>
      <Grid
        container
        sx={{
          py: "6rem",
          px: "2rem",
          maxWidth: "1420px",
          margin: "auto",
        }}
      >
        <Grid item xs={2}>
          <Sidebar filterProducts={filterProducts} />
        </Grid>
        <Grid item xs={10} sx={{ flexGrow: "1" }}>
          <Grid container spacing={3}>
            <ProductCard products={products} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
