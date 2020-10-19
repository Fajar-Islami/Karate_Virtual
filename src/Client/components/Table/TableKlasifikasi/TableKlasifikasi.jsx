import React, { useState, useEffect } from "react";
// importing material-UI library
import {
    Box, Paper, Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, TableFooter,
} from "@material-ui/core";

import { useStyles, StyledTableCell, StyledTableRow } from "../store.jsx";

const TableKlasifikasi = ({klasifikasiPembayaran})=>{
    const classes = useStyles();

    console.log(klasifikasiPembayaran)
    return (
        <Box display="flex" justifyContent="center" className={classes.boxTable}>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" width="8%">No.</StyledTableCell>
                            <StyledTableCell align="left">Klasifikasi</StyledTableCell>
                            <StyledTableCell align="center" width="15%">Peorangan</StyledTableCell>
                            <StyledTableCell align="center" width="15%">Beregu</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        klasifikasiPembayaran.map(({id, data})=> (
                            <StyledTableRow hover key={id}>
                                <StyledTableCell align="center"> {id} </StyledTableCell>
                                <StyledTableCell align="left"> {data.klasifikasi} </StyledTableCell>
                                <StyledTableCell align="center"> {data.perorangan} </StyledTableCell>
                                <StyledTableCell align="center"> {data.beregu} </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                    </TableBody>
                    <TableFooter>
                        <StyledTableCell component="th" scope="row" align="center" colspan={2}>
                            Total Peserta
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="center">
                            3
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="center">
                            3
                        </StyledTableCell>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableKlasifikasi;