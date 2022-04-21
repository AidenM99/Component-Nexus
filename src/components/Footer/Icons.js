import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

const GridItem = styled(Grid)(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "0 5%",
}));

const Icons = () => {
  return (
    <GridItem item xs={12} md={6}>
      <Box>
        <Typography
          variant="h6"
          sx={{ marginBottom: { xs: "0", lg: "0.5rem" } }}
        >
          Follow Us
        </Typography>
      </Box>
      <Box>
        <IconButton
          onClick={() => window.open("https://github.com/AidenM99", "_blank")}
        >
          <GitHubIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://en-gb.facebook.com/", "_blank")}
        >
          <FacebookIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://twitter.com/?lang=en", "_blank")}
        >
          <TwitterIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open("https://www.instagram.com/?hl=en", "_blank")
          }
        >
          <InstagramIcon color="primary" />
        </IconButton>
      </Box>
    </GridItem>
  );
};

export default Icons;
