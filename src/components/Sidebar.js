import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Sidebar = ({ filterProducts }) => {
  const filterItems = ["Processors", "Graphics Cards", "RAM", "Motherboards"];

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          textTransform="uppercase"
          color="secondary"
          fontWeight="700"
          sx={{ ml: "3px", transform: "translateX(-11px)" }}
        >
          Filter by
        </Typography>
        <FilterListIcon fontSize="small" sx={{ ml: "-7px", mt: "-4px" }} />
      </Box>
      <FormGroup>
        {filterItems.map((filterItem) => (
          <Box
            key={filterItem}
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "0.75rem 0",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ padding: "0" }}
                  onClick={(e) => filterProducts(filterItem, e)}
                />
              }
              label={filterItem}
            />
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
