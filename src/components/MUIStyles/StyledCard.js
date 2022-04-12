import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createTheme,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
  shadows: Array(25).fill("none"),
});

const StyledProductCard = styled(Card)(() => ({
  "&:hover .MuiCardMedia-root": { transform: "scale(1.1)" },
}));

const StyledMedia = styled(CardMedia)(() => ({
  height: "100%",
  margin: "auto",
  maxWidth: "15rem",
  mixBlendMode: "multiply",
  objectFit: "contain",
  transition: "all 0.5s",
  width: "100%",
}));

const StyledActionArea = styled(CardActionArea)(() => ({
  padding: "5rem",
  height: "350px",
}));

export default function StyledCard({ product }) {
  return (
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
          ></StyledMedia>
        </StyledActionArea>
        <CardContent sx={{ background: "#fff", px: "0", pt: "0.5rem" }}>
          <Typography fontWeight="700">{product.name}</Typography>
          <Typography letterSpacing="2px">{product.price}</Typography>
        </CardContent>
      </StyledProductCard>
    </ThemeProvider>
  );
}
