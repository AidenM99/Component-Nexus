import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MemoryIcon from "@mui/icons-material/Memory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = ({ linkStyle, toggleDrawer, cart }) => {
  const pages = ["Home", "Products", "Contact"];

  return (
    <AppBar
      color="secondary"
      position="sticky"
      elevation={0}
      sx={{ px: "7.5%", display: "flex" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MemoryIcon sx={{ mr: 1 }} />
          <Link to="/" style={linkStyle}>
            <Typography
              color="primary"
              variant="h5"
              component="h1"
              textTransform="uppercase"
              sx={{ fontFamily: "Geforce" }}
            >
              Component Nexus
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={page === "Home" ? "/" : page}
                style={linkStyle}
              >
                <Button color="light" sx={{ mx: 2 }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
            <IconButton color="light">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton color="light" onClick={() => toggleDrawer(true)}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
