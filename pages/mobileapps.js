import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import ButtonArrow from "../components/ui/ButtonArrow";

import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em",
  },
  heading: {
    maxWidth: "50em",
  },
  arrowContainer: {
    marginTop: "0.5rem",
  },
  itemContainer: {
    maxWidth: "50em",
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column" style={{ marginTop: "6em" }}>
      <Grid item container direction="row">
        <Grid
          item
          class={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5rem" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            href="/services"
            onClick={() => props.setSelectedIndex(0)}
          >
            <img src="/assets/backArrow.svg" alt="Back arrow" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              minima magnam eligendi earum enim ut praesentium itaque illum
              deleniti, sequi, sunt culpa quibusdam libero nobis commodi
              exercitationem suscipit? Eveniet quo voluptatem, distinctio sed
              nisi natus voluptatibus quasi officia autem omnis sunt nostrum
              excepturi temporibus illo, labore qui odio iste unde tempore.
              Quam, facere nulla alias eum ut accusamus harum! Expedita minus
              exercitationem quis quaerat numquam corporis odio facere
              perferendis hic pariatur! Et voluptatem quos placeat minus sed
              mollitia corrupti at enim dolorem rem sint dolore inventore
              tempora, quae voluptas fugiat, alias consectetur excepturi porro?
              Nemo debitis expedita minima blanditiis natus?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Enim, voluptas? Ad quam,
              voluptatem, repellendus labore necessitatibus fuga est ea dicta a
              itaque sit. Numquam similique tempore odio veniam, porro
              excepturi?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              minima magnam eligendi earum enim ut praesentium itaque illum
              deleniti, sequi, sunt culpa quibusdam libero nobis commodi
              exercitationem suscipit? Eveniet quo voluptatem, distinctio sed
              nisi natus voluptatibus quasi officia autem omnis sunt nostrum
              excepturi temporibus illo, labore qui odio iste unde tempore.
              Quam, facere nulla alias eum ut accusamus harum! Expedita minus
              exercitationem quis quaerat numquam corporis odio facere
              perferendis hic pariatur! Et voluptatem quos placeat minus sed
              mollitia corrupti at enim dolorem rem sint dolore inventore
              tempora, quae voluptas fugiat, alias consectetur excepturi porro?
              Nemo debitis expedita minima blanditiis natus?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Enim, voluptas? Ad quam,
              voluptatem, repellendus labore necessitatibus fuga est ea dicta a
              itaque sit. Numquam similique tempore odio veniam, porro
              excepturi?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              minima magnam eligendi earum enim ut praesentium itaque illum
              deleniti, sequi, sunt culpa quibusdam libero nobis commodi
              exercitationem suscipit? Eveniet quo voluptatem, distinctio sed
              nisi natus voluptatibus quasi officia autem omnis sunt nostrum
              excepturi temporibus illo, labore qui odio iste unde tempore.
              Quam, facere nulla alias eum ut accusamus harum! Expedita minus
              exercitationem quis quaerat numquam corporis odio facere
              perferendis hic pariatur! Et voluptatem quos placeat minus sed
              mollitia corrupti at enim dolorem rem sint dolore inventore
              tempora, quae voluptas fugiat, alias consectetur excepturi porro?
              Nemo debitis expedita minima blanditiis natus?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Enim, voluptas? Ad quam,
              voluptatem, repellendus labore necessitatibus fuga est ea dicta a
              itaque sit. Numquam similique tempore odio veniam, porro
              excepturi?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              minima magnam eligendi earum enim ut praesentium itaque illum
              deleniti, sequi, sunt culpa quibusdam libero nobis commodi
              exercitationem suscipit? Eveniet quo voluptatem, distinctio sed
              nisi natus voluptatibus quasi officia autem omnis sunt nostrum
              excepturi temporibus illo, labore qui odio iste unde tempore.
              Quam, facere nulla alias eum ut accusamus harum! Expedita minus
              exercitationem quis quaerat numquam corporis odio facere
              perferendis hic pariatur! Et voluptatem quos placeat minus sed
              mollitia corrupti at enim dolorem rem sint dolore inventore
              tempora, quae voluptas fugiat, alias consectetur excepturi porro?
              Nemo debitis expedita minima blanditiis natus?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Enim, voluptas? Ad quam,
              voluptatem, repellendus labore necessitatibus fuga est ea dicta a
              itaque sit. Numquam similique tempore odio veniam, porro
              excepturi?
            </Typography>
          </Grid>
        </Grid>
        <Grid item class={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            href="/mobile-app-developement"
            onClick={() => props.setSelectedIndex(2)}
          >
            <img src="/assets/forwardArrow.svg" alt="Forward arrow" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileApps;
