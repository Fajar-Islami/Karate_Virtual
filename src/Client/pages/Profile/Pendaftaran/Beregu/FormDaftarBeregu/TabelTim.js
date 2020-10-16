import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginTop: theme.spacing(5),
      // marginLeft: theme.spacing(4),
      backgroundColor: "#bbdefb",
      color: "#0d47a1",
      width: "100%",
      height: theme.spacing(9),
    },
  },
  paperInfo: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginTop: theme.spacing(3),
      // marginLeft: theme.spacing(4),
      backgroundColor: "#bbdefb",
      width: "100%",
      height: theme.spacing(12),
    },
  },
  table: {
    // minWidth: 150,
  },
  paperTable: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginTop: theme.spacing(3),
      // marginLeft: theme.spacing(4),
      width: "100%",
      height: theme.spacing(37),
    },
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [createData("Frozen yoghurt", 159, 6.0), createData("Ice cream sandwich", 237, 9.0), createData("Eclair", 262, 16.0), createData("Cupcake", 305, 3.7), createData("Gingerbread", 356, 16.0)];

const TabelTim = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.paperTitle}>
        <Paper elevation={3}>
          <Box display="flex">
            <h3 style={{ fontSize: 20 }}>Informasi</h3>
          </Box>
        </Paper>
      </div>
      <div className={classes.paperInfo}>
        <Paper elevation={3}>
          <Box display="flex">
            <p style={{ fontSize: 14, textAlign: "justify", marginLeft: 15, marginRight: 15 }}>Hasil simpan data peserta dari form identitas atlit akan di tampung di form bawah ini. pastikan anda menginputnya dengan benar. Sistem akan menyimpannya apabila sudah 3 peserta.</p>
          </Box>
        </Paper>
      </div>
      <div className={classes.paperTable}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
};

export default TabelTim;
