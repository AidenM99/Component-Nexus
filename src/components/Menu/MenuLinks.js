import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const MenuLink = styled(Typography)(() => ({
  display: "inline-block",
  position: "relative",
  color: "secondary",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "5px",
    bottom: "0",
    left: "0",
    backgroundColor: "#212121",
    transformOrigin: "bottom right",
    transition: "transform 0.25s ease-out",
  },
  "&:hover:after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
}));

const MenuLinks = ({ toggleMenuDrawer }) => {
  return (
    <>
      <Grid item>
        <Link
          to={"/"}
          onClick={() => toggleMenuDrawer(false)}
          style={{ textDecoration: "none" }}
        >
          <MenuLink fontSize="7.5vw" color="secondary">
            Home
          </MenuLink>
        </Link>
      </Grid>
      <Grid item>
        <Link
          to={"/products"}
          onClick={() => toggleMenuDrawer(false)}
          style={{ textDecoration: "none" }}
        >
          <MenuLink fontSize="7.5vw" color="secondary">
            Products
          </MenuLink>
        </Link>
      </Grid>
      <Grid item>
        <Link
          to={"/contact"}
          onClick={() => toggleMenuDrawer(false)}
          style={{ textDecoration: "none" }}
        >
          <MenuLink fontSize="7.5vw" color="secondary">
            Contact
          </MenuLink>
        </Link>
      </Grid>
    </>
  );
};

export default MenuLinks;
