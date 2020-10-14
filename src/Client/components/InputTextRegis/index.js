import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  baris: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  input: {
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

export default function InputTextRegis({ textField = "", ket = "" }) {
  const classes = useStyles();

  console.log(document.body.bgColor);
  return (
    <span className={classes.baris}>
      <TextField id="outlined-basic" label={textField} variant="outlined" className={classes.input} required />
      <FormHelperText className={classes.ket}>{ket} </FormHelperText>
    </span>
  );
}
