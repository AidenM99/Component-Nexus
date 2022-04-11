import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import { Link } from "react-router-dom";
import CartMenu from "./CartMenu";
import NavMenu from "./NavMenu";
import NavLinks from "./NavLinks";

const Nav = ({ linkStyle, toggleDrawer, cart }) => {
  return (
    <AppBar
      color="secondary"
      position="sticky"
      elevation={0}
      sx={{ px: "7.5%", display: "flex" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: "4rem",
            }}
          >
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
          <NavLinks linkStyle={linkStyle} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <NavMenu />
          <CartMenu toggleDrawer={toggleDrawer} cart={cart} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
