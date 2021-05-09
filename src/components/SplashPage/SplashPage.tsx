import React, { useState } from "react";
import "./SplashPage.less";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import validator from "validator";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import catLogo from "../../assets/cat.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#0099ff",
      },
      "& label.Mui-focused": {
        color: "#0099ff",
      },
    },
    button: {
      padding: "5px 100px",
    },
  })
);

interface SplashPageState {
  isSuccessMessage: boolean;
  isLoading: boolean;
  alert: boolean;
  emailInput: string;
}

const SplashPage: React.VoidFunctionComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, setState] = useState<SplashPageState>({
    isSuccessMessage: false,
    isLoading: false,
    alert: false,
    emailInput: "",
  });
  const classes = useStyles();

  const handleClose = (): void => {
    setState({ ...state, alert: false });
  };

  const onSubmit = (): void => {
    if (validator.isEmail(state.emailInput)) {
      setState({ ...state, emailInput: "", isLoading: true });
      setIsSubmitted(true);

      setTimeout(() => {
        setState({ ...state, isLoading: false, isSuccessMessage: true });
      }, 1500);
    } else {
      setState({ ...state, alert: true });
    }
  };

  return (
    <div className="splash-container d-flex flex-column justify-content-center align-items-center">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
        open={state.alert}
        autoHideDuration={5000}
      >
        <Alert onClose={handleClose} severity="error">
          Please enter a valid email address.
        </Alert>
      </Snackbar>
      <img
        className="cat-image mt-5"
        src={catLogo}
        style={{ height: 200, width: 200 }}
        alt="cat"
      />
      <h1 className="mt-5">COMING SOON</h1>
      <h3 className="mt-4">ARE YOU READY?</h3>
      <div className="mt-2">
        {!isSubmitted && (
          <>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                InputProps={{
                  className: classes.root,
                }}
                style={{ width: 275 }}
                id="standard-basic"
                value={state.emailInput}
                label="Your Email"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  setState({ ...state, emailInput: event.currentTarget.value })
                }
              />
            </form>
            <div className={`mt-3 ${classes.root}`}>
              <Button
                className={classes.button}
                variant="outlined"
                style={{
                  color: "grey",
                  borderRadius: 40,
                  border: "2px solid #0099ff",
                }}
                onClick={onSubmit}
              >
                Notify Me
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="mt-5 loading-bar d-flex justify-content-center flex-column">
        {state.isLoading && (
          <>
            <div className={classes.root}>
              <LinearProgress />
            </div>
            <p className="mt-3">Sending Data . . . </p>
          </>
        )}
        {state.isSuccessMessage && (
          <Alert severity="success">
            Email Recieved! Thank you for believing in Litter! ^_^
          </Alert>
        )}
      </div>
    </div>
  );
};

export default SplashPage;
