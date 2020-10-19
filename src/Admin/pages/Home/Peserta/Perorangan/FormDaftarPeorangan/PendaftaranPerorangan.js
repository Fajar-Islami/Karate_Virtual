import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//component form
import IdentitasAtlet from "./IdentitasAtlet";
import { Grid } from "@material-ui/core";
import { PageTitle } from "../../../../../components";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: 30,
  },
  rootPaper: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const PendaftaranPerorangan = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <Fragment>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} sm={8}>
          <Box className={classes.title}>
            <PageTitle title="Data Peserta" />
            <Typography style={{ fontSize: 24 }} variant="h6" gutterBottom>
              Perorangan
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" justifyContent="flex-end" className={classes.box}>
            <Link to="/admin/pesertaperorangan/">
              <Button variant="contained" color="primary" className={classes.button} startIcon={<ArrowBackIcon />}>
                Kembali
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box style={{ marginBottom: 50 }}>
        <IdentitasAtlet />
      </Box>
    </Fragment>
  );
};

export default PendaftaranPerorangan;
