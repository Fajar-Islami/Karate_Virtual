import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { BarPeserta, PreviewVideo } from "../../../../../components";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 30,
    backgroundColor: "#bbdefb",
    color: "#0d47a1",
    width: "auto",
    height: "auto",
    justifyContent: "center",
  },
  paperInfo: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
    backgroundColor: "#bbdefb",
    width: "auto",
    height: "auto",
    justifyContent: "center",
  },
  table: {
    minWidth: 150,
    "& th": {
      fontWeight: "600",
    },
    "& td": {
      padding: 5,
    },
  },
  paperTable: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
    width: "auto",
    height: "auto",
    marginBottom: "20px",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const TabelTim = ({ data = "" }) => {
  const classes = useStyles();
  const { idKontingen } = useParams();
  const imgProfile = (foto) => {
    return <img src={foto} width="80px" alt="" />;
  };

  const btnDetail = (id) => {
    return (
      <Link to={`/admin/pesertaberegu/detailpeserta/${idKontingen}/${id}`}>
        <IconButton aria-label="Lihat" size="small" style={{ backgroundColor: "#ffcdd2" }}>
          <SearchIcon />
        </IconButton>{" "}
      </Link>
    );
  };

  // function createData(foto, nama, aksi) {
  //   return { foto, nama, aksi };
  // }

  // const rows = [
  //   createData(
  //     <Avatar alt="Foto Peserta" src="" className={classes.avatar} />,
  //     "Ocean",
  //     <div>
  //       <IconButton aria-label="edit" size="small" style={{ marginRight: 10, backgroundColor: "#bbdefb" }}>
  //         <AssignmentIcon />
  //       </IconButton>
  //       <IconButton aria-label="delete" size="small" style={{ backgroundColor: "#ffcdd2" }}>
  //         <DeleteIcon />
  //       </IconButton>{" "}
  //     </div>,
  //   ),
  //   createData(
  //     <Avatar alt="Foto Peserta" src="" className={classes.avatar} />,
  //     "Oasis",
  //     <div>
  //       <IconButton aria-label="edit" size="small" style={{ marginRight: 10, backgroundColor: "#bbdefb" }}>
  //         <AssignmentIcon />
  //       </IconButton>
  //       <IconButton aria-label="delete" size="small" style={{ backgroundColor: "#ffcdd2" }}>
  //         <DeleteIcon />
  //       </IconButton>{" "}
  //     </div>,
  //   ),
  //   createData(
  //     <Avatar alt="Foto Peserta" src="" className={classes.avatar} />,
  //     "Omar",
  //     <div>
  //       <IconButton aria-label="edit" size="small" style={{ marginRight: 10, backgroundColor: "#bbdefb" }}>
  //         <AssignmentIcon />
  //       </IconButton>
  //       <IconButton aria-label="delete" size="small" style={{ backgroundColor: "#ffcdd2" }}>
  //         <DeleteIcon />
  //       </IconButton>{" "}
  //     </div>,
  //   ),
  // ];
  console.log(data);
  return (
    <Fragment>
      <div>
        <BarPeserta title="Data Tim" />
      </div>
      <div className={classes.paperTable}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" width="10%">
                  No
                </TableCell>
                <TableCell align="center">Foto</TableCell>
                <TableCell align="left">Nama</TableCell>
                <TableCell align="left" width="15%">
                  Aksi
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{imgProfile(row.foto)}</TableCell>
                  <TableCell align="left">{row.nama}</TableCell>
                  <TableCell align="left">{btnDetail(row.id_anggota)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* {dataRows[0].video === undefined ? (
        <h2>Peserta Belum Upload Video </h2>
      ) : ( */}
      <Grid item xs={12} sm={12} stle={{ marginTop: "20px" }}>
        <PreviewVideo jenis="Open Turnamen Beregu" video="https://www.youtube.com/embed/HW-PyoAZRGw" />
      </Grid>
      {/* )}
               ) */}
    </Fragment>
  );
};

export default TabelTim;
