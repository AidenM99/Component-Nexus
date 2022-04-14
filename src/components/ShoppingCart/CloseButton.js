import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const CloseButtonContainer = styled(Box)(() => ({
  position: "absolute",
  top: 20,
  right: 20,
}));

const CloseButton = ({ toggleDrawer }) => {
  return (
    <CloseButtonContainer>
      <IconButton onClick={() => toggleDrawer(false)}>
        <CloseIcon color="secondary"></CloseIcon>
      </IconButton>
    </CloseButtonContainer>
  );
};

export default CloseButton;
