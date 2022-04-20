import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavMenu = ({ toggleMenuDrawer }) => {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "block", md: "none" },
      }}
    >
      <IconButton color="light" onClick={() => toggleMenuDrawer(true)}>
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default NavMenu;
