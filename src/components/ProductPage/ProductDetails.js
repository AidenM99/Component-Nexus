import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const GridItem = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "60vh",
  minHeight: "28rem",
  maxHeight: "35rem",
  padding: "1rem",
}));

const MiscInfo = styled(Box)(() => ({
  display: "flex",
}));

const Wrapper = styled(Box)(() => ({
  background: "#212121",
  clipPath:
    "polygon( 0% 0px, 0px 0%, calc(100% - 20px) 0%, 100% 20px, 1000% calc(100% - 20px), calc(100% - 20px) 100%, 0px 100%, 0 calc(100% - 20px) )",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  padding: "1rem",
}));

const ProductDetails = ({
  product,
  addToCart,
  handleClick,
  itemLimitReached,
}) => {
  return (
    <GridItem item xs={12} md={6}>
      <Wrapper>
        <Box>
          <Typography variant="h3" component="h2" fontFamily="GeForce">
            {product[0].name}
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily="GeForce" fontSize="1.1rem" textTransform="uppercase">
            Description
          </Typography>
          <Typography>{product[0].description}</Typography>
        </Box>
        <Box>
          <MiscInfo>
            <CheckCircleIcon color="primary"></CheckCircleIcon>
            <Typography>
              <Box component="span" fontWeight="600">
                Category:{" "}
              </Box>
              {product[0].category}
            </Typography>
          </MiscInfo>
          <MiscInfo>
            <CheckCircleIcon color="primary"></CheckCircleIcon>
            <Typography>
              <Box component="span" fontWeight="600">
                Availability:{" "}
              </Box>
              In Stock
            </Typography>
          </MiscInfo>
          <MiscInfo>
            <CheckCircleIcon color="primary"></CheckCircleIcon>
            <Typography>
              <Box component="span" fontWeight="600">
                Shipping Fee:{" "}
              </Box>
              None
            </Typography>
          </MiscInfo>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            onClick={() => {
              addToCart(product[0]);
              handleClick();
              itemLimitReached(product[0]);
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Wrapper>
    </GridItem>
  );
};

export default ProductDetails;
