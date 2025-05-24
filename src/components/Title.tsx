import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

function Title({ children, color }: { children: ReactNode; color: string }) {
  return (
    <Typography
      variant="h3"
      className="select-none"
      fontSize={"4rem"}
      fontWeight={700}
      color={color}
    >
      {children}
    </Typography>
  );
}

export default Title;
