import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Container, FormControl, InputLabel, Input, FormHelperText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { TextFieldComp } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
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
    marginTop: "10px",
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

  console.log(document.body.bgColor);
  return (
    <Container width="75%">
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardIsi}>
          <span className={classes.title}>Belum Punya Akun?</span>
          <span className={classes.subtitle}>Buat Akun Sekarang</span>
          <FormControl className={classes.form}>
            <TextFieldComp />
            <TextFieldComp />
            <TextFieldComp />
            <TextFieldComp />
            <TextFieldComp />
            <TextFieldComp />
            <TextFieldComp />
            <TextFieldComp />
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
}
