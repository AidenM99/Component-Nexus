import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Badge, IconButton } from "@mui/material";

const CartMenu = ({ toggleCartDrawer, cart }) => {
  return (
    <Box>
      <IconButton
        color="light"
        sx={{ justifySelf: "flex-end" }}
        onClick={() => toggleCartDrawer(true)}
        aria-label="cart-button"
      >
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CartMenu;
