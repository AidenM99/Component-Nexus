import MenuLinks from "./MenuLinks";
import CloseMenu from "./CloseMenu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Menu = ({ menuDrawer, toggleMenuDrawer }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
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
      ) : (
        toggleMenuDrawer(false)
      )}
    </>
  );
};

export default Menu;
