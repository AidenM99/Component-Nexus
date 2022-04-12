import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImageContainer = styled(Box)(() => ({
  background: "rgb(242, 242, 242)",
  height: "150px",
  marginRight: "1rem",
  width: "150px",
}));

const StyledImage = styled(Box)(() => ({
  mixBlendMode: "multiply",
  padding: "1.5rem",
}));

const StyledItemDetails = styled(Box)(() => ({
  display: "flex",
  flex: "1",
  padding: "1rem 0",
}));

const StyledProductPrice = styled(Box)(() => ({
  display: "flex",
  flexGrow: "1",
  justifyContent: "flex-end",
}));

export default function StyledCartItems({ product }) {
  return (
    <Grid item key={product.id} sx={{ my: "0.5rem" }}>
      <Box sx={{ display: "flex" }}>
        <StyledImageContainer>
          <StyledImage
            component="img"
            src={product.image}
            alt="product-image"
            height="100%"
            width="100%"
          ></StyledImage>
        </StyledImageContainer>
        <StyledItemDetails>
          <Box>
            <Typography fontWeight="700">{product.name}</Typography>
          </Box>
          <StyledProductPrice>
            <Typography letterSpacing="2px">{product.price}</Typography>
          </StyledProductPrice>
        </StyledItemDetails>
      </Box>
    </Grid>
  );
}
