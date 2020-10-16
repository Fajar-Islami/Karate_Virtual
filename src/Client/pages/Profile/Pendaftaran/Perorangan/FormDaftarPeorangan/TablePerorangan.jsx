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
// importing styles
import styles from "./TablePerorangan.module.css";
import { PageTitle } from "../../../../../components";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    height: 0,
    width: 250,
  },
}))

const useDesigns = makeStyles({
  root: {
    width: '100%',
    marginLeft: 20
  },
  container: {
    maxHeight: 440,
  },
});

const columnsParticipant = [
  { id: 'foto', label: 'Foto', minWidth: 170, align: 'center' },
  { id: 'name', label: 'Nama', minWidth: 170, align: 'center' },
  { id: 'age', label: 'Usia', minWidth: 100, align: 'right' },
  { id: 'clasification', label: 'Klasifikasi', minWidth: 200, align: 'center' },
  { id: 'category', label: 'Kategori', minWidth: 200, align: 'center' },
  { id: 'status', label: 'Status', minWidth: 200, align: 'center' },
]

const createDataParticipant = (name, age, clasification, category, status) => {
  const foto = null;
  return { foto, name, age, clasification, category, status };
}

const rowsParticipant = [
  createDataParticipant('Andira Putri Wisnu', 15, 'Kadet', 'Open Perorangan', false),
  createDataParticipant('Alvine Raharjo', 18, 'Senior', 'Open Perorangan', false),
  createDataParticipant('Alisya Mahesa', 10, 'Pra-Pemula', 'Festival', true),
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
      <PageTitle title="Tabel Peserta" />
      <Typography variant="h5" >
        Perorangan
      </Typography>
      <div className={styles.app}>
        <div className={styles.app__left}>
          <TextField
            type="search"
            label="Search Field"
            variant="outlined"
            styles={{ width: '25ch' }}
          />
        </div>
        <div className={styles.app__right}>
          <Link to="/profile/formperorangan">
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
                      style={{ minWidth: column.minWidth }}
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
                            <TableCell key={column.id} align={column.align}>
                              {
                                typeof value !== "boolean" ? value : value === false
                                  ? <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    styles={{ border: 40 }}
                                  >Unpaid</Button>
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