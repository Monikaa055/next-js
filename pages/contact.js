import React, { useState } from "react";
import axios from "axios";
import { Link } from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios.get("").then(
      ((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4bb543",
        });
      }).catch(
        (err) => setLoading(false),
        setAlert({
          open: true,
          message: "Something went wrong",
          backgroundColor: "#ff3232",
        })
      )
    );
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ paddingLeft: 10 }}
      />
    </React.Fragment>
  );

  return (
    <Grid container direction="row" style={{ marginTop: 150 }}>
      <Grid
        item
        container
        direction="column"
        lg={5}
        xl={3}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>

            <Grid item container>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  (555) 555-5555
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img
                  src="/assets/emailIcon.svg"
                  alt="email"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  dummy@dummy.com
                </Typography>
              </Grid>
            </Grid>

            <Grid item container direction="column" alignItems="center">
              <Grid item>
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  multiline
                  rows={10}
                  value={message}
                  className={classes.message}
                  id="message"
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
              <Grid item container justify="center">
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                >
                  {buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Confirm Message
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item>
              <TextField
                fullWidth
                label="Name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                value={message}
                className={classes.message}
                id="message"
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid item container className={classes.background} lg={7} xl={9}></Grid>
    </Grid>
  );
};

export default Contact;
