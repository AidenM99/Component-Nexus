import { Alert, Snackbar, Stack } from "@mui/material";

const CustomisedSnackbar = ({ open, handleClose, itemLimit }) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {itemLimit === true ? (
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Item limit reached
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Item added to cart
          </Alert>
        )}
      </Snackbar>
    </Stack>
  );
};

export default CustomisedSnackbar;
