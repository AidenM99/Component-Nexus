import MenuLinks from "./MenuLinks";
import CloseMenu from "./CloseMenu";
import { Drawer, Grid } from "@mui/material";

const Menu = ({ menuDrawer, toggleMenuDrawer }) => {
  return (
    <Drawer
      anchor={"left"}
      open={menuDrawer}
      onClose={() => toggleMenuDrawer(false)}
      PaperProps={{
        sx: {
          width: "100%",
        },
      }}
    >
      <CloseMenu toggleMenuDrawer={toggleMenuDrawer} />
      <Grid
        container
        direction="column"
        rowSpacing={10}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <MenuLinks toggleMenuDrawer={toggleMenuDrawer} />
      </Grid>
    </Drawer>
  );
};

export default Menu;
