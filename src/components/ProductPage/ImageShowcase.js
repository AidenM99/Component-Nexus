import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import uniqid from "uniqid";

const GalleryContainer = styled(Box)(() => ({
  display: "flex",
  gap: "0.5rem",
  height: "20%",
  justifyContent: "space-between",
  width: "100%",
}));

const StyledImage = styled(Box)(() => ({
  height: "75%",
  width: "75%",
  mixBlendMode: "multiply",
  objectFit: "contain",
}));

const ShowcaseImageContainer = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  height: "80%",
  width: "100%",
}));

const GridItem = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "60vh",
  minHeight: "28rem",
  maxHeight: "35rem",
  padding: "1rem",
}));

const ProductButton = styled(Button)(() => ({
  background: "rgb(219, 217, 214)",
  flex: "1",
  height: "100%",
}));

const ImageShowcase = ({ showcase, setShowcase, product }) => {
  return (
    <GridItem item xs={12} md={6}>
      <ShowcaseImageContainer>
        <StyledImage
          component="img"
          src={showcase}
          alt="product-image"
          draggable={false}
        ></StyledImage>
      </ShowcaseImageContainer>
      <GalleryContainer>
        {product[0].gallery.map((image) => (
          <ProductButton key={uniqid()} onClick={() => setShowcase(image)}>
            <StyledImage
              component="img"
              src={image}
              draggable={false}
            ></StyledImage>
          </ProductButton>
        ))}
      </GalleryContainer>
    </GridItem>
  );
};

export default ImageShowcase;
