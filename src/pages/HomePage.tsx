import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink, useNavigate } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import BaseButton from "../components/Button";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid columns={1} container spacing={2}>
          <Typography variant="h4" fontWeight={400}>
            Productive Mind
          </Typography>

          <Typography
            variant="subtitle1"
            component={"p"}
            maxWidth="28rem"
            color="textSecondary"
            gutterBottom
          >
            With only the features you need, Organic Mind is customized for
            individuals seeking a stress free-way to stay focused on their
            goals, projects, and tasks
          </Typography>

          <BaseButton
            variant="contained"
            fullWidth
            onClick={() => navigate("/auth?mode=signup")}
          >
            Get Started
          </BaseButton>

          <Typography
            width={"100%"}
            textAlign="center"
            variant="subtitle1"
            gutterBottom
            fontWeight={800}
            color="textSecondary"
          >
            Already have an account?
            <RouterLink
              to={"/auth?mode=login"}
              className="text-black underline mx-2"
            >
              Sign in
            </RouterLink>
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
