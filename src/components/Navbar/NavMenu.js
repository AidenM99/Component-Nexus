import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavMenu = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "block", md: "none" },
      }}
    >
      <IconButton color="light">
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default NavMenu;
