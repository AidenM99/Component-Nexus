import { Box, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartMenu = ({ toggleDrawer, cart }) => {
  return (
    <Box>
      <IconButton
        color="light"
        sx={{ justifySelf: "flex-end" }}
        onClick={() => toggleDrawer(true)}
      >
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CartMenu;
