import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TitleDashboard } from "..";

// Generate Order Data
function createData(tanggal, nomorF, nominal, waktuV) {
  return { tanggal, nomorF, nominal, waktuV };
}

const rows = [createData("10/18/2020", "Fkt-001", 100.001, "10/18/2020"), createData("10/18/2020", "Fkt-002", 100.002, "10/18/2020"), createData("10/18/2020", "Fkt-003", 100.003, "10/18/2020")];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  link: {
    color: "blue !important",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  table: {
    "& th": {
      fontWeight: "600",
    },
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TitleDashboard font="h5" title="Transaksi Terakhir" />
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" width="5%">
              No
            </TableCell>
            <TableCell align="center"> Tanggal</TableCell>
            <TableCell align="center">Nomor Faktur</TableCell>
            <TableCell align="center">Nominal Bayar</TableCell>
            <TableCell align="center">Waktu Verifikasi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i + 1}>
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="center">{row.tanggal}</TableCell>
              <TableCell align="center">{row.nomorF}</TableCell>
              <TableCell align="center">{row.nominal}</TableCell>
              <TableCell align="center">{row.waktuV}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" className={classes.link} to="/admin/peserta">
          Lihat Data
        </Link>
      </div>
    </React.Fragment>
  );
}
