import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of 21st century.
            </Typography>
            <Grid container item justify={matchesSM ? "center" : undefined}>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/estimate"
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
