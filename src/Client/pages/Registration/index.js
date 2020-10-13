import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Container, FormControl, RadioGroup, Grid, Button } from "@material-ui/core";
import { InputTextRegis } from "../../components";
import RadioButtons from "../../components/RadioButtonRegis";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    minWidth: 275,
    borderRadius: "50px",
    paddingLeft: "30px",
    paddingRight: "60px",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "1.5rem",
  },
  subtitle: {
    fontFamily: "Poppins",
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
}));

export default function SimpleCard() {
  useEffect(() => {
    document.body.bgColor = "#D2E4FF";
    return () => {
      document.body.bgColor = "";
    };
  }, []);

  const classes = useStyles();

  return (
    <Container width="75%">
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardIsi}>
          <span className={classes.title}>Belum Punya Akun?</span>
          <span className={classes.subtitle}>Buat Akun Sekarang</span>
          <FormControl className={classes.form}>
            <InputTextRegis textField="Nama Kontingen" />
            <InputTextRegis textField="Nama Pemegang Akun" />
            <RadioGroup row className={classes.radio}>
              <Grid item xs={12} sm={6}>
                <RadioButtons />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioButtons />
              </Grid>
            </RadioGroup>
            <InputTextRegis textField="Alamat" />
            <InputTextRegis textField="Nomor HP" />
            <InputTextRegis textField="Email" />
            <InputTextRegis textField="Kata Kunci" />
            <InputTextRegis textField="Masukan Ulang Kata Kunci" />
            <div>
              <Button variant="contained" color="primary" href="#">
                Simpan
              </Button>
            </div>
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
}
