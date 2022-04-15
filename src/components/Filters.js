import FilterListIcon from "@mui/icons-material/FilterList";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
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
}));

const Filters = ({ filterProducts }) => {
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
              }}
            >
              <FormControlLabel
                sx={{ margin: "0" }}
                control={
                  <Checkbox
                    sx={{ padding: "0", color: "#fff" }}
                    onClick={(e) => filterProducts(filterItem, e)}
                  />
                }
                label={filterItem}
              />
            </Box>
          ))}
        </StyledForm>
      </NotchedBox>
    </Box>
  );
};

export default Filters;
