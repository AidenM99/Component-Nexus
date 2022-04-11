import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { useEffect } from "react";

const Products = ({
  productDisplay,
  setProductDisplay,
  allProducts,
  filterProducts,
}) => {
  useEffect(() => {
    setProductDisplay(allProducts);
  }, [allProducts, setProductDisplay]);
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
            <ProductCard productDisplay={productDisplay} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
