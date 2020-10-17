import React, { Fragment } from "react";
//style
import { makeStyles, withStyles } from "@material-ui/core/styles";
//component
import AddBoxIcon from "@material-ui/icons/AddBox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PrintIcon from "@material-ui/icons/Print";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { ScrollToTop } from "../../../../config";

const useStyles = makeStyles(() => ({
  boxTanggal: {
    marginTop: 30,
    marginRight: 30,
  },
  divInvoice: {
    marginTop: 50,
  },
  paper: {
    border: "1px solid #000",
    padding: 16,
    marginBottom: 20,
  },
  boxNoFaktur: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 24,
  },
  table: {
    minWidth: 650,
    "& th": {
      fontWeight: "600",
    },
  },
  boxLunas: {
    marginTop: 30,
    marginRight: 60,
    marginBottom: 20,
    color: "#3BB957",
  },
  boxKeterangan: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
  footer: {
    color: theme.palette.common.black,
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

function createData(nomor, rincianBayar, kuantitas, nominal, subTotal) {
  return { nomor, rincianBayar, kuantitas, nominal, subTotal };
}
function createData2(nomor, kategori, perorangan, beregu) {
  return { nomor, kategori, perorangan, beregu };
}

const rows = [createData(1, "Peserta Open Perorangan", 175000, 2, 350000), createData(2, "Peserta Open Beregu", 300000, 1, 300000), createData(3, "Peserta Festival", 195000, 1, 195000)];

const rows2 = [createData2(1, "Open Turnament", 2, 1), createData2(2, "Festival", 1, 0)];

const CetakInvoice = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <ScrollToTop />
      <div className={classes.divInvoice}>
        <Paper elevation={0} className={classes.paper}>
          <div className={classes.boxTanggal}>
            <Box display="flex" justifyContent="flex-end">
              <TextField id="tanggalBayar" label="16/10/2020" variant="outlined" disabled />
            </Box>
          </div>
          <Box display="flex" justifyContent="center" className={classes.boxNoFaktur}>
            <Typography variant="h6" gutterBottom>
              Faktur #001
            </Typography>
          </Box>
          <hr />
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} xs={6}>
                <p style={{ textAlign: "left", fontSize: 20, marginLeft: 20 }}>
                  Pembayaran dari: <br />
                  Nama Kontingen <br />
                  Nama Manajer <br />
                  Nomor Telepon
                </p>
              </Grid>
              <Grid item xs={12} xs={6}>
                <p style={{ textAlign: "right", fontSize: 20, marginRight: 20 }}>
                  Pembayaran untuk: <br />
                  Nama Acara <br />
                  Nomor Rekening <br />
                  Bank
                </p>
              </Grid>
            </Grid>
          </Box>
          <hr />
          <Box className={classes.divInvoice}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <StyledTableRow>
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
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.nomor}>
                      <TableCell align="center">{row.nomor}</TableCell>
                      <TableCell align="left">{row.rincianBayar}</TableCell>
                      <TableCell align="center">Rp. {row.nominal}</TableCell>
                      <TableCell align="center">{row.kuantitas}</TableCell>
                      <TableCell align="center">Rp. {row.subTotal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" align="right" colspan={4}>
                      Total Pembayaran
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      Rp. 845000
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" align="right" colspan={4}>
                      Total Pembayaran
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      Rp. 845000
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" align="right" colspan={4}>
                      Tagihan
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      Rp. 0
                    </StyledTableCell>
                  </StyledTableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
          {/* Tabel */}
          <br />
          <Box className={classes.divInvoice}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center" width="8%">
                      No.
                    </StyledTableCell>
                    <StyledTableCell align="left">Klasifikasi</StyledTableCell>
                    <StyledTableCell align="center" width="15%">
                      Peorangan
                    </StyledTableCell>
                    <StyledTableCell align="center" width="15%">
                      Beregu
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow key={row.nomor}>
                      <TableCell align="center">{row.nomor}</TableCell>
                      <TableCell align="left">{row.kategori}</TableCell>
                      <TableCell align="center">{row.perorangan}</TableCell>
                      <TableCell align="center">{row.beregu}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" align="center" colspan={2}>
                      Total Peserta
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      3
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      1
                    </StyledTableCell>
                  </StyledTableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
          <div className={classes.boxLunas}>
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="h4" gutterBottom>
                <strong>LUNAS</strong>
              </Typography>
            </Box>
          </div>
          <Box display="flex" justifyContent="flex-start" className={classes.boxKeterangan}>
            <TextField id="keterangan" label="Keterangan" multiline rows={4} defaultValue="Keterangan" variant="outlined" disabled />
          </Box>
        </Paper>
      </div>
    </Fragment>
  );
};

export default CetakInvoice;
