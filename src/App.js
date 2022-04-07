import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import DrawerComponent from "./components/Drawer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./assets/fonts/GeForce/GeForce-Bold.ttf";
import CssBaseline from "@mui/material/CssBaseline";
import products from "./utils/products/products";
import { useEffect, useRef, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#76B900",
    },
    secondary: {
      main: "#212121",
    },
    light: {
      main: "#f5f5f5",
    },
  },
  mixins: {
    toolbar: {
      "@media (min-width: 0px)": {
        minHeight: "64px",
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "GeForce", "Arial", sans-serif',
  },
});

function App() {
  const [productDisplay, setProductDisplay] = useState(products);
  const [activeFilters, setActiveFilters] = useState([]);
  const [drawerState, setDrawerState] = useState(false);
  const notInitialRender = useRef(false);

  const linkStyle = {
    textDecoration: "none",
    color: "#f5f5f5",
  };

  useEffect(() => {
    if (notInitialRender.current) {
      const newProductDisplay = products.filter((product) =>
        activeFilters.includes(product.category)
      );

      activeFilters.length === 0
        ? setProductDisplay(products)
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
    console.log("hi");
    setDrawerState(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header linkStyle={linkStyle} toggleDrawer={toggleDrawer} />
        <DrawerComponent
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
        />
        <Routes>
          <Route path="/" element={<Home linkStyle={linkStyle} />} />
          <Route
            path="/products"
            element={
              <Products
                products={productDisplay}
                filterProducts={filterProducts}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
