import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";

import { lightBlue } from "@material-ui/core/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/" style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.54)" }}>
        Brilyan Sport Technology
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    borderRadius: 20,
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(lightBlue[50]),
    backgroundColor: lightBlue[50],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: "600",
  },
}));

const Masuk = () => {
  const classes = useStyles();
  useEffect(() => {
    document.body.bgColor = "#D2E4FF";
    document.title = "Masuk Admin";
    return () => {
      document.body.bgColor = "";
    };
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      {/* <Paper elevation={3} className={classes.paper}> */}
      <Grid item xs={12} component={Paper} elevation={3} className={classes.paper}>
        {/* <div className={classes.paper}> */}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Masuk
        </Typography>
        <Typography component="h1" variant="h5" align="center">
          Untuk kelola Atlet Anda
        </Typography>
        <form className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Username" name="email" autoComplete="email" autoFocus />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Masuk
          </Button>
        </form>
        {/* </div> */}
        <Box mt={8}>
          <Copyright />
        </Box>
      </Grid>
      {/* </Paper> */}
    </Container>
  );
};

export default Masuk;
