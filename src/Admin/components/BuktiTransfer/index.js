import React, { useState } from "react";
//style
import { makeStyles, withStyles } from "@material-ui/core/styles";
//component
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// other comp
import { ScrollToTop } from "../../config/";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const useStyles = makeStyles((theme) => ({
  large: {
    display: "flex",
    width: 500,
    height: 500,
  },
  paperUpload: {
    marginTop: 30,
    marginBottom: 30,
    padding: 5,
    "& img": {
      width: 500,
      height: 500,
      borderRadius: 10,
      objectFit: "contain",
      border: "1px solid black",
      marginLeft: 20,
    },
  },
  fieldKeterangan: {
    marginTop: 10,
    marginBottom: 15,
  },
}));

const BuktiTransfer = ({ data = "" }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.paperUpload}>
        <div className={classes.paperUpload}>
          <Box display="flex">
            <Box display="flex" mr={5} justifyContent="center">
              <img src={data.foto} className={classes.large} alt="" />
            </Box>
            <Box display="flex" flexWrap="wrap" height="150px" width="100%" className={classes.fieldKeterangan}>
              <TextField disabled id="filled-disabled" label="Tanggal Pembayaran" defaultValue={data.tglBayar} style={{ marginRight: "20px", marginBottom: "20px", width: "234px" }} variant="filled" />
              <TextField disabled id="filled-disabled" label="Waktu Upload" style={{ marginRight: "20px", marginBottom: "20px", width: "234px" }} defaultValue={data.waktuUpload} variant="filled" />
              <TextField disabled id="filled-disabled" label="No Rekening" style={{ marginRight: "20px", marginBottom: "20px", width: "234px" }} defaultValue={data.noRek} variant="filled" />
              <Modal />
            </Box>
          </Box>
        </div>
      </Paper>
    </div>
  );
};

export default BuktiTransfer;
