import React, { Fragment, useState } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { Typography, RadioGroup } from "@material-ui/core";
import RadioButtons from "../../../components/RadioButtonRegis";

const useStyles = makeStyles((theme) => ({
  paperForm: {
    display: "flex",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
  },
  boxButton: {
    // margin: 30,
  },
  radio: {
    width: "70%",
    // marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  inputForm: {
    // padding: theme.spacing(2),
    marginTop: 20,
    // marginLeft: 15,
    // marginRight: 15,
    marginBottom: 15,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const jenisKelamin = [
  {
    value: "Laki-Laki",
    label: "Laki-Laki",
  },
  {
    value: "Perempuan",
    label: "Perempuan",
  },
];

const kategoriPertandingan = [
  {
    value: "Open Perorangan",
    label: "Open Perorangan",
  },
  {
    value: "Festival",
    label: "Festival",
  },
];

const kategoriSabuk = [
  {
    value: "Putih",
    label: "Putih",
  },
  {
    value: "Kuning",
    label: "Kuning",
  },
  {
    value: "Hijau",
    label: "Hijau",
  },
  {
    value: "Biru Muda",
    label: "Biru Muda",
  },
  {
    value: "Biru Tua",
    label: "Biru Tua",
  },
  {
    value: "Ungu",
    label: "Ungu",
  },
  {
    value: "Cokelat",
    label: "Cokelat",
  },
];

const kategoriJenjangPendidikan = [
  {
    value: "SD/MI",
    label: "SD/MI",
  },
  {
    value: "SMP/MTs",
    label: "SMP/MTs",
  },
  {
    value: "SMA/MA",
    label: "SMA/MA",
  },
];

const FormDataPengguna = () => {
  const classes = useStyles();
  const [jenKel, setjenKel] = useState("");
  const [sabuk, setSabuk] = useState("");
  const [jenjangPendidikan, setJenjangPendidikan] = useState("");
  const [kategori, setKategori] = useState("");

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

  return (
    <Fragment>
      <div className={classes.paperForm}>
        <Paper elevation={0}>
          <div className={classes.inputForm}>
            <Grid container spacing={2}>
              <Grid item xs={12} xs={6}>
                <TextField id="namaLengkap" name="namaLengkap" label="Nama Kontingen" variant="outlined" fullWidth responsive required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="namaDojo" name="namaDojo" label="Nama Pemegang " variant="outlined" fullWidth responsive required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="alamatDojo" label="Alamat" multiline fullWidth rows={4} variant="outlined" required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="noTelepon" name="noTelepon" label="Nomor Telepon" variant="outlined" fullWidth responsive required />
                <div style={{ marginTop: "10px" }}> Jenis Kelamin</div>
                <RadioGroup row className={classes.radio}>
                  <Grid item>
                    <RadioButtons ket="Pria" />
                  </Grid>
                  <Grid item>
                    <RadioButtons ket="Wanita" />
                  </Grid>
                </RadioGroup>
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="kataSandi1" name="kataSandi1" label="Kata Sandi" variant="outlined" type="password" fullWidth responsive required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="kataSandi2" name="kataSandi2" label="Ulangi Kata Sandi" variant="outlined" type="password" fullWidth responsive required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="email" name="email" label="Email" variant="outlined" type="password" autoComplete="email" fullWidth responsive required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <Box display="flex" justifyContent="center">
                  <Avatar style={{ marginTop: 10 }} variant="rounded" alt="Foto Peserta" src="" className={classes.avatar} />
                </Box>
                <Box display="flex" justifyContent="center">
                  <label htmlFor="upload-photo" style={{ marginTop: 10 }}>
                    <input style={{ display: "none" }} id="upload-photo" name="upload-photo" type="file" accept="image/*" />
                    <Button variant="contained" color="primary" className={classes.button} startIcon={<AddAPhotoIcon />}>
                      Unggah Foto
                    </Button>
                  </label>
                </Box>
              </Grid>
            </Grid>
          </div>
          <Link to="/profile/datapengguna">
            <Box display="flex" justifyContent="flex-end" className={classes.boxButton}>
              <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
                Simpan
              </Button>
            </Box>
          </Link>
        </Paper>
      </div>
    </Fragment>
  );
};

export default FormDataPengguna;
