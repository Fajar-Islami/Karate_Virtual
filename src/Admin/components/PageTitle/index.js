import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "36px",
    fontWeight: "600",
  },
}));

export default function Title({ title = "blank" }) {
  const classes = useStyles();
  return <div className={classes.title}> {title} </div>;
}
