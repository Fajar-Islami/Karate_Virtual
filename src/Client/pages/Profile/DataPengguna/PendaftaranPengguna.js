import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//component form
import FormDataPengguna from "./FormDataPengguna";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "36px",
    fontWeight: "600",
  },
  box: {
    margin: 30,
    marginRight: 0,
    marginTop: 0,
  },
  rootPaper: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  paperForm: {
    display: "flex",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    flexDirection: "column",
    padding: 40,
  },
}));

const PendaftaranPengguna = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <Fragment>
      <Paper className={classes.paperForm} elevation={3}>
        <div>
          <Box className={classes.title}>
            <Box display="flex" justifyContent="space-between">
              <div className={classes.title}>Edit Data Pengguna</div>
              <Box display="flex" justifyContent="flex-end" className={classes.box}>
                <Link to="/profile/datapengguna">
                  <Button variant="contained" color="primary" className={classes.button} startIcon={<ArrowBackIcon />}>
                    Kembali
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <FormDataPengguna />
          </Box>
        </div>
      </Paper>
    </Fragment>
  );
};

export default PendaftaranPengguna;
