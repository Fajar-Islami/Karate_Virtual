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
import { TextReadOnly, PreviewVideo } from "../../../../../components";
import { data } from "./data";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#bbdefb",
    color: "#0d47a1",
    width: "100%",
    height: theme.spacing(9),
    justifyContent: "center",
  },
  paperForm: {
    display: "flex",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    marginTop: 30,
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
  large: {
    width: 200,
    height: 200,
    borderRadius: 10,
    objectFit: "contain",
    border: "1px solid black",
    marginLeft: 20,
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

function katPertandingan(ket) {
  switch (ket) {
    case "1":
      return "Open Perorangan";
    case "2":
      return "Festival";
    default:
      throw new Error("Unknown Kategori Pertandingan");
  }
}

function katSabuk(ket) {
  switch (ket) {
    case "1":
      return "Putih";
    case "2":
      return "Kuning";
    case "3":
      return "Hijau";
    case "4":
      return "Biru Muda";
    case "5":
      return "Biru Tua";
    case "6":
      return "Ungu";
    case "7":
      return "Cokelat";
    default:
      throw new Error("Unknown Kategori Pertandingan");
  }
}

function jenjangPend(ket) {
  switch (ket) {
    case "1":
      return "SD/MI";
    case "2":
      return "SMP/MTs";
    case "3":
      return "SMA/MA";
    default:
      throw new Error("Unknown Kategori Pertandingan");
  }
}

const IdentitasAtlet = () => {
  const classes = useStyles();
  const [jenKel, setjenKel] = useState("");
  const [sabuk, setSabuk] = useState("");
  const [jenjangPendidikan, setJenjangPendidikan] = useState("");
  const [kategori, setKategori] = useState("");
  const [image, setImage] = useState("");
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const pilihJenisKelamin = (event) => {
    setjenKel(event.target.value);
  };

  const pilihSabuk = (event) => {
    setSabuk(event.target.value);
  };

  const pilihJenjang = (event) => {
    setJenjangPendidikan(event.target.value);
  };

  const pilihKategori = (event) => {
    setKategori(event.target.value);
  };

  // console.log(data);
  const { id } = useParams();
  const angka = (tes) => {
    return parseInt(tes, 10);
  };
  const cari = (idC) => {
    return data.filter((item) => {
      return item.id === idC;
    });
  };

  const dataRows = cari(angka(id));
  console.log(dataRows[0]);
  console.log(dataRows[0].videoF === undefined);
  return (
    <Fragment>
      <div>
        <Paper elevation={3} className={classes.paperTitle}>
          <Box display="flex" justifyContent="center">
            <h3 style={{ fontSize: 20 }}>Identitas Atlet</h3>
          </Box>
        </Paper>
      </div>
      <div className={classes.paperForm}>
        <Paper elevation={3}>
          <div className={classes.inputForm}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Nama Lengkap" value={dataRows[0].namaLengkap} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Jenis Kelamain" value={jenisK(dataRows[0].jk)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Tanggal Lahir" value={dataRows[0].tanggalL} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Tingkatan Sabuk " value={katSabuk(dataRows[0].sabuk)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Jenjang Pendidikan " value={jenjangPend(dataRows[0].jenjang)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Asal Sekolah " value={dataRows[0].asalSekolah} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Kategori Pertandingan " value={katPertandingan(dataRows[0].kategoriPrtd)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" justifyContent="center">
                  <img src={dataRows[0].foto} className={classes.large} alt="Foto Identitas" />
                </Box>
              </Grid>
              {dataRows[0].videoF === undefined && dataRows[0].videoO === undefined ? (
                <h2>Peserta Belum Upload Video </h2>
              ) : (
                <>
                  {dataRows[0].videoO !== undefined && (
                    <Grid item xs={12} sm={6}>
                      <PreviewVideo jenis="Open Turnamen Perorangan" video={dataRows[0].videoO} />
                    </Grid>
                  )}
                  {dataRows[0].videoF !== undefined && (
                    <Grid item xs={12} sm={6}>
                      <PreviewVideo jenis="Open Festival" video={dataRows[0].videoF} />
                    </Grid>
                  )}
                </>
              )}
            </Grid>
          </div>
        </Paper>
      </div>
    </Fragment>
  );
};

export default IdentitasAtlet;
