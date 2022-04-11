import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./assets/fonts/GeForce/GeForce-Bold.ttf";
import CssBaseline from "@mui/material/CssBaseline";
import allProducts from "./utils/products/products";
import { useEffect, useRef, useState } from "react";
import Item from "./pages/Item";
import products from "./utils/products/products";

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
  const [productDisplay, setProductDisplay] = useState(allProducts);
  const [activeFilters, setActiveFilters] = useState([]);
  const [drawerState, setDrawerState] = useState(false);
  const [cart, setCart] = useState([]);
  const notInitialRender = useRef(false);

  const linkStyle = {
    textDecoration: "none",
    color: "#f5f5f5",
  };

  useEffect(() => {
    if (notInitialRender.current) {
      const newProductDisplay = allProducts.filter((product) =>
        activeFilters.includes(product.category)
      );

      activeFilters.length === 0
        ? setProductDisplay(allProducts)
        : setProductDisplay(newProductDisplay);
    } else {
      notInitialRender.current = true;
    }
  }, [activeFilters]);

  const filterProducts = (category, e) => {
    e.target.checked
      ? setActiveFilters([...activeFilters, category])
      : setActiveFilters(activeFilters.filter((filter) => filter !== category));
  };

  const toggleDrawer = (open) => {
    setDrawerState(open);
  };

  const addToCart = (product) => {
    setCart((prevState) => [...prevState, product]);
  };

  const findProduct = (id) => {
    return allProducts.filter((product) => product.id === id);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Nav linkStyle={linkStyle} toggleDrawer={toggleDrawer} cart={cart} />
        <Cart
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
          cart={cart}
        />
        <Routes>
          <Route
            path="/"
            element={<Home linkStyle={linkStyle} />}
            onEnter={() => addToCart()}
          />
          <Route
            path="/products"
            element={
              <Products
                productDisplay={productDisplay}
                setProductDisplay={setProductDisplay}
                allProducts={allProducts}
                filterProducts={filterProducts}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products/:id"
            element={<Item findProduct={findProduct} addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
