import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Container, FormControl, RadioGroup, Grid, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { InputTextRegis, InputImageRegis, InputPassRegis } from "../../components";
import RadioButtons from "../../components/RadioButtonRegis";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    minWidth: 275,
    borderRadius: "50px",
    padding: theme.spacing(4, 8, 4, 4),
    fontFamily: "Poppins !important",
    "& span": {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px",
      padding: 10,
    },
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
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px",
      padding: "20px 0px",
    },
  },
  form: {
    marginTop: "30px",
  },
  radio: {
    width: "70%",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  button: {
    fontFamily: "Poppins",
    fontWeight: "600",
    marginBottom: theme.spacing(1),
    borderRadius: "50px",
  },
  setuju: {
    marginLeft: "1px",
    marginBottom: "15px",
    textAlign: "left",
    marginRight: 0,
  },
  bottom: {
    marginTop: theme.spacing(2),
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    "& a": {
      color: "#000",
      textDecoration: "none",
      "& :hover": {
        textDecoration: "underline",
      },
    },
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
            <InputPassRegis />
            <InputImageRegis />
            <FormControlLabel control={<Checkbox value="accept" color="primary" />} className={classes.setuju} label="Saya menyetujui bahwa data yang saya isikan adalah benar" required />
            <div>
              <Button variant="contained" color="primary" href="#" className={classes.button}>
                Daftar
              </Button>
            </div>
          </FormControl>
          <div className={classes.bottom}>
            Sudah Punya Akun?&nbsp;
            <Link to="/signin">
              <b>Klik Disini</b>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
