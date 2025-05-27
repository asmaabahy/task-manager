import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import type { Severity } from "../utils/types";

interface BaseAlertProps {
  open: boolean;
  severity: Severity;
  alertTitle: string;
  alertMessage: string;
}

function BaseAlert({
  open,
  severity,
  alertTitle,
  alertMessage,
}: BaseAlertProps) {
  if (open) {
    return (
      <Alert severity={severity}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertMessage}
      </Alert>
    );
  }
}

export default BaseAlert;
