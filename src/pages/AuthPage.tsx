import { useRef, useState, type FormEvent } from "react";
import { Link as RouterLink, useSearchParams } from "react-router";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import BaseButton from "../components/Button";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { useAuth } from "../store/auth";
import BaseInput from "../components/BaseInput";
import type { Status } from "../utils/types";
import BaseAlert from "../components/BaseAlert";
import Container from "@mui/material/Container";

function LoginPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { register } = useAuth();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");

  const isLogin = searchParams.get("mode") === "login";

  const pageLabel = isLogin ? "Sign in" : "Sing up";
  const submitButtonLabel = isLogin ? "Sign in" : "Create account";
  const switchModeLink = isLogin ? "/auth?mode=signup" : "/auth?mode=login";
  const switchModeLinkLabel = isLogin ? "Create account" : "Login";
  const switchModeQuestion = isLogin
    ? "Don't have an account?"
    : "Already have an account?";

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!isLogin && formRef.current) {
      setStatus("loading");

      const formData = new FormData(formRef.current);
      const email = formData.get("email")?.toString().trim() || "";
      const password = formData.get("password")?.toString() || "";

      if (!email || !password) {
        setStatus("error");
        return console.error("Email and password are required.");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setStatus("error");
        console.error("Invalid email format.");
        return;
      }

      if (password.length < 6) {
        setStatus("error");
        console.error("Password must be at least 6 characters.");
        return;
      }

      try {
        await register({ email, password });
        setStatus("success");
      } catch {
        console.log("Registration failed:");
      }
    }
  }

  return (
    <>
      <CssBaseline />
      <Container component={"main"} sx={{ maxWidth: "30rem" }}>
        <Box
          ref={formRef}
          component={"form"}
          onSubmit={handleSubmit}
          autoComplete="new-password"
          sx={{ marginBottom: 2 }}
        >
          <Grid container spacing={2}>
            <Grid size={12}>
              <Typography variant="h4" fontWeight={400}>
                {pageLabel}
              </Typography>
            </Grid>

            {!isLogin && (
              <Grid size={12}>
                <BaseInput
                  id="fullname"
                  name="fullname"
                  type={"text"}
                  label="Fullname"
                  placeholder="Enter your name"
                />
              </Grid>
            )}

            <Grid size={12}>
              <BaseInput
                id="email"
                name="email"
                type={"email"}
                label="E-mail"
                placeholder="email@example.com"
              />
            </Grid>

            <Grid size={12}>
              <BaseInput
                id="password"
                name="password"
                type={"password"}
                label="Password"
                placeholder="Enter at least 6 character password"
              />
            </Grid>

            <Grid size={12}>
              <BaseAlert
                open={status === "error"}
                severity="error"
                alertTitle="Hello"
                alertMessage={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod atque voluptates optio eligendi? Veniam earum nostrum nesciunt odio porro?"
                }
              />
            </Grid>

            <Grid size={12}>
              <BaseButton
                loading={status === "loading"}
                loadingPosition="start"
                type="submit"
                variant="contained"
                fullWidth
              >
                {submitButtonLabel}
              </BaseButton>
            </Grid>
          </Grid>
        </Box>

        <Box maxWidth="sm">
          <Grid container spacing={2}>
            <Grid size={12}>
              <Typography
                align="center"
                color="textSecondary"
                sx={{ marginBottom: 2 }}
              >
                or sign in using :
              </Typography>
            </Grid>
            <Grid size={6}>
              <BaseButton
                sx={{ color: "secondary" }}
                variant="contained"
                fullWidth
              >
                Google
              </BaseButton>
            </Grid>
            <Grid size={6}>
              <BaseButton
                sx={{ bgcolor: "secondary-100" }}
                variant="contained"
                fullWidth
              >
                Facebook
              </BaseButton>
            </Grid>
            <Grid textAlign={"center"} size={12}>
              <Typography
                display={"inline-block"}
                marginRight={1}
                align="center"
                color="textSecondary"
                fontWeight={900}
              >
                {switchModeQuestion}
              </Typography>
              <Link
                display={"inline-block"}
                component={RouterLink}
                to={switchModeLink}
              >
                {switchModeLinkLabel}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default LoginPage;
