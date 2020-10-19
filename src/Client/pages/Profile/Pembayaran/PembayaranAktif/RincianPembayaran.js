import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
// importing Material-UI Components
import { Paper, Box } from "@material-ui/core";
import { ScrollToTop } from "../../../../config";
// importing components
import { TablePembayaran } from "../../../../components";
import { TableKlasifikasi } from "../../../../components";

import { rincianPembayaran, klasifikasiPembayaran } from "./data/data.jsx";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "600",
    fontSize: "24px",
  },
  rincian: {
    fontFamily: "Poppins !important",
    marginTop: 20,
    // marginLeft: 30,
    width: "100%",
    maxWidth: 500,
    height: "100%",
    maxHeight: 300,
    fontSize: 16,
  },
  boxTable: {
    marginTop: 20,
  },
  table: {
    minWidth: 500,
    "& th": {
      fontWeight: "600",
    },
  },
  paperInfo: {
    margin: "30px 0px",
    backgroundColor: "#757575",
    color: "#ffffff",
    justifyContent: "center",
  },
  gridContainer: {
    marginRight: 30,
    display: "flex",
    alignItems: "center",
  },
}));

const RincianPembayaran = () => {

  const classes = useStyles();
  return (
    <Fragment>
      <ScrollToTop />
      <Box className={classes.rincian}>
        <span className={classes.title}>Rincian Pembayaran</span>
        <div>
          Nama Dojo: Phoenix
          <br />
          Nama Pengguna: Mawang
          <br />
          Nomor Telepon: 082112345678
        </div>
      </Box>

      <TablePembayaran rincianPembayaran={rincianPembayaran}/>
     
      <Box className={classes.rincian}>
        <span className={classes.title}>Keterangan Klasifikasi</span>
      </Box>

      <TableKlasifikasi klasifikasiPembayaran={klasifikasiPembayaran} />

      <Paper elevation={3} className={classes.paperInfo}>
        <div className={classes.gridContainer}>
          {/* <Grid container spacing={1}> */}
          {/* <Grid item xs={12} xs={3}> */}
          <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>Metode Pembayaran</h2>
          {/* </Grid> */}
          {/* <Grid item xs={12} xs={9}> */}
          <p style={{ textAlign: "justify" }}>
            Biaya pedaftaran ditransfer ke rekening panitia berikut: <strong>Bank DKI No: 52723090450 a.n. Eko Supriyanto.</strong>
            <br />
            Peserta mentransfer sesuai jadwal yang ditentukan dan struk bukti transfer diunggah melalui aplikasi ini.
          </p>
          {/* </Grid> */}
          {/* </Grid> */}
        </div>
      </Paper>
    </Fragment>
  );
};

export default RincianPembayaran;
