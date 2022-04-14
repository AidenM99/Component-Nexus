import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./components/Navbar/Nav";
import Cart from "./components/ShoppingCart/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./assets/fonts/GeForce/GeForce-Bold.ttf";
import CssBaseline from "@mui/material/CssBaseline";
import allProducts from "./utils/products/products";
import { useEffect, useRef, useState } from "react";
import Item from "./pages/Item";

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
  const [drawerState, setDrawerState] = useState(false);
  const [cart, setCart] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [productDisplay, setProductDisplay] = useState(allProducts);

  const toggleDrawer = (open) => {
    setDrawerState(open);
  };

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) return;

    setCart((prevState) => [...prevState, product]);
  };

  const handleQuantityChange = (e, product) => {
    setCart((prevState) => [
      ...prevState.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            price: item.originalPrice * e.target.value,
            quantity: e.target.value,
          };
        } else {
          return item;
        }
      }),
    ]);
  };

  const findProduct = (id) => {
    return allProducts.filter((product) => product.id === id);
  };

  const filterProducts = (category, e) => {
    e.target.checked
      ? setActiveFilters([...activeFilters, category])
      : setActiveFilters(activeFilters.filter((filter) => filter !== category));
  };

  const removeCartItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const notInitialRender = useRef(false);

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Nav toggleDrawer={toggleDrawer} cart={cart} />
        <Cart
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
          cart={cart}
          handleQuantityChange={handleQuantityChange}
          removeCartItem={removeCartItem}
        />
        <Routes>
          <Route path="/" element={<Home />} onEnter={() => addToCart()} />
          <Route
            path="/products"
            element={
              <Products
                productDisplay={productDisplay}
                filterProducts={filterProducts}
                setActiveFilters={setActiveFilters}
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
