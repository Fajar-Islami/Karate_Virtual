import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
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

import { data } from "./data";
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
  button: {
    fontWeight: "600",
  },
}));

const PendaftaranPerorangan = () => {
  const classes = useStyles();

  const { id } = useParams();
  const angka = (tes) => {
    return parseInt(tes, 10);
  };
  const cari = (idC) => {
    return data.filter((item) => {
      return item.id === idC;
    });
  };

  const dataRows = cari(angka(id))[0];
  console.log(dataRows);
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
            <Typography style={{ marginTop: 20, fontSize: 24 }} variant="h6" gutterBottom>
              {/* ({dataRows.idKontingen}) */}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box style={{ marginBottom: 50 }}>{/* <IdentitasAtlet /> */}</Box>
    </Fragment>
  );
};

export default PendaftaranPerorangan;
