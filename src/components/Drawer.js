import { Drawer, Typography } from "@mui/material";

const DrawerComponent = ({ drawerState, toggleDrawer }) => {
  return (
    <Drawer
      anchor={"right"}
      open={drawerState}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: { width: "35%" },
      }}
    >
      <Typography variant="h2">Your Shopping Bag</Typography>
    </Drawer>
  );
};

export default DrawerComponent;
