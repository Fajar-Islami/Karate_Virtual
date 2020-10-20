import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { TextReadOnly, PreviewVideo, BarPeserta, PhotoForm } from "../../../../../components";
import { data } from "./data";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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

  const { id } = useParams();
  const angka = (tes) => {
    return parseInt(tes, 10);
  };
  const cari = (idC) => {
    return data.filter((item) => {
      return item.id === idC;
    });
  };

  const dataRows = cari(angka(id))[0];

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
                <TextReadOnly label="Nama Lengkap" value={dataRows.namaLengkap} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Jenis Kelamain" value={jenisK(dataRows.jk)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Tanggal Lahir" value={dataRows.tanggalL} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Tingkatan Sabuk " value={katSabuk(dataRows.sabuk)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Jenjang Pendidikan " value={jenjangPend(dataRows.jenjang)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Asal Sekolah " value={dataRows.asalSekolah} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextReadOnly label="Kategori Pertandingan " value={katPertandingan(dataRows.kategoriPrtd)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PhotoForm img={dataRows.foto} />
              </Grid>
              {dataRows.videoF === undefined && dataRows.videoO === undefined ? (
                <h2>Peserta Belum Upload Video </h2>
              ) : (
                <>
                  {dataRows.videoO !== undefined && (
                    <Grid item xs={12} sm={6}>
                      <PreviewVideo jenis="Open Turnamen Perorangan" video={dataRows.videoO} />
                    </Grid>
                  )}
                  {dataRows.videoF !== undefined && (
                    <Grid item xs={12} sm={6}>
                      <PreviewVideo jenis="Open Festival" video={dataRows.videoF} />
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
