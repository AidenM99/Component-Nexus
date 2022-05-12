import HelpIcon from "@mui/icons-material/Help";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled(Box)(() => ({
  background: "rgb(242,242,242)",
}));

const GridContainer = styled(Grid)(() => ({
  maxWidth: "1200px",
  margin: "auto",
  minHeight: "calc(100vh - 11.5rem)",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
}));

const SupportOption = styled(Grid)(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
}));

const Contact = () => {
  return (
    <Wrapper>
      <GridContainer
        container
        direction="column"
        sx={{ py: "3rem", px: { xs: "1rem", md: "3rem" } }}
      >
        <Grid item sx={{ marginBottom: "2rem" }}>
          <Typography variant="h2" color="primary" fontWeight="400">
            Contact Us
          </Typography>
          <Typography variant="h3" color="#004831" fontWeight="300">
            Get Your Questions Answered.
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container>
            <SupportOption
              item
              xs={12}
              sm={6}
              sx={{
                borderRight: { xs: "none", sm: "3px solid rgb(219, 217, 214)" },
              }}
            >
              <HeadsetMicIcon color="primary" sx={{ fontSize: "8rem" }} />
              <Typography
                variant="h4"
                color="primary"
                textTransform="uppercase"
              >
                Support
              </Typography>
              <Typography sx={{ marginBottom: "1rem" }}>
                Get assistance with your existing Component Nexus products and
                services.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "auto",
                }}
              >
                Get Support
              </Button>
            </SupportOption>
            <SupportOption item xs={12} sm={6}>
              <HelpIcon color="primary" sx={{ fontSize: "8rem" }} />
              <Typography
                variant="h4"
                color="primary"
                textTransform="uppercase"
              >
                Sales
              </Typography>
              <Typography sx={{ marginBottom: "1rem" }}>
                Connect with a Component Nexus Sales Representative and get
                purchase info.
              </Typography>
              <Button variant="contained" sx={{ marginTop: "auto" }}>
                Contact Sales
              </Button>
            </SupportOption>
          </Grid>
        </Grid>
      </GridContainer>
    </Wrapper>
  );
};

export default Contact;
