import React from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  title: {
    fontSize: "36px",
    fontWeight: "600",
  },
  font: {
    margin: 10,
    fontFamily: "Arial",
    fontSize: "auto",
  },
  paperForm: {
    display: "flex",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    flexDirection: "column",
    padding: 20,
  },
  paperBox: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginRight: 10,
  },
}));

export default function DataPengguna() {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" justifyContent="center" style={{ margin: 20 }}>
        <Paper elevation={3} className={classes.paperForm}>
          <Box display="flex" justifyContent="space-between">
            <div className={classes.title}>Data Pengguna</div>
            <Box display="flex" justifyContent="flex-end" alignItems="center" className={classes.button}>
              <Link to="/profile/formdatapengguna">
                <Button variant="outlined" color="primary">
                  Edit Profil
                </Button>
              </Link>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" className={classes.paperBox}>
            <Grid container alignItems="center" spacing={2}>
              {/* Grid 1 */}
              <Grid item xs={12} xs={4}>
                <Box display="flex" justifyContent="center">
                  <Avatar style={{ marginTop: 10 }} alt="Foto Peserta" src="" className={classes.avatar} />
                </Box>
                <Box display="flex" justifyContent="center">
                  <label htmlFor="upload-photo" className={classes.font} style={{ textAlign: "center" }}>
                    <strong>Nama Kontingen</strong>
                    <br />
                    manajer@email.com
                  </label>
                </Box>
              </Grid>
              {/* Grid 2 */}
              <Grid item xs={12} xs={4}>
                <Box display="flex" justifyContent="flex-start" style={{ textAlign: "justify" }}>
                  <p className={classes.font}>
                    <strong>Nama Pemegang Akun</strong>
                    <br />
                    Budi
                  </p>
                </Box>
                <Box display="flex" justifyContent="flex-start" style={{ textAlign: "justify" }}>
                  <p className={classes.font}>
                    <strong>Jenis Kelamim</strong>
                    <br />
                    Laki-laki
                  </p>
                </Box>
                <Box display="flex" justifyContent="flex-start">
                  <p className={classes.font}>
                    <strong>Alamat</strong>
                    <br />
                    Jl. Letjend Suprapto No.26, RT.10/RW.5, Cemp. Putih Tim., Kec. Cemp. Putih
                  </p>
                </Box>
              </Grid>
              {/* Grid 3 */}
              <Grid item xs={12} xs={4}>
                <Box display="flex" justifyContent="flex-start" style={{ textAlign: "justify" }}>
                  <p className={classes.font}>
                    <strong>Nomor Telepon</strong>
                    <br />
                    082112345678
                  </p>
                </Box>
                <Box display="flex" justifyContent="flex-start" style={{ textAlign: "justify" }}>
                  <p className={classes.font}>
                    <strong>Email</strong>
                    <br />
                    budi@gmail.com
                  </p>
                </Box>
                <Box display="flex" justifyContent="flex-start" style={{ textAlign: "justify" }}>
                  <p className={classes.font}>
                    <strong>Kata Sandi</strong>
                    <br />
                    ********
                  </p>
                </Box>
              </Grid>
              {/* End Grid */}
            </Grid>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
