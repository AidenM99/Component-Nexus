import Item from "./views/Item";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Products from "./views/Products";
import Nav from "./components/Navbar/Nav";
import Cart from "./components/ShoppingCart/Cart";
import CssBaseline from "@mui/material/CssBaseline";
import "./assets/fonts/GeForce/GeForce-Bold.ttf";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  typography: {
    fontFamily: '"Roboto", "Helvetica", "GeForce", "Arial", sans-serif',
  },
});

function App() {
  const [cart, setCart] = useState([]);
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerState(open);
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
      <CssBaseline />
      <BrowserRouter>
        <Nav toggleDrawer={toggleDrawer} cart={cart} />
        <Cart
          cart={cart}
          setCart={setCart}
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
