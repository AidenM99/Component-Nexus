import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
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
  paddingTop: "1rem",
}));

const StyledFlexEnd = styled(Box)(() => ({
  display: "flex",
  flexGrow: "1",
  justifyContent: "flex-end",
}));

const StyledFlexContainer = styled(Box)(() => ({
  display: "flex",
}));

const CartItems = ({ cart, handleQuantityChange, removeCartItem }) => {
  const quantities = [1, 2, 3, 4, 5];

  return (
    <>
      {cart.map((product) => (
        <Grid item key={product.id} sx={{ my: "0.5rem" }}>
          <StyledFlexContainer>
            <StyledImageContainer>
              <StyledImage
                component="img"
                src={product.image}
                alt="product-image"
                height="100%"
                width="100%"
              ></StyledImage>
            </StyledImageContainer>
            <StyledItemDetails sx={{ flexDirection: "column" }}>
              <StyledFlexContainer>
                <Typography fontWeight="700">{product.name}</Typography>
                <StyledFlexEnd>
                  <Typography letterSpacing="2px">
                    £
                    {product.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </Typography>
                </StyledFlexEnd>
              </StyledFlexContainer>
              <StyledFlexContainer
                sx={{
                  flexGrow: "1",
                  alignItems: "flex-end",
                }}
              >
                <TextField
                  select
                  label="Quantity"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(e, product)}
                  sx={{ flex: "1" }}
                >
                  {quantities.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </TextField>
                <StyledFlexEnd>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => removeCartItem(product)}
                  >
                    <Typography letterSpacing="2px" fontSize="0.75rem">
                      Remove
                    </Typography>
                  </Button>
                </StyledFlexEnd>
              </StyledFlexContainer>
            </StyledItemDetails>
          </StyledFlexContainer>
        </Grid>
      ))}
    </>
  );
};

export default CartItems;
