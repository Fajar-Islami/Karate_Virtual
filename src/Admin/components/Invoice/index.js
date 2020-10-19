import React, { Fragment, useState, useEffect } from "react";
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
  paperInvoice: {},
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

// function createData(nomor, rincianBayar, hargaSatuan, kuantitas, subTotal) {
//   return { nomor, rincianBayar, hargaSatuan, kuantitas, subTotal };
// }

// const rows = [createData(1, "Peserta Open Perorangan", 175000, 2, 350000), createData(2, "Peserta Open Beregu", 300000, 1, 300000), createData(3, "Peserta Festival", 195000, 1, 195000)];

function harga(ket) {
  switch (ket) {
    case "0":
      return 195000;
    case "1":
      return 175000;
    case "2":
      return 175000;
    default:
      throw new Error("Unknown Turnamen");
  }
}

function lomba(ket) {
  switch (ket) {
    case "0":
      return "Open Festival";
    case "1":
      return "Open Turnamen Peorangan";
    case "2":
      return "Open Turnamen Beregu";
    default:
      throw new Error("Unknown Turnamen");
  }
}

const formatAngka = (duit) => {
  return new Intl.NumberFormat("de-DE").format(duit);
};

const Invoice = ({ data = "" }) => {
  const [dataEntries, setDataEntries] = useState(data.rincian);
  const [totalBayar, settotalBayar] = useState(0);
  const [totalKuantitas, settotalKuantitas] = useState(0);
  const angka = (tes) => {
    return parseInt(tes, 10);
  };

  const hitungfooter = async () => {
    let totalBayar = 0;
    let totalKuantitas = 0;

    await dataEntries.map((item) => {
      totalKuantitas = angka(totalKuantitas) + angka(item.kuantitas);
      totalBayar = angka(totalBayar) + angka(angka(harga(item.rincian)) * angka(item.kuantitas));
      // entries = angka(entries) + angka(item.totalE);
    });

    settotalBayar(totalBayar);
    settotalKuantitas(totalKuantitas);
  };

  useEffect(() => {
    hitungfooter();
  }, []);

  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.rincian}>
        <span className={classes.title}>Rincian Pembayaran</span>
        <div>
          Nama Dojo: {data.namaDojo}
          <br />
          Nama Pengguna: {data.namaUser}
          <br />
          Nomor Telepon: {data.noTelp}
          <br />
          Waktu Proses Pembayaran: {data.waktuProses}
          <br />
          Nomor Transaksi: {data.noTransaksi}
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
              {dataEntries.map((row, i) => (
                <StyledTableRow hover key={row.nomor}>
                  <StyledTableCell align="center">{i + 1}</StyledTableCell>
                  <StyledTableCell align="left"> {lomba(row.rincian)}</StyledTableCell>
                  <StyledTableCell align="center">Rp. {formatAngka(harga(row.rincian))}</StyledTableCell>
                  <StyledTableCell align="center">{row.kuantitas}</StyledTableCell>
                  <StyledTableCell align="center">Rp. {formatAngka(angka(harga(row.rincian)) * angka(row.kuantitas))}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" align="center" colSpan={3}>
                  Total Pembayaran
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {totalKuantitas}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  Rp. {formatAngka(totalBayar)}
                </StyledTableCell>
              </StyledTableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
};

export default Invoice;
