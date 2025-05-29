import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import AuthProvider from "./store/auth.tsx";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./assets/theme.ts";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
