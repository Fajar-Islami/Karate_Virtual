import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
// importing Material-UI Components
import { Paper, Box } from "@material-ui/core";
import { ScrollToTop } from "../../../../config";
// importing components
import { TablePembayaran } from "../../../../components";
// importing Data
import { rincianPembayaran, klasifikasiPembayaran } from "./data/data.jsx";
import CetakInvoice from "./CetakInvoice";
import UploadBukti from "./UploadBukti";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "600",
    fontSize: "24px",
  },
  pengumumanBayar: {
    textAlign: "center",
    color: "#F90505",
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
  paperInvoice: {
    
  }
}));

const ProsesPembayaran = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <ScrollToTop />
      {/* <Box className={classes.title}>
        <Typography style={{ fontSize: 30 }} variant="h4" gutterBottom>
          Pembayaran Aktif
        </Typography>
      </Box> */}
      <Box display="flex" justifyContent="center" className={classes.pengumumanBayar}>
        <span style={{ fontWeight: "600", fontSize: "30px" }}>PEMBAYARAN BELUM SELESAI</span>
      </Box>
      <Box display="flex" justifyContent="center" className={classes.pengumumanBayar}>
        <span style={{ fontSize: 18 }} gutterBottom>
          SEGERA LUNASI PEMBAYARAN ANDA UNTUK MENDAFTARKAN ATLET BARU
        </span>
      </Box>
      <Box className={classes.rincian}>
        <span className={classes.title}>Rincian Pembayaran</span>
        <div>
          Nama Dojo: Phoenix
          <br />
          Nama Pengguna: Mawang
          <br />
          Nomor Telepon: 082112345678
          <br />
          Waktu Proses Pembayaran: 10/13/2020 16:22:10
          <br />
          Nomor Transaksi: TR-10-13-2020-001
        </div>
      </Box>

      <TablePembayaran rincianPembayaran={rincianPembayaran} />
      
      <Paper elevation={3} className={classes.paperInfo}>
        <div className={classes.gridContainer}>
          <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>Metode Pembayaran</h2>
          <p style={{ textAlign: "justify" }}>
            Biaya pedaftaran ditransfer ke rekening panitia berikut: <strong>Bank DKI No: 52723090450 a.n. Eko Supriyanto.</strong>
            <br />
            Peserta mentransfer sesuai jadwal yang ditentukan dan struk bukti transfer diunggah melalui aplikasi ini.
          </p>
        </div>
      </Paper>
      <Box>
        <UploadBukti/>
      </Box>
    </Fragment>
  );
};

export default ProsesPembayaran;
