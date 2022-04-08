import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Grid key={product.id} item xs={8} md={6} lg={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              boxShadow: 0,
              borderRadius: 0,
            }}
          >
            <Link to={`/products/${product.name}`} style={{ color: "inherit" }}>
              <CardActionArea
                sx={{
                  padding: "1rem",
                  height: "350px",
                  background: "rgb(242, 242, 242)",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt="product-image"
                  sx={{
                    width: "60%",
                    maxWidth: "15rem",
                    height: "100%",
                    margin: "auto",
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                    "&:hover": { transform: "scale(1.1)" },
                    transition: "all 0.5s",
                  }}
                />
              </CardActionArea>
            </Link>
            <CardContent sx={{ background: "#fff", px: "0", pt: "0.5rem" }}>
              <Typography fontWeight="700">{product.name}</Typography>
              <Typography letterSpacing="2px">{product.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default ProductCard;
