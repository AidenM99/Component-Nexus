import FilterListIcon from "@mui/icons-material/FilterList";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const NotchedBox = styled(Box)(() => ({
  backgroundColor: "#212121",
  color: "#fff",
  padding: "1.5rem",
  margin: "1rem 0",
  clipPath:
    "polygon( 0% 0px, 0px 0%, calc(100% - 20px) 0%, 100% 20px, 1000% calc(100% - 20px), calc(100% - 20px) 100%, 0px 100%, 0 calc(100% - 20px) )",
}));

const StyledForm = styled(FormGroup)(() => ({
  justifyContent: "center",
  alignItems: "center",
}));

const Filters = ({ filterProducts }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const filterItems = [
    "Processors",
    "Graphics Cards",
    "Memory",
    "Motherboards",
  ];

  return (
    <Box>
      <StyledBox>
        <Typography
          textTransform="uppercase"
          variant="h5"
          sx={{ mr: "0.75rem", fontFamily: "GeForce" }}
        >
          Filter by
        </Typography>
        <FilterListIcon sx={{ ml: "-7px", mt: "-4px" }} />
      </StyledBox>
      <NotchedBox>
        <StyledForm row>
          {filterItems.map((filterItem) => (
            <Box
              key={filterItem}
              sx={{
                margin: "0 3.5%",
                width: { xs: "107px", sm: "135px" },
              }}
            >
              <FormControlLabel
                sx={{ margin: "0" }}
                control={
                  <Checkbox
                    size={smallScreen ? "small" : "medium"}
                    onClick={(e) => filterProducts(filterItem, e)}
                    sx={{ padding: "0", color: "#fff" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                    {filterItem}
                  </Typography>
                }
              />
            </Box>
          ))}
        </StyledForm>
      </NotchedBox>
    </Box>
  );
};

export default Filters;
