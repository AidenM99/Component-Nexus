import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

const Products = ({ products, filterProducts }) => {
  return (
    <Box>
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
          maxWidth: "1200px",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12}>
          <Filters filterProducts={filterProducts} />
        </Grid>
        <Grid item xs={12} sx={{ flexGrow: "1" }}>
          <Grid container spacing={3}>
            <ProductCard products={products} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
