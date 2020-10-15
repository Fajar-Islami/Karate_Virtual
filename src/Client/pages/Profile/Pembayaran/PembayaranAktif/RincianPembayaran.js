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
    marginTop: 30,
    marginLeft: 30,
    width: "100%",
    maxWidth: 500,
    height: "100%",
    maxHeight: 300,
    fontSize: 16,
  },
  boxTable: {
    marginTop: 20,
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
function createDataKet(nomor, klasifikasi, perorangan, beregu) {
  return { nomor, klasifikasi, perorangan, beregu };
}

const rows = [createData(1, "Peserta Open Perorangan", 175000, 2, 350000), createData(2, "Peserta Open Beregu", 300000, 1, 300000), createData(3, "Peserta Festival", 195000, 1, 195000)];
const rows1 = [createDataKet(1, "Pra-pemula", 0, 1), createDataKet(2, "Kadet", 1, 1), createDataKet(3, "Yunior", 1, 1), createDataKet(4, "Senior", 1, 1)];
const RincianPembayaran = () => {
  const classes = useStyles();
  return (
    <Fragment>
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

      <Box className={classes.rincian}>
        <span className={classes.title}>Keterangan Klasifikasi</span>
      </Box>
      <Box display="flex" justifyContent="center" className={classes.boxTable}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell align="left">Klasifikasi</StyledTableCell>
                <StyledTableCell align="left">Peorangan</StyledTableCell>
                <StyledTableCell align="left">Beregu</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <StyledTableRow key={row.nomor}>
                  <StyledTableCell component="th" scope="row">
                    {row.nomor}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.klasifikasi}</StyledTableCell>
                  <StyledTableCell align="left">{row.perorangan}</StyledTableCell>
                  <StyledTableCell align="left">{row.beregu}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="left">Total Peserta</StyledTableCell>
                <StyledTableCell align="left">3</StyledTableCell>
              </StyledTableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>

      <Paper elevation={3} className={classes.paperInfo}>
        <div className={classes.gridContainer}>
          <Grid container spacing={1}>
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

export default RincianPembayaran;
