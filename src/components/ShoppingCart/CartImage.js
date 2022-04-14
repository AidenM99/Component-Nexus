import { Box } from "@mui/material";
import { styled } from "@mui/system";

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

const CartImage = ({ product }) => {
  return (
    <StyledImageContainer>
      <StyledImage
        component="img"
        src={product.image}
        alt="product-image"
        height="100%"
        width="100%"
      ></StyledImage>
    </StyledImageContainer>
  );
};

export default CartImage;
