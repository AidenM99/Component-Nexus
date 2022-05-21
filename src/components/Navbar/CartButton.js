import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Badge, IconButton } from "@mui/material";

const CartMenu = ({ toggleCartDrawer, cart }) => {
  const quantityTotal = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.quantity),
    0
  );

  return (
    <Box>
      <IconButton
        color="light"
        sx={{ justifySelf: "flex-end" }}
        onClick={() => toggleCartDrawer(true)}
        aria-label="cart-button"
      >
        <Badge badgeContent={quantityTotal} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CartMenu;
