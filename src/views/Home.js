import Background from "../assets/images/background.jpg";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        background: `url(${Background}) no-repeat fixed center`,
        backgroundPosition: "58% 0",
        height: "calc(100vh - 5rem)",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={12} md={6} px="7.5%" sx={{ color: "#fff", pb: "4rem" }}>
        <Typography
          color="primary"
          variant="h3"
          textTransform="uppercase"
          sx={{ fontFamily: "Geforce" }}
        >
          GeForce GTX 30 Series
        </Typography>
        <Typography
          color="light"
          variant="h5"
          textTransform="uppercase"
          sx={{ mb: "0.3rem" }}
        >
          The Ultimate Play
        </Typography>
        <Typography>
          GeForce RTX™ 30 Series GPUs deliver the ultimate performance for
          gamers and creators. They're powered by Ampere—NVIDIA's 2nd gen RTX
          architecture—with new RT Cores, Tensor Cores, and streaming
          multiprocessors for the most realistic ray-traced graphics and
          cutting-edge AI features.
        </Typography>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ mt: "0.75rem" }}>
            Shop Now
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
