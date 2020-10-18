import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins !important",
  },
  button: {
    margin: theme.spacing(1),
    fontWeight: "600",
    fontFamily: "Poppins !important",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h1 style={{ marginLeft: "10px" }}>Halaman Home</h1>
      <Box display="flex">
        <a href="/signin">
          <Button variant="contained" className={classes.button} color="primary">
            Masuk
          </Button>
        </a>
        <a href="/registration">
          <Button variant="contained" className={classes.button} color="primary">
            Registrasi
          </Button>
        </a>
        <Link to="/profile/">
          <Button variant="contained" className={classes.button} color="primary">
            Profil
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
