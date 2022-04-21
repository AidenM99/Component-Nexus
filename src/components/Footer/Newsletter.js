import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "#76B900",
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "#fff",
    },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "#76B900",
    },
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#fff",
  },

  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "#fff",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "#fff",
  },

  [`& .${inputLabelClasses.outlined}`]: {
    color: "#fff",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#fff",
  },
});

const Newsletter = ({ input, setInput, isError, emailValidationHandler }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        px: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
          Subscribe to Our Newsletter
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <StyledTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          sx={{ marginBottom: { xs: "0.5rem", sm: "0" } }}
          onChange={(e) => setInput(e.target.value)}
          error={isError ? true : false}
          helperText={isError ? "Email not recognised" : ""}
        />
        <Button
          variant="contained"
          sx={{ height: "40px", ml: { xs: "0", sm: "1rem" } }}
          onClick={() => emailValidationHandler(input)}
        >
          Subscribe
        </Button>
      </Box>
    </Grid>
  );
};

export default Newsletter;
