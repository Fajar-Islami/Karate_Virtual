import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  ket: {
    width: "30%",
    fontFamily: "Poppins !important",
    fontSize: "0.9rem",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      width: "100%",
    },
  },
}));

export default function InputPassRegis() {
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
    <>
      <div className={classes.root}>
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
        <FormHelperText className={classes.ket}>Kata kunci untuk masuk kedalam akun </FormHelperText>
      </div>
      <div className={classes.root}>
        <FormControl className={clsx(classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Masukan Ulang Kata Kunci *</InputLabel>
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
            labelWidth={210}
          />
        </FormControl>
      </div>
    </>
  );
}
