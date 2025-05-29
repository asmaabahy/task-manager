import { Outlet } from "react-router";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function WelcomeLayout() {
  return (
    <Box
      component={"main"}
      sx={{ height: "100vh", width: "100vw", padding: 3 }}
    >
      <Grid
        container
        columns={{ mobile_small: 1, tablet: 2 }}
        sx={{ minHeight: "100%" }}
        spacing={2}
      >
        <Grid
          container
          bgcolor="primary.dark"
          size={1}
          gridRow={2}
          direction={"column"}
          display={{ mobile_small: "none", tablet: "block" }}
          sx={{
            minHeight: "100%",
            padding: 3,
            borderRadius: 5,
            justifyContent: "space-around",
          }}
        >
          <Grid size={2}>
            <Typography
              component="h1"
              variant="h3"
              sx={{ fontWeight: "400", color: "white" }}
            >
              Organic <br /> Mind
            </Typography>
          </Grid>

          <Grid
            container
            direction={"column"}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              justifySelf: "center",
            }}
          >
            <Box
              component={"img"}
              src={"/homepage.png"}
              alt="cherry-blossom-tree"
              sx={{
                maxWidth: "80%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          size={1}
          minHeight={"100%"}
          direction={"column"}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default WelcomeLayout;
