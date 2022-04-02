import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./assets/fonts/GeForce/GeForce-Bold.ttf";

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
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
