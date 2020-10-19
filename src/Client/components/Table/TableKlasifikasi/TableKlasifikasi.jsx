import React, { useState, useEffect } from "react";
// importing material-UI library
import {
    Box, Paper, Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, TableFooter,
} from "@material-ui/core";

import { useStyles, StyledTableCell, StyledTableRow } from "../store.jsx";

const TableKlasifikasi = (props)=>{
    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="center" className={classes.boxTable}>
            <TableContainer component={Paper}>
                <Table className={classes.Table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" width="8%">No.</StyledTableCell>
                            <StyledTableCell align="left">Klasifikasi</StyledTableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableKlasifikasi;