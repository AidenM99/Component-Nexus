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
  alignItems: "center",
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
          variant="h4"
          component="h3"
          sx={{ mr: "0.75rem", fontFamily: "GeForce" }}
        >
          Filter by
        </Typography>
        <FilterListIcon sx={{ ml: "-7px", mt: "-4px" }} />
      </StyledBox>
      <NotchedBox>
        <StyledForm sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          {filterItems.map((filterItem) => (
            <Box
              key={filterItem}
              sx={{
                margin: "0 3.5%",
                width: "133px",
              }}
            >
              <FormControlLabel
                sx={{ margin: "0" }}
                control={
                  <Checkbox
                    onClick={(e) => filterProducts(filterItem, e)}
                    sx={{ padding: "0", color: "#fff" }}
                  />
                }
                label={<Typography>{filterItem}</Typography>}
              />
            </Box>
          ))}
        </StyledForm>
      </NotchedBox>
    </Box>
  );
};

export default Filters;
