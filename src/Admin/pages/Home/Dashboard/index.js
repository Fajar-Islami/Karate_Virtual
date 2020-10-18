import React from "react";
import clsx from "clsx";
import { Grid, Paper, makeStyles, Box } from "@material-ui/core";
import { CardDashboard, TableDashboard } from "../../../components";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 150,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper variant="outlined" justifyContent="space-between" component={Box} className={fixedHeightPaper}>
            <CardDashboard title="Total Peserta" totPeserta="true" festival="50" open="50" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper variant="outlined" justifyContent="space-between" component={Box} className={fixedHeightPaper}>
            <CardDashboard title="Pembayaran Belum Lunas" orang="10" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper variant="outlined" justifyContent="space-between" component={Box} className={fixedHeightPaper}>
            <CardDashboard title="Pembayaran Belum Konfirmasi" orang="10" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper variant="outlined" justifyContent="space-between" component={Box} className={fixedHeightPaper}>
            <CardDashboard title="Pembayaran Lunas" orang="10" />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper variant="outlined" className={classes.paper}>
            <TableDashboard />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
