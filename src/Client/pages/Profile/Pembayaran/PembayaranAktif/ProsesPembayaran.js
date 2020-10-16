import React, { Fragment } from "react";
//style
import { withStyles, makeStyles } from "@material-ui/core/styles";
//component
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

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
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#039be5",
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#039be5",
    color: theme.palette.common.white,
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(nomor, rincianBayar, hargaSatuan, kuantitas, subTotal) {
  return { nomor, rincianBayar, hargaSatuan, kuantitas, subTotal };
}

const rows = [createData(1, "Peserta Open Perorangan", 175000, 2, 350000), createData(2, "Peserta Open Beregu", 300000, 1, 300000), createData(3, "Peserta Festival", 195000, 1, 195000)];

const ProsesPembayaran = () => {
  const classes = useStyles();
  return (
    <Fragment>
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
      <Box display="flex" justifyContent="center" className={classes.boxTable}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" width="8%">
                  No.
                </StyledTableCell>
                <StyledTableCell align="left">Rincian Pembayaran</StyledTableCell>
                <StyledTableCell align="center" width="15%">
                  Harga Satuan
                </StyledTableCell>
                <StyledTableCell align="center" width="15%">
                  Kuantitas
                </StyledTableCell>
                <StyledTableCell align="center" width="15%">
                  Subtotal
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow hover key={row.nomor}>
                  <StyledTableCell align="center">{row.nomor}</StyledTableCell>
                  <StyledTableCell align="left">{row.rincianBayar}</StyledTableCell>
                  <StyledTableCell align="center">{row.hargaSatuan}</StyledTableCell>
                  <StyledTableCell align="center">{row.kuantitas}</StyledTableCell>
                  <StyledTableCell align="center">{row.subTotal}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" align="center" colspan={4}>
                  Total Pembayaran
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  845000
                </StyledTableCell>
              </StyledTableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
      <Paper elevation={3} className={classes.paperInfo}>
        <div className={classes.gridContainer}>
          <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>Metode Pembayaran</h2>
          <p style={{ textAlign: "justify" }}>
            Biaya pedaftaran ditransfer ke rekening panitia berikut: <strong>Bank DKI No: 52723090450 a.n. Eko Supriyanto.</strong>
            <br />
            Peserta mentransfer sesuai jadwal yang ditentukan dan struk bukti transfer dikirim melalui Whatsapp 0859-2119-4336.
          </p>
        </div>
      </Paper>
    </Fragment>
  );
};

export default ProsesPembayaran;
