import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, blueGrey } from "@mui/material/colors";

interface BaseButtonProps extends ButtonProps {
  children?: React.ReactNode;
}
const theme = createTheme({
  palette: {
    primary: amber,
    secondary: blueGrey
  },
});

export default function BaseButton({ children, ...props }: BaseButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} sx={{ borderRadius: 2, paddingY: 1 }}>
        {children}
      </Button>
    </ThemeProvider>
  );
}
