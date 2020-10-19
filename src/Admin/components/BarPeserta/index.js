import React from "react";
import { makeStyles, Paper, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#bbdefb",
    color: "#0d47a1",
    width: "100%",
    height: theme.spacing(9),
    justifyContent: "center",
  },
}));

const BarPeserta = ({ title = "" }) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paperTitle}>
      <Box display="flex" justifyContent="center">
        <h3 style={{ fontSize: 20 }}> {title} </h3>
      </Box>
    </Paper>
  );
};

export default BarPeserta;
