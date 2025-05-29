import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

interface BaseButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export default function BaseButton({ children, ...props }: BaseButtonProps) {
  return (
    <Button color="secondary" {...props} sx={{ borderRadius: 2, paddingY: 1 }}>
      {children}
    </Button>
  );
}
