import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Header from "./components/Header";
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
