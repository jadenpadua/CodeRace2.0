import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import "./AboutPage.less";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AboutPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className="container d-flex justify-content-center">
        <Box width="50%">
          <Card className={classes.root}>
            <CardContent>
              <div className="about-container d-flex justify-content-center flex-column align-items-center">
                <h3>
                  About <span>Litter</span>
                </h3>
                <div className="d-flex justify-content-center content-container">
                  <p>
                    Litter is a revolutionary social media app that replaces the
                    political and toxic parts of Twitter and replaces it with
                    (wait for it)…cats!!! At Litter, our cat messengers are
                    pioneering the way we share meaningful experiences and
                    create memories. Whether you want to take a break from the
                    unpleasant parts of social media or get your daily serotonin
                    fix, Litter is the purrrrfect app for you ^_^.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      <div className="container-sub d-flex justify-content-around">
        <Box width="20%">
          <Card className={classes.root}>
            <CardContent>
              <div className="about-container d-flex justify-content-center flex-column align-items-center">
                <h3>
                  Adorable <span>Cats</span>
                </h3>
                <div className="d-flex justify-content-center content-container">
                  <p>
                    At Litter, Indulge in Adorable cats and get your daily
                    Serotonin Fix!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
        <Box width="20%">
          <Card className={classes.root}>
            <CardContent>
              <div className="about-container d-flex justify-content-center flex-column align-items-center">
                <h3>
                  No <span>Toxicity</span>
                </h3>
                <div className="d-flex justify-content-center content-container">
                  <p>Take a break from the toxicity of the regular internet!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
        <Box width="20%">
          <Card className={classes.root}>
            <CardContent>
              <div className="about-container d-flex justify-content-center flex-column align-items-center">
                <h3>
                  Stress <span>Free</span>
                </h3>
                <div className="d-flex justify-content-center content-container">
                  <p>Relax and meet people stress free!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};
export default AboutPage;
