import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Sidebar = ({ filterProducts }) => {
  const filterItems = [
    "Processors",
    "Graphics Cards",
    "Memory",
    "Motherboards",
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          textTransform="uppercase"
          variant="h5"
          sx={{ mr: "0.75rem", fontFamily: "GeForce" }}
        >
          Filter by
        </Typography>
        <FilterListIcon sx={{ ml: "-7px", mt: "-4px" }} />
      </Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "#fff",
          padding: "1.5rem",
          my: "1rem",
          clipPath:
            "polygon( 0% 0px, 0px 0%, calc(100% - 20px) 0%, 100% 20px, 1000% calc(100% - 20px), calc(100% - 20px) 100%, 0px 100%, 0 calc(100% - 20px) )",
        }}
      >
        <FormGroup row sx={{ justifyContent: "center" }}>
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
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Sidebar;
