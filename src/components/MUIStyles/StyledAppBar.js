import { AppBar, Toolbar, createTheme, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import MemoryIcon from "@mui/icons-material/Memory";
import { Link } from "react-router-dom";
import NavLinks from "../Navbar/NavLinks";
import NavMenu from "../Navbar/NavMenu";
import CartMenu from "../ShoppingCart/CartMenu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#76B900",
    },
    secondary: {
      main: "#212121",
    },
    light: {
      main: "#fff",
    },
  },
  mixins: {
    toolbar: {
      "@media (min-width: 0px)": {
        minHeight: "80px",
      },
    },
  },
});

const StyledAppBar = styled(AppBar)(() => ({
  display: "flex",
  padding: "0 7.5%",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

const StyledBox = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
}));

export default function StyledNav({ cart, toggleDrawer }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar color="secondary" position="sticky" elevation={0}>
        <StyledToolbar>
          <StyledBox>
            <StyledBox sx={{ mr: "4rem" }}>
              <MemoryIcon sx={{ mr: 1 }} />
              <Link to="/" style={{ textDecoration: "none" }}>
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
            </StyledBox>
            <NavLinks />
          </StyledBox>
          <StyledBox>
            <NavMenu />
            <CartMenu cart={cart} toggleDrawer={toggleDrawer} />
          </StyledBox>
        </StyledToolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
}
