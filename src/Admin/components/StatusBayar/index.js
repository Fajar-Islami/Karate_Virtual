import React, { Fragment, useEffect } from "react";
//style
import { withStyles, makeStyles } from "@material-ui/core/styles";
//component
import Box from "@material-ui/core/Box";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  pengumumanBayar: {
    textAlign: "center",
  },
}));

const StatusBayar = ({ status = "0" }) => {
  const [statusBayar, setstatusBayar] = useState(0);
  const classes = useStyles();

  const angka = (tes) => {
    return setstatusBayar(parseInt(tes, 10));
  };

  useEffect(() => {
    angka(status);
  }, []);
  console.log(statusBayar);

  return (
    <Fragment>
      {statusBayar === 0 ? (
        <>
          <Box display="flex" justifyContent="center" className={classes.pengumumanBayar}>
            <span style={{ fontWeight: "600", fontSize: "30px", color: "#F90505" }}>PEMBAYARAN BELUM SELESAI</span>
          </Box>
          <Box display="flex" justifyContent="center" className={classes.pengumumanBayar}>
            <span style={{ fontSize: 18, color: "#F90505" }}>SEGERA LUNASI PEMBAYARAN ANDA UNTUK MENDAFTARKAN ATLET BARU</span>
          </Box>
        </>
      ) : (
        <Box display="flex" justifyContent="center" className={classes.pengumumanBayar}>
          <span style={{ fontWeight: "600", fontSize: "30px", color: "rgb(51,184,32)" }}>PEMBAYARAN LUNAS</span>
        </Box>
      )}
    </Fragment>
  );
};

export default StatusBayar;
