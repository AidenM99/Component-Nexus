import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const GalleryContainer = styled(Box)(() => ({
  display: "flex",
  gap: "0.5rem",
  height: "20%",
  justifyContent: "space-between",
  width: "100%",
}));

const StyledImage = styled(Box)(() => ({
  maxHeight: "75%",
  maxWidth: "75%",
  mixBlendMode: "multiply",
  objectFit: "contain",
}));

const ShowcaseImageContainer = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  maxHeight: "80%",
  minHeight: "80%",
  width: "100%",
}));

const GridItem = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "35rem",
  padding: "1rem",
}));

const ProductButton = styled(Button)(() => ({
  background: "rgb(219, 217, 214)",
  flex: "1",
}));

const ImageShowcase = ({ product, showcase, setShowcase }) => {
  return (
    <GridItem item xs={12} md={6}>
      <ShowcaseImageContainer>
        <StyledImage
          component="img"
          src={showcase}
          alt="product-image"
        ></StyledImage>
      </ShowcaseImageContainer>
      <GalleryContainer>
        {product[0].gallery.map((image) => (
          <ProductButton onClick={() => setShowcase(image)}>
            <StyledImage component="img" src={image}></StyledImage>
          </ProductButton>
        ))}
      </GalleryContainer>
    </GridItem>
  );
};

export default ImageShowcase;
