// eslint-disable-next-line no-restricted-imports
import { createTheme } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

/*
sm	40rem (640px)	@media (width >= 40rem) { ... }
md	48rem (768px)	@media (width >= 48rem) { ... }
lg	64rem (1024px)	@media (width >= 64rem) { ... }
xl	80rem (1280px)	@media (width >= 80rem) { ... }
2xl	96rem (1536px)	@media (width >= 96rem) { ... }
*/

declare module "@mui/system" {
  interface BreakpointOverrides {
    // Your custom breakpoints
    mobile_small: true;
    mobile_medium: true;
    tablet: true;
    laptop: true;
    desktop: true;
    desktop_wide: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}

export default createTheme({
  breakpoints: {
    values: {
      mobile_small: 0,
      mobile_medium: 375,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
      desktop_wide: 1440,
    },
  },
  palette: {
    primary: {
      main: grey[800],
      light: grey[300],
      dark: grey[900],
    },
    secondary: {
      main: amber[400],
      light: amber[200],
      dark: amber[600],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          textTransform: "none",
        },
      },
    },
  },
});
