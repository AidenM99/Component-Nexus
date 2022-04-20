import Menu from "../Menu/Menu";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import MemoryIcon from "@mui/icons-material/Memory";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { AppBar, Toolbar, createTheme, Box, Typography } from "@mui/material";

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
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

const StyledBox = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
}));

const Nav = ({ toggleMenuDrawer, toggleCartDrawer, cart }) => {
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
                  lineHeight="0.9"
                  sx={{ fontFamily: "Geforce" }}
                >
                  Component Nexus
                </Typography>
              </Link>
            </StyledBox>
            <NavLinks />
          </StyledBox>
          <StyledBox>
            <MenuButton toggleMenuDrawer={toggleMenuDrawer} />
            <CartButton cart={cart} toggleCartDrawer={toggleCartDrawer} />
          </StyledBox>
        </StyledToolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default Nav;
