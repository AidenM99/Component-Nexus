import { Box, Button, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const EmptyCart = ({ toggleDrawer }) => {
  return (
    <Container>
      <Box>
        <Typography fontWeight={500} fontStyle="italic">
          Your cart is empty.
        </Typography>
      </Box>
      <StyledBox>
        <ShoppingBagIcon color="disabled" sx={{ fontSize: 250 }} />
      </StyledBox>
      <StyledBox>
        <Link to={"/products"} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => toggleDrawer(false)}
          >
            Browse Products
          </Button>
        </Link>
      </StyledBox>
    </Container>
  );
};

export default EmptyCart;
