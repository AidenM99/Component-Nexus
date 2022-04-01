import { Box, Grid } from "@mui/material";
import Background from "../assets/background.jpg";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        background: `url(${Background}) no-repeat fixed center`,
        backgroundPosition: "58% 0",
        height: "100vh",
      }}
    ></Grid>
  );
};

export default Home;
