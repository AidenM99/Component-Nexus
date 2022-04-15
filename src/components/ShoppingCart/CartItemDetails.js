import { styled } from "@mui/system";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";

const StyledFlexContainer = styled(Box)(() => ({
  display: "flex",
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

const CartItemDetails = ({ product, removeCartItem, handleQuantityChange }) => {
  const quantities = [1, 2, 3, 4, 5];

  return (
    <StyledItemDetails sx={{ flexDirection: "column" }}>
      <StyledFlexContainer>
        <Typography fontWeight={700}>{product.name}</Typography>
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
          onChange={(e) => handleQuantityChange(product, e.target.value)}
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
  );
};

export default CartItemDetails;
