import Filters from "../components/Filters";
import allProducts from "../utils/products/products";
import ProductCard from "../components/ProductCard";
import { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: "6rem 2rem",
  maxWidth: "1200px",
  margin: "auto",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    padding: "10% 1rem",
  },
}));

const Products = () => {
  const notInitialRender = useRef(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [productDisplay, setProductDisplay] = useState(allProducts);

  const filterProducts = (category, e) => {
    e.target.checked
      ? setActiveFilters([...activeFilters, category])
      : setActiveFilters(activeFilters.filter((filter) => filter !== category));
  };

  useEffect(() => {
    setActiveFilters([]);
  }, []);

  useEffect(() => {
    if (notInitialRender.current) {
      const newProductDisplay = allProducts.filter((product) =>
        activeFilters.includes(product.category)
      );

      activeFilters.length === 0
        ? setProductDisplay(allProducts)
        : setProductDisplay(newProductDisplay);
    } else {
      notInitialRender.current = true;
    }
  }, [activeFilters]);

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
      <GridContainer container>
        <Grid item xs={12}>
          <Filters filterProducts={filterProducts} />
        </Grid>
        <Grid item xs={12} sx={{ flexGrow: "1" }}>
          <Grid container spacing={3}>
            <ProductCard productDisplay={productDisplay} />
          </Grid>
        </Grid>
      </GridContainer>
    </Box>
  );
};

export default Products;
