import React, { Fragment, useState } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { BarPeserta, TextReadOnly, PhotoForm } from "../../../../../components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  paperForm: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
    width: "auto",
    height: "auto",
  },
  boxButton: {
    margin: 30,
  },
  inputForm: {
    padding: theme.spacing(2),
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function jenisK(ket) {
  switch (ket) {
    case "1":
      return "Laki-Laki";
    case "2":
      return "Perempuan";
    default:
      throw new Error("Unknown Jenis Kelamin");
  }
}

function klasifikasi(ket) {
  switch (ket) {
    case "1":
      return "Usia Dini";
    case "2":
      return "Pra Pemula";
    case "3":
      return "Pemula";
    case "4":
      return "Kadet";
    case "5":
      return "Yunior";
    case "6":
      return "Senior";
    default:
      throw new Error("Unknown Klasifikasi");
  }
}

const IdentitasAtlet = ({ data = "" }) => {
  const classes = useStyles();

  let { id_anggota } = useParams();
  const angka = (tes) => {
    return parseInt(tes, 10);
  };
  let cari = (idC) => {
    return data.filter((item) => {
      return item.id_anggota == idC;
    });
  };

  // const [dataRows, setdataRows] = useState(cari(angka(id_anggota))[0]);
  // useEffect(() => {
  //   const changeData = () => {
  //     return setdataRows(cari(angka(id_anggota))[0]);
  //   };
  //   changeData();
  // }, []);

  let dataRows = cari(angka(id_anggota))[0];
  console.log("data anggota ", dataRows);
  return (
    <Fragment>
      <div>
        <BarPeserta title="Identitas Atlet" />
      </div>
      <div className={classes.paperForm}>
        <Paper elevation={3}>
          <div className={classes.inputForm}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Nama Lengkap" value={dataRows.nama} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Jenis Kelamin" value={dataRows.jenisKelamin} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Tanggal Lahir" value={dataRows.tanggalLahir} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Klasifikasi" value={dataRows.klasifikasi} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PhotoForm img={dataRows.foto} />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    </Fragment>
  );
};

export default IdentitasAtlet;
