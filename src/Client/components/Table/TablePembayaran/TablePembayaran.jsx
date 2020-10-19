import React, { useState, useEffect } from "react";
// importing material-UI library
import {
    Box, Paper, Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, TableFooter,
} from "@material-ui/core";

import { useStyles, StyledTableCell, StyledTableRow } from "../store.jsx";


const TablePembayaran = ({ rincianPembayaran }) => {
    const classes = useStyles();
    const [countRincian, setRincian] = useState(0);

    useEffect(() => {
        const getTotalPaid = async() =>{
            const cloneRincian = [...rincianPembayaran];
            const totalPaid = cloneRincian
                                    .map( ({id, data}) => data.subtotal)
                                    .reduce((acc, curr) => acc + curr, 0)
            setRincian(totalPaid);
        };
        getTotalPaid();
    }, []);

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
                                    {countRincian}
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        
    )
}

export default TablePembayaran;