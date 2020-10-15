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
    marginTop: 30,
    marginLeft: 30,
    width: "100%",
    maxWidth: 500,
  },
  pengumumanBayar: {
    textAlign: "center",
    color: "#F90505",
  },
  rincian: {
    marginTop: 30,
    marginLeft: 30,
    width: "100%",
    maxWidth: 500,
    height: "100%",
    maxHeight: 300,
    fontSize: 16,
  },
  boxTable: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  table: {
    minWidth: 500,
  },
  paperInfo: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 50,
    backgroundColor: "#757575",
    color: "#ffffff",
    justifyContent: "center",
  },
  gridContainer: {
    marginLeft: 30,
    marginRight: 30,
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
      <Box display="flex" justifyContent="center" className={classes.pengumumanBayar} style={{ marginTop: 40 }}>
        <Typography style={{ fontSize: 22 }} variant="h4" gutterBottom>
          PEMBAYARAN BELUM SELESAI
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" className={classes.pengumumanBayar} style={{ marginTop: 5 }}>
        <Typography style={{ fontSize: 18 }} variant="h6" gutterBottom>
          SEGERA LUNASI PEMBAYARAN ANDA UNTUK MENDAFTARKAN ATLET BARU
        </Typography>
      </Box>
      <Box className={classes.rincian}>
        <p style={{ fontWeight: "bolder" }}>Rincian Pembayaran</p>
        <p>
          Nama Dojo: Phoenix
          <br />
          Nama Pengguna: Mawang
          <br />
          Nomor Telepon: 082112345678
          <br />
          Waktu Proses Pembayaran: 10/13/2020 16:22:10
          <br />
          Nomor Transaksi: TR-10-13-2020-001
        </p>
      </Box>
      <Box display="flex" justifyContent="center" className={classes.boxTable}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell align="left">Rincian Pembayaran</StyledTableCell>
                <StyledTableCell align="left">Harga Satuan</StyledTableCell>
                <StyledTableCell align="left">Kuantitas</StyledTableCell>
                <StyledTableCell align="left">Subtotal</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.nomor}>
                  <StyledTableCell component="th" scope="row">
                    {row.nomor}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.rincianBayar}</StyledTableCell>
                  <StyledTableCell align="left">{row.hargaSatuan}</StyledTableCell>
                  <StyledTableCell align="left">{row.kuantitas}</StyledTableCell>
                  <StyledTableCell align="left">{row.subTotal}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="left">Total Pembayaran</StyledTableCell>
                <StyledTableCell align="left">845000</StyledTableCell>
              </StyledTableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
      <Paper elevation={3} className={classes.paperInfo}>
        <div className={classes.gridContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} xs={3}>
              <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>Metode Pembayaran</h2>
            </Grid>
            <Grid item xs={12} xs={9}>
              <p style={{ textAlign: "justify" }}>
                Biaya pedaftaran ditransfer ke rekening panitia berikut: <strong>Bank DKI No: 52723090450 a.n. Eko Supriyanto.</strong>
                <br />
                Peserta mentransfer sesuai jadwal yang ditentukan dan struk bukti transfer dikirim melalui Whatsapp 0859-2119-4336.
              </p>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Fragment>
  );
};

export default ProsesPembayaran;
