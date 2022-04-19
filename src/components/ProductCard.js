import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createTheme,
  Typography,
  Grid,
} from "@mui/material";

const theme = createTheme({
  shadows: Array(25).fill("none"),
});

const StyledProductCard = styled(Card)(() => ({
  "&:hover .MuiCardMedia-root": { transform: "scale(1.1)" },
}));

const StyledMedia = styled(CardMedia)(() => ({
  height: "70%",
  margin: "auto",
  maxWidth: "15rem",
  mixBlendMode: "multiply",
  objectFit: "contain",
  transition: "all 0.5s",
  width: "70%",
}));

const StyledActionArea = styled(CardActionArea)(() => ({
  height: "350px",
}));

const ProductCard = ({ productDisplay }) => {
  return (
    <>
      {productDisplay.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={6} lg={4}>
          <Link
            to={`/products/${product.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ThemeProvider theme={theme}>
              <StyledProductCard>
                <StyledActionArea
                  sx={{
                    background: "rgb(242, 242, 242)",
                  }}
                >
                  <StyledMedia
                    component="img"
                    image={product.image}
                    alt="product-image"
                    draggable={false}
                  ></StyledMedia>
                </StyledActionArea>
                <CardContent sx={{ background: "#fff", px: "0", pt: "0.5rem" }}>
                  <Typography fontWeight="700">{product.name}</Typography>
                  <Typography letterSpacing="2px">
                    £
                    {product.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </Typography>
                </CardContent>
              </StyledProductCard>
            </ThemeProvider>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default ProductCard;
