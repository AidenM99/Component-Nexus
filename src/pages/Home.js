import { Box } from "@mui/material";
import Background from "../assets/images/background.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        background: `url(${Background}) no-repeat fixed center`,
        backgroundPosition: "58% 0",
        height: "calc(100vh - 4rem)",
        backgroundSize: "cover",
      }}
    ></Box>
  );
};

export default Home;
