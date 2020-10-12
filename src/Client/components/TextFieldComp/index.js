import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  baris: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  input: {
    width: "70%",
  },
}));

export default function TextFieldComp() {
  const classes = useStyles();

  console.log(document.body.bgColor);
  return (
    <span className={classes.baris}>
      <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.input} required />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </span>
  );
}
