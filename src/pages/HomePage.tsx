import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink, useNavigate } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import BaseButton from "../components/Button";
import Link from "@mui/material/Link";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Container sx={{ maxWidth: "30rem" }}>
        <Grid columns={1} container spacing={2}>
          <Grid size={1}>
            <Typography variant="h4" component={'h1'} fontWeight={700}>
              Productive Mind
            </Typography>
          </Grid>

          <Grid size={1}>
            <Typography
              variant="subtitle1"
              component={"p"}
              gutterBottom
              color="textSecondary"
            >
              With only the features you need, Organic Mind is customized for
              individuals seeking a stress free-way to stay focused on their
              goals, projects, and tasks
            </Typography>
          </Grid>

          <Grid size={1}>
            <BaseButton
              variant="contained"
              fullWidth
              onClick={() => navigate("/auth?mode=signup")}
            >
              Get Started
            </BaseButton>
          </Grid>

          <Grid size={1}>
            <Typography
              component={"p"}
              width={"100%"}
              textAlign="center"
              variant="subtitle1"
              gutterBottom
              fontWeight={800}
              color="textSecondary"
            >
              Already have an account?
              <Link
                to={"/auth?mode=login"}
                component={RouterLink}
                sx={{ marginX: 1 }}
              >
                Sign in
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
