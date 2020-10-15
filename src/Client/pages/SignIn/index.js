import React from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
  root: {
    height: "100vh",
    "& a": {
      fontWeight: "600",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/featured/?karate)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(3, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
  },
  footer: {
    marginBottom: "10px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    margin: theme.spacing(1, 0),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    padding: "12px 0px",
    fontWeight: "600",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" className={classes.root}>
      {/* <CssBaseline /> */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.body}>
          <div className={classes.content}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon fontSize="large" />
              </Avatar>
              <Typography component="h1" variant="h3">
                Masuk
              </Typography>
              <Typography component="h1" variant="h5" align="center">
                Untuk kelola Atlit Anda
              </Typography>
              <form className={classes.form} noValidate>
                <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                <FormControl className={clsx(classes.textField)} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Kata Kunci *</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={95}
                  />
                </FormControl>
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} style={{ marginLeft: "1px" }} label="Ingat Saya" />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  Masuk
                </Button>
              </form>
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <Link href="#" style={{ paddingRight: "10px" }}>
                    Lupa Kata Kunci?
                  </Link>
                </Grid>
                <Grid item xs={12} lg={6}>
                  Belum Punya Akun?&nbsp;
                  <Link to="/registration">Daftar Disini</Link>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className={classes.footer}>
            <Typography variant="body2" align="center" paragraph>
              <Link to="/" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                Kembali ke Home
              </Link>
            </Typography>
            <Copyright />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
