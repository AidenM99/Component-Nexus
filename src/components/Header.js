import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const pages = ["Home", "Products", "Contact"];

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar color="secondary" position="static">
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Box>
          <Typography
            color="primary"
            variant="h6"
            sx={{ textTransform: "uppercase" }}
          >
            Component Nexus
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          {isMatch ? (
            <IconButton color="light">
              <MenuIcon />
            </IconButton>
          ) : (
            pages.map((page) => (
              <Button key={page} color="light" sx={{ width: "5.6875rem" }}>
                {page}
              </Button>
            ))
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
