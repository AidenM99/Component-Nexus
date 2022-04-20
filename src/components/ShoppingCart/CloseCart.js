import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

const CloseButtonContainer = styled(Box)(() => ({
  position: "absolute",
  top: 20,
  right: 20,
}));

const CloseCart = ({ toggleCartDrawer }) => {
  return (
    <CloseButtonContainer>
      <IconButton onClick={() => toggleCartDrawer(false)}>
        <CloseIcon color="secondary"></CloseIcon>
      </IconButton>
    </CloseButtonContainer>
  );
};

export default CloseCart;
