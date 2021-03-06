import React, { Fragment, useState } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
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

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#bbdefb",
    color: "#0d47a1",
    width: "100%",
    height: theme.spacing(9),
    justifyContent: 'center'
  },
  paperForm:{
    display: 'flex',
    flexWrap: 'wrap',
    width: 'auto',
    height: 'auto',
    marginTop: 30,
  },
  boxButton: {
      margin:30
  },
  inputForm:{
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
              <Grid item xs={12} xs={6}>
                <TextField id="namaLengkap" name="namaLengkap" label="Nama Lengkap" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="jenis_kelamin" name="jenis_kelamin" select label="Jenis Kelamin" value={jenKel} onChange={pilihJenisKelamin} variant="outlined" fullWidth required>
                  {jenisKelamin.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField
                  id="tanggalLahir"
                  name="tanggalLahir"
                  label="Tanggal Lahir"
                  type="date"
                  defaultValue={new Date()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="pilih_sabuk" name="pilih_sabuk" select label="Tingkatan Sabuk" value={sabuk} onChange={pilihSabuk} variant="outlined" fullWidth required>
                  {kategoriSabuk.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="pilih_jenjang" name="pilih_jenjang" select label="Jenjang Pendidikan" value={jenjangPendidikan} onChange={pilihJenjang} variant="outlined" fullWidth required>
                  {kategoriJenjangPendidikan.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="asalSekolah" name="asalSekolah" label="Asal Sekolah" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField id="pilih_kategori" name="pilih_kategori" select label="Kategori Pertandingan" value={kategori} onChange={pilihKategori} variant="outlined" fullWidth required>
                  {kategoriPertandingan.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} xs={6}>
                <Box display="flex" justifyContent="center">
                  <Avatar 
                    style={{marginTop:10}} 
                    variant="rounded"
                    alt="Foto Peserta" 
                    src={image} 
                    className={classes.avatar} />
                </Box>
                <Box display="flex" justifyContent="center">
                  <label htmlFor="upload-photo" style={{marginTop:10}}>
                  <input style={{ display: "none" }} id="upload-photo" name="upload-photo" type="file" accept="image/x-png,image/jpeg" onChange={imageHandler}/>
                    <Button variant="contained"
                      color="primary"
                      component="span" 
                      startIcon={<AddAPhotoIcon/>}>
                      Unggah Foto Peserta
                    </Button>
                  </label>
                </Box>
              </Grid>
            </Grid>
          </div>
          <Box display="flex" justifyContent="flex-end" className={classes.boxButton}>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
              Simpan
            </Button>
          </Box>
        </Paper>
      </div>
    </Fragment>
  );
};

export default IdentitasAtlet;
