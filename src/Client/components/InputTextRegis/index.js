import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormHelperText, InputLabel, Input, InputAdornment, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  baris: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    width: "70%",
  },
}));

export default function InputTextRegis({ textField = "", ket = "" }) {
  const classes = useStyles();

  console.log(document.body.bgColor);
  return (
    <span className={classes.baris}>
      <TextField id="outlined-basic" label={textField} variant="outlined" className={classes.input} required />
      <FormHelperText id="my-helper-text">{ket} </FormHelperText>
    </span>
  );
}
