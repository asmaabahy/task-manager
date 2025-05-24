import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

interface BaseButtonProps extends ButtonProps {
  children?: React.ReactNode;
}
const theme = createTheme({
  palette: {
    primary: amber,
  },
});

export default function BaseButton({ children, ...props }: BaseButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{children}</Button>
    </ThemeProvider>
  );
}
