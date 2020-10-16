import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "& img": {
      width: 150,
      height: 150,
      borderRadius: 10,
      objectFit: "contain",
      border: "1px solid black",
      marginRight: 10,
    },

    width: "65%",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& p": {
        margin: 0,
      },
      "& img": {
        width: 120,
        height: 120,
        marginBottom: 10,
      },
    },
  },
  input: {
    margin: "8px 0px !important",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  ket: {
    width: "100%",
    fontFamily: "Poppins !important",
    fontSize: "0.9rem",
  },
}));

export default function InputImageRegis() {
  const [image, setImage] = useState("https://cd.foundation/wp-content/uploads/sites/78/2019/04/blank_portrait.png");
  const classes = useStyles();
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  console.log(image);
  return (
    <div className={classes.root}>
      <FormHelperText className={classes.ket}>Masukan Foto dengan format PNG,JPEG</FormHelperText>
      <div className={classes.input}>
        <img src={image} alt="Input Gambar" />
        <input accept="image/x-png,image/jpeg" id="contained-button-file" name="contained-button-file" type="file" onChange={imageHandler} />
      </div>
    </div>
  );
}
