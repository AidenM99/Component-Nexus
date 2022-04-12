import StyledFilters from "./MUIStyles/StyledFilters";

const Sidebar = ({ filterProducts }) => {
  const filterItems = [
    "Processors",
    "Graphics Cards",
    "Memory",
    "Motherboards",
  ];

  return (
    <StyledFilters
      filterItems={filterItems}
      filterProducts={filterProducts}
    ></StyledFilters>
  );
};

export default Sidebar;
