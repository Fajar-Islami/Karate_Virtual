import React, { Component, Fragment, useState } from "react";
// import Material-Ui
import {
  Grid, Typography, IconButton, Box, TextField, Button,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination, TableRow,
} from '@material-ui/core';
import { Link } from "react-router-dom";
import HelpIcon from "@material-ui/icons/Help";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';
import { PageTitle } from "../../../../../components";


const useStyles = makeStyles((theme) => ({
  paper: {
    // padding: theme.spacing(3),
    // textAlign: 'left',
    // height: 0,
    // width: 250,
  },
  function: {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0px"
  }
}))

const useDesigns = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },

});

const columnsParticipant = [
  { id: 'no', label: 'No', width: "8%", align: 'center' },
  { id: 'foto', label: 'Foto', width: "15%", align: 'center' },
  { id: 'name', label: 'Nama', width: "23%", align: 'center' },
  { id: 'age', label: 'Usia', width: "8%", align: 'right' },
  { id: 'clasification', label: 'Klasifikasi', width: "16%", align: 'center' },
  { id: 'category', label: 'Kategori', width: "15%", align: 'center' },
  { id: 'status', label: 'Status', width: "15%", align: 'center' },
]

const createDataParticipant = (no, foto, name, age, clasification, category, status) => {
  // const foto = null;
  return { no, foto, name, age, clasification, category, status };
}

const gambar = () => { return <img src="https://placeimg.com/640/480/people" alt="aaa" style={{ width: "80%" }} /> }

const rowsParticipant = [
  createDataParticipant(1, gambar(), 'Andira Putri Wisnu', 15, 'Kadet', 'Open Grup', false),
  createDataParticipant(2, gambar(), 'Alvine Raharjo', 18, 'Senior', 'Open Grup', false),
  createDataParticipant(3, gambar(), 'Alisya Mahesa', 10, 'Pra-Pemula', 'Open Grup', true),
]


export default function TabelPerorangan() {
  const classes = useStyles();
  const classDesign = useDesigns();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Fragment>
      <PageTitle title="Tabel Peserta Beregu" />
      <div className={classes.function}>
        <TextField
          type="search"
          label="Search Field"
          variant="outlined"
          styles={{ width: '25ch' }}
        />
        <Link to="/profile/formberegu">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PersonAddIcon />}
          >
            Tambah Peserta
                </Button>
        </Link>
      </div>
      <Paper className={classDesign.root}>
        <TableContainer className={classDesign.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {
                  columnsParticipant.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ width: column.width, fontWeight: "600" }}
                    >
                      {column.label}
                    </TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rowsParticipant.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover tabIndex={-1}>
                      {
                        columnsParticipant.map((column) => {
                          const value = row[column.id];
                          console.log(value);
                          return (
                            <>
                              <TableCell key={column.id} align={column.align}>
                                {
                                  typeof value !== "boolean" ? value : value === false
                                    ?
                                    <Link to="/profile/pembayaranaktif">
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        styles={{ border: 40 }}
                                      >Unpaid</Button>
                                    </Link>
                                    :
                                    <Button
                                      variant="contained"
                                      color="Primary"
                                      size="small"
                                      disabled
                                      styles={{ border: 40 }}
                                    >Paid</Button>
                                }
                              </TableCell>
                            </>
                          )
                        })
                      }
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Fragment>
  );
}