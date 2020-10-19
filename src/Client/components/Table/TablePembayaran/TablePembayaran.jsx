import React, { Fragment, useState } from "react";
//style
import { withStyles, makeStyles } from "@material-ui/core/styles";
// importing material-UI library
import {
    Box, Paper, Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, TableFooter,
} from "@material-ui/core";

// methods styling
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


const TablePembayaran = ({ rincianPembayaran }) => {
    const classes = useStyles();
    const [countRincian, setRincian] = useState(0);
    return (
            
            <Box display="flex" justifyContent="center" className={classes.boxTable}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" width="8%">No.</StyledTableCell>
                                <StyledTableCell align="left">Rincian Pembayaran</StyledTableCell>
                                <StyledTableCell align="center" width="15%">Harga Satuan</StyledTableCell>
                                <StyledTableCell align="center" width="15%">Jumlah</StyledTableCell>
                                <StyledTableCell align="center" width="15%">Subtotal</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rincianPembayaran.map(({id, data})=> (
                                    <StyledTableRow hover key={id}>
                                        <StyledTableCell align="center">{id}</StyledTableCell>
                                        <StyledTableCell align="left">{data.rincianBayar}</StyledTableCell>
                                        <StyledTableCell align="center">{data.hargaSatuan} </StyledTableCell>
                                        <StyledTableCell align="center">{data.kuantitas} </StyledTableCell>
                                        <StyledTableCell align="center">{data.subtotal} </StyledTableCell>
                                    
                                    </StyledTableRow>
                                ))
                            }
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
        
    )
}

export default TablePembayaran;