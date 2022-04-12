import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const pages = ["Home", "Products", "Contact"];

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        justifyContent: "space-between",
        width: "18.75rem",
      }}
    >
      {pages.map((page) => (
        <Link
          key={page}
          to={page === "Home" ? "/" : page}
          style={{ textDecoration: "none" }}
        >
          <Button color="light">{page}</Button>
        </Link>
      ))}
    </Box>
  );
};

export default NavLinks;
