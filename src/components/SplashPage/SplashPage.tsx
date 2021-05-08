import React, { useState } from "react";
import "./SplashPage.less";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import catLogo from "../../assets/cat.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiInput-underline:after": {
        borderBottomColor: "#0099ff",
      },
      "& label.Mui-focused": {
        color: "#0099ff",
      },
    },
    multilineColor: {
      color: "#0099ff",
    },
    button: {
      padding: "5px 100px",
    },
  })
);

const SplashPage: React.VoidFunctionComponent = () => {
  const [emailInput, setEmailInput] = useState("");
  const classes = useStyles();

  return (
    <div className="splash-container d-flex flex-column justify-content-center align-items-center">
      <img
        className="cat-image mt-5"
        src={catLogo}
        style={{ height: 200, width: 200 }}
        alt="cat"
      />
      <h1 className="mt-5">COMING SOON</h1>
      <h3 className="mt-4">ARE YOU READY?</h3>
      <div className="mt-2">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            InputProps={{
              className: classes.root,
            }}
            style={{ width: 275 }}
            id="standard-basic"
            value={emailInput}
            label="Your Email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setEmailInput(event.currentTarget.value)
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
            onClick={(): void => {
              setEmailInput("");
            }}
          >
            Notify Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
