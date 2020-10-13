import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Container, FormControl, RadioGroup, Grid, Button } from "@material-ui/core";
import { InputTextRegis, InputImageRegis } from "../../components";
import RadioButtons from "../../components/RadioButtonRegis";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    minWidth: 275,
    borderRadius: "50px",
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(7),
    fontFamily: "Poppins !important",
  },
  title: {
    fontWeight: "600",
    fontSize: "1.5rem",
  },
  subtitle: {
    fontWeight: "400",
    fontSize: "1.25rem",
  },

  cardIsi: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  form: {
    marginTop: "30px",
  },
  radio: {
    width: "70%",
    marginBottom: "20px",
  },
  button: {
    fontFamily: "Poppins",
    fontWeight: "600",
    marginBottom: theme.spacing(2),
    borderRadius: "50px",
    padding: "8px 20px",
  },
  bottom: {
    marginLeft: theme.spacing(2),
    fontSize: "1.15rem",
  },
}));

export default function Registration() {
  useEffect(() => {
    document.body.bgColor = "#D2E4FF";
    document.title = "Registrasi";
    return () => {
      document.body.bgColor = "";
    };
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardIsi}>
          <span className={classes.title}>Belum Punya Akun?</span>
          <span className={classes.subtitle}>Buat Akun Sekarang</span>
          <FormControl className={classes.form}>
            <InputTextRegis textField="Nama Kontingen" ket="Nama boleh menggunakan angka" />
            <InputTextRegis textField="Nama Pemegang Akun" ket="Nama hanya boleh menggunakan huruf" />
            <RadioGroup row className={classes.radio}>
              <Grid item sm={6}>
                <RadioButtons ket="Pria" />
              </Grid>
              <Grid item sm={6}>
                <RadioButtons ket="Wanita" />
              </Grid>
            </RadioGroup>
            <InputTextRegis textField="Alamat" ket="Masukan alamat lengkap Anda" />
            <InputTextRegis textField="Nomor HP" ket="Masukan nomor telepon yang bisa hubungi" />
            <InputTextRegis textField="Email" ket="Masukan alamat email yang aktif" />
            <InputTextRegis textField="Kata Kunci" ket="Kata kunci untuk masuk kedalam akun" />
            <InputTextRegis textField="Masukan Ulang Kata Kunci" />
            <InputImageRegis />
            <div>
              <Button variant="contained" color="primary" href="#" className={classes.button}>
                Simpan
              </Button>
            </div>
          </FormControl>
        </CardContent>
        <span className={classes.bottom}>
          Sudah Punya Akun?&nbsp;
          <Link to="/signin" style={{ color: "#000" }}>
            <b>Klik Disini</b>
          </Link>
        </span>
      </Card>
    </Container>
  );
}
