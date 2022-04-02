import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MemoryIcon from "@mui/icons-material/Memory";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = ["Home", "Products", "Contact"];

  const linkStyle = {
    textDecoration: "none",
    color: "#f5f5f5",
  };

  return (
    <AppBar color="secondary" position="static">
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MemoryIcon sx={{ mr: 1 }} />
          <Typography
            color="primary"
            variant="h5"
            component="h1"
            textTransform="uppercase"
            sx={{ fontFamily: "Geforce" }}
          >
            Component Nexus
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
