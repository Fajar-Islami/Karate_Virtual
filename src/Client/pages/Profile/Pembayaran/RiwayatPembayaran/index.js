import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Popover, Typography, IconButton } from "@material-ui/core";

// Icon
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import { PageTitle } from "../../../../components";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#039be5",
    color: theme.palette.common.white,
    fontSize: 16,
    fontFamily: "Poppins !important",
  },
  body: {
    fontSize: 14,
    fontFamily: "Poppins !important",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(no, tanggal, noFaktur, nominalPembayaran, aksi) {
  return { no, tanggal, noFaktur, nominalPembayaran, aksi };
}

const rows = [createData(1, "01/01/2020", "FKT-004", "Rp. 1.000.000,00"), createData(2, "01/01/2020", "FKT-003", "Rp. 1.000.000,00"), createData(3, "01/01/2020", "FKT-002", "Rp. 1.000.000,00"), createData(4, "01/01/2020", "FKT-001", "Rp. 1.000.000,00")];

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: "20px",
    minWidth: 700,
    "& th": {
      fontWeight: "600",
    },
  },
  button: {
    minWidth: "40px !important",
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
const RiwayatPembayaran = () => {
  const classes = useStyles();

  return (
    <>
      <PageTitle title="Riwayat Pembayaran" />
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">No</StyledTableCell>
              <StyledTableCell>Tanggal</StyledTableCell>
              <StyledTableCell align="center">Nomor Faktur</StyledTableCell>
              <StyledTableCell align="center">Nominal Pembayaran</StyledTableCell>
              <StyledTableCell align="center">Rincian</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell align="center">{row.no}</StyledTableCell>
                <StyledTableCell>{row.tanggal}</StyledTableCell>
                <StyledTableCell align="center">{row.noFaktur}</StyledTableCell>
                <StyledTableCell align="center">{row.nominalPembayaran}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="outlined" color="primary" href="/profile/pembayaranaktif" className={classes.button}>
                    <VisibilityIcon fontSize="small" color="primary" />
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="outlined" color="primary" href="#" className={classes.button}>
                    <GetAppIcon color="primary" fontSize="small" />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RiwayatPembayaran;
