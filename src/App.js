import Item from "./views/Item";
import Home from "./views/Home";
import Contact from "./views/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./views/Products";
import Nav from "./components/Navbar/Nav";
import Menu from "./components/Menu/Menu";
import Cart from "./components/ShoppingCart/Cart";
import CssBaseline from "@mui/material/CssBaseline";
import "./assets/fonts/GeForce/GeForce-Bold.ttf";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "./components/Footer/Footer";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

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
  typography: {
    fontFamily: '"Roboto", "Helvetica", "GeForce", "Arial", sans-serif',
  },
});

let responsiveFont = createTheme();
responsiveFont = responsiveFontSizes(theme);

function App() {
  const [cart, setCart] = useState([]);
  const [itemLimit, setItemLimit] = useState(null);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [menuDrawer, setMenuDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenuDrawer = (status) => {
    setMenuDrawer(status);
  };

  const toggleCartDrawer = (status) => {
    setCartDrawer(status);
  };

  const handleQuantityChange = (product, ...args) => {
    setCart((prevState) => [
      ...prevState.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            price: item.originalPrice * args[0],
            quantity: args[0],
          };
        } else {
          return item;
        }
      }),
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={responsiveFont}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop />
          <Nav
            toggleMenuDrawer={toggleMenuDrawer}
            toggleCartDrawer={toggleCartDrawer}
            cart={cart}
          />
          {matches ? (
            <Menu menuDrawer={menuDrawer} toggleMenuDrawer={toggleMenuDrawer} />
          ) : null}
          <Cart
            cart={cart}
            setCart={setCart}
            setItemLimit={setItemLimit}
            cartDrawer={cartDrawer}
            toggleCartDrawer={toggleCartDrawer}
            handleQuantityChange={handleQuantityChange}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/products/:id"
              element={
                <Item
                  cart={cart}
                  setCart={setCart}
                  handleQuantityChange={handleQuantityChange}
                  itemLimit={itemLimit}
                  setItemLimit={setItemLimit}
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
