import { useState } from "react";
import { Link as RouterLink } from "react-router";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import BaseButton from "../components/Button";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <CssBaseline />
      <Box component={"form"} maxWidth="sm" sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h4" fontWeight={400}>
              Sign Up
            </Typography>
          </Grid>

          <Grid size={12}>
            <FormControl required fullWidth variant="outlined">
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput autoFocus id="name" type={"text"} label="Name" />
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl required fullWidth variant="outlined">
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <OutlinedInput
                autoFocus
                id="email"
                type={"email"}
                label="E-mail"
              />
            </FormControl>
          </Grid>

          <Grid size={12}>
            <FormControl required fullWidth variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>

          <Grid size={12}>
            <BaseButton type="submit" variant="contained" fullWidth>
              Create Account
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
              Already have an account?
            </Typography>
            <Link display={"inline-block"} component={RouterLink} to={"/login"}>
              Login
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SignupPage;
