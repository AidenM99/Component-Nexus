import StyledNav from "../MUIStyles/StyledAppBar";

const Nav = ({ toggleDrawer, cart }) => {
  return <StyledNav toggleDrawer={toggleDrawer} cart={cart}></StyledNav>;
};

export default Nav;
