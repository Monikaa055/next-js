import React, { useState } from "react";
import { cloneDeep } from "lodash";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

import estimateAnimation from "../src/animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "12em",
    width: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you intrested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: "/assets/software.svg",
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "IOS/Android Development",
        subtitle: null,
        icon: "/assets/mobile.svg",
        iconAlt: "phones and tablet",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: "/assets/website.svg",
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: "/assets/website.svg",
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: "/assets/iphone.svg",
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: "/assets/android.svg",
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: "/assets/camera.svg",
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: "/assets/gps.svg",
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: "/assets/upload.svg",
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: "/assets/users.svg",
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: "/assets/biometrics.svg",
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: "/assets/bell.svg",
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: "/assets/info.svg",
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: "/assets/customized.svg",
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: "/assets/data.svg",
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: "/assets/person.svg",
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: "/assets/persons.svg",
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: "/assets/people.svg",
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: "/assets/info.svg",
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: "/assets/customized.svg",
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: "/assets/globe.svg",
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [questions, setQuestions] = useState(softwareQuestions);

  const defaultOptions = {
    loop: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };
  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === 1) {
      return true;
    } else return false;
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else return false;
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    newSelected.selected = !newSelected.selected;
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );
    switch (currentlyActive[0].subtitle) {
      case "Select one.":
    }
    setQuestions(newQuestions);
  };

  return (
    <Container style={{ marginTop: "10em" }}>
      <Grid container direction="row">
        <Grid item container direction="column" lg={6}>
          <Grid item>
            <Typography variant="h2">Estimate</Typography>
          </Grid>
          <Grid
            item
            style={{
              marginRight: "10em",
              maxWidth: "50em",
            }}
          >
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </Grid>
        </Grid>
        <Grid item container direction="column" lg={6}>
          {questions
            .filter((question) => question.active)
            .map((question, index) => (
              <React.Fragment key={index}>
                <Grid item>
                  <Typography
                    variant="h2"
                    align="center"
                    style={{
                      fontWeight: 500,
                      fontSize: "2.23rem",
                    }}
                  >
                    {question.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ marginBottom: "2.5rem" }}
                    gutterBottom
                  >
                    {question.subtitle}
                  </Typography>
                </Grid>
                <Grid item container>
                  {question.options.map((option) => (
                    <Grid
                      item
                      container
                      direction="column"
                      md
                      component={Button}
                      onClick={() => handleSelect(option.id)}
                      style={{
                        display: "grid",
                        textTransform: "none",
                        borderRadius: 0,
                        backgroundColor: option.selected
                          ? theme.palette.common.orange
                          : null,
                      }}
                    >
                      <Grid item style={{ maxWidth: "12em" }}>
                        <Typography
                          variant="h6"
                          align="center"
                          style={{ marginBottom: "1em" }}
                        >
                          {option.title}
                        </Typography>
                        <Typography variant="caption" align="center">
                          {option.subtitle}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          className={classes.icon}
                          src={option.icon}
                          alt={option.iconAlt}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            ))}

          <Grid
            item
            container
            justify="space-between"
            style={{ width: "15em", marginTop: "3em" }}
          >
            <Grid item>
              <IconButton
                disabled={navigationPreviousDisabled()}
                onClick={previousQuestion}
              >
                <img
                  src={
                    navigationPreviousDisabled ? backArrowDisabled : backArrow
                  }
                  alt="Previous question"
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={nextQuestion}
                disabled={navigationNextDisabled()}
              >
                <img
                  src={
                    navigationNextDisabled ? forwardArrowDisabled : forwardArrow
                  }
                  alt="Next question"
                />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.estimateButton}>
              Get Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Estimate;
