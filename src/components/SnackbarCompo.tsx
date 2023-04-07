import React, { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { MoviesContext } from "../context/MoviesContext";

type SnackbarComponentProps = {
  open: boolean;
  handleClose:(e:Event | React.SyntheticEvent<any, Event>)=>void
};

const SnackbarComponent = ({ open, handleClose }: SnackbarComponentProps) => {
  const { message } = useContext(MoviesContext);
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
