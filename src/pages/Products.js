import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const Products = ({ products }) => {
  return (
    <Box sx={{ display: "flex", py: "6rem" }}>
      <Sidebar />
      <Box sx={{ flexGrow: "1", px: "5%" }}>
        <Typography
          color="secondary"
          variant="h3"
          textTransform="uppercase"
          sx={{
            fontFamily: "Geforce",
            textDecoration: "underline",
            textDecorationColor: "#76b900",
            mb: "1rem",
          }}
        >
          All Items
        </Typography>
        <Grid container spacing={3}>
          <ProductCard products={products} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
