import { styled } from "@mui/system";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";

const StyledItemDetails = styled(Box)(() => ({
  display: "flex",
  flex: "1",
}));

const ProductDetailsOne = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const ProductDetailsTwo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: "1",
  alignItems: "flex-end",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

const StyledFlexEnd = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: "1",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: "1",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledButton = styled(Button)(() => ({
  minHeight: 0,
  minWidth: 0,
  padding: 0,
}));

const CartItemDetails = ({
  product,
  setItemLimit,
  removeCartItem,
  handleQuantityChange,
}) => {
  const quantities = [1, 2, 3, 4, 5];

  return (
    <StyledItemDetails sx={{ flexDirection: "column" }}>
      <ProductDetailsOne>
        <Typography fontWeight={700} sx={{ mr: "0.5rem" }}>
          {product.name}
        </Typography>
        <StyledFlexEnd>
          <Typography letterSpacing="2px">
            £
            {product.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </Typography>
        </StyledFlexEnd>
      </ProductDetailsOne>
      <ProductDetailsTwo>
        <StyledTextField
          select
          label="Quantity"
          value={product.quantity}
          onChange={(e) => handleQuantityChange(product, e.target.value)}
        >
          {quantities.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </StyledTextField>
        <StyledFlexEnd
          sx={{
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <StyledButton
            variant="text"
            color="secondary"
            onClick={() => {
              removeCartItem(product);
              setItemLimit(false);
            }}
          >
            <Typography letterSpacing="2px" fontSize="0.75rem">
              Remove
            </Typography>
          </StyledButton>
        </StyledFlexEnd>
      </ProductDetailsTwo>
    </StyledItemDetails>
  );
};

export default CartItemDetails;
