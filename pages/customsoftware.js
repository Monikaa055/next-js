import React from "react";
import Lottie from "react-lottie";
import { Link } from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "../components/ui/ButtonArrow";

import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data";

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

const CustomSoftware = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      direction="column"
      style={{ marginTop: "150px" }}
      className={classes.mainContainer}
    >
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
      <Grid item container direction="row" justify="center">
        <Grid
          item
          container
          md
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="light bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="space-around"
        style={{ marginTop: "5em" }}
      >
        <Grid item container className={classes.itemContainer}>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti aperiam reprehenderit suscipit nam facere. Omnis sequi
                vitae distinctio dolores sint obcaecati numquam veniam enim?
                Ipsam adipisci omnis error mollitia illum!
              </Typography>

              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti aperiam reprehenderit suscipit nam facere. Omnis sequi
                vitae distinctio dolores sint obcaecati numquam veniam enim?
                Ipsam adipisci omnis error mollitia illum!
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer}>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right" gutterBottom>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti aperiam reprehenderit suscipit nam facere. Omnis sequi
                vitae distinctio dolores sint obcaecati numquam veniam enim?
                Ipsam adipisci omnis error mollitia illum!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="center">
        <Grid
          item
          container
          direction="column"
          className={classes.itemContainer}
          alignItems="center"
        >
          <Grid item>
            <img
              src="/assets/root.svg"
              alt="root"
              height="450em"
              width="450em"
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Root-Cause Analysis
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              aperiam reprehenderit suscipit nam facere. Omnis sequi vitae
              distinctio dolores sint obcaecati numquam veniam enim? Ipsam
              adipisci omnis error mollitia illum!
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <leftTextrightImage
        heading="Automation"
        desc1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam reprehenderit suscipit nam facere. Omnis sequi vitae distinctio dolores sint obcaecati numquam veniam enim? Ipsam adipisci omnis error mollitia illum!"
      />
    </Grid>
  );
};

export default CustomSoftware;
