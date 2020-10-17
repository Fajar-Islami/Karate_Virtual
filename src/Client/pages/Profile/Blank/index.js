import React from "react";
import Box from "@material-ui/core/Box";
import { ImgBlank } from "../../../assets/";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "center",
    fontWeight: "600",
    color: "#9e9e9e",
  },
}));

const Blank = ({ title = "", subtitle = "" }) => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ marginTop: "1vh" }}>
        <img src={ImgBlank} alt="Data Kosong" style={{ width: "350px" }} />
        <div className={classes.text}>
          <div style={{ fontSize: "38px" }}>Anda Tidak Punya Pembayaran Aktif</div>
          <div style={{ fontSize: "20px" }}>Silahkan Daftarkan Atlit Anda atau Tambah Atlit Anda</div>
        </div>
      </Box>
    </>
  );
};

export default Blank;
