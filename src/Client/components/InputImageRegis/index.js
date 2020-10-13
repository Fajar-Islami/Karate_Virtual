import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    // border: "1px solid black",
    width: "65%",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  input: {
    margin: "8px 0px !important",
  },
  ket: {
    width: "30%",
    fontFamily: "Poppins !important",
    fontSize: "0.9rem",
  },
}));

export default function InputImageRegis() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormHelperText className={classes.ket}>Masukan Foto </FormHelperText>
      <input accept="image/x-png,image/gif,image/jpeg" className={classes.input} type="file" label="Outlined" variant="outlined" />
    </div>
  );
}
