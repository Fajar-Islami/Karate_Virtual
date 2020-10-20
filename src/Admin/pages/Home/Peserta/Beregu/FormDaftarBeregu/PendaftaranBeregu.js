import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//component form
import IdentitasAtlet from "./IdentitasAtlet";
import TabelTim from "./TabelTim";
import { Link, useParams } from "react-router-dom";
import { PageTitle } from "../../../../../components";
import { data } from "./data";

const useStyles = makeStyles((theme) => ({
  box: {
    // marginTop: 30,
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

const PendaftaranBeregu = () => {
  const classes = useStyles();
  const { idKontingen } = useParams();
  const angka = (tes) => {
    return parseInt(tes, 10);
  };
  const cari = (idC) => {
    return data.filter((item) => {
      return item.idKontingen == idC;
    });
  };

  const dataRows = cari(angka(idKontingen))[0];

  return (
    <Fragment>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} sm={8}>
          <Box>
            <PageTitle title="Data Tim Beregu" />
            <Typography style={{ fontSize: 24 }} variant="h6" gutterBottom>
              Nama Kontingen : {dataRows.namaKontingen} ({dataRows.id})
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="end" flexDirection="column" className={classes.box}>
            <Link to="/admin/pesertaberegu">
              <Button variant="contained" color="primary" className={classes.button} startIcon={<ArrowBackIcon />}>
                Kembali
              </Button>
            </Link>
            <Typography style={{ marginTop: 20, fontSize: 24 }} variant="h6" gutterBottom>
              ({dataRows.idKontingen})
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 50 }}>
        <Grid container spacing={3} justify="flex-end">
          <Grid item xs={12} sm={6}>
            <IdentitasAtlet data={dataRows.anggota} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TabelTim data={dataRows.anggota} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default PendaftaranBeregu;
