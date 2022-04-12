import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import StyledCard from "./MUIStyles/StyledCard";

const ProductCard = ({ productDisplay }) => {
  return (
    <>
      {productDisplay.map((product) => (
        <Grid key={product.id} item xs={8} md={6} lg={4}>
          <Link
            to={`/products/${product.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <StyledCard product={product}></StyledCard>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default ProductCard;
