import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddBoxIcon from "@material-ui/icons/AddBox";
import GetAppIcon from "@material-ui/icons/GetApp";

import ProsesPembayaran from "./ProsesPembayaran";
import RincianPembayaran from "./RincianPembayaran";
import CetakInvoice from "./CetakInvoice";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    fontSize: "36px",
    fontWeight: "600",
    textAlign: "center",
  },
  layout: {
    // width: "auto",
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    // marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(3),
    // padding: theme.spacing(2),
    // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //   marginTop: theme.spacing(6),
    //   marginBottom: theme.spacing(6),
    // },
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      // padding: theme.spacing(3),
      // width: 600,
      // marginLeft: "auto",
      // marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  konten: {
    margin: theme.spacing(0, 10),
    marginTop: theme.spacing(3),
  },
}));

const steps = ["Rincian Pembayaran", "Proses Pembayaran", "Cetak Invoice"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RincianPembayaran />;
    case 1:
      return <ProsesPembayaran />;
    case 2:
      return <CetakInvoice />;
    default:
      throw new Error("Unknown step");
  }
}

const PembayaranAktif = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const firstPage = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        {/* <Paper className={classes.paper} maxWidth="lg"> */}
        <div className={classes.title}>Pembayaran Aktif</div>

        <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <div className={classes.konten}>
              <Typography variant="h4" gutterBottom>
                Terimakasih telah berpatisipasi dalam turnamen ini.
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={3}>
                <Typography variant="h6">Sekarang Anda dapat menambah atlit untuk mengikuti peserta.</Typography>
                <Link to="/profile/nodata">
                  <Button variant="contained" color="primary" onClick={firstPage} className={classes.button} startIcon={<AddBoxIcon />}>
                    Transaksi Baru
                  </Button>
                </Link>
              </Box>
            </div>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {/* {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )} */}
                {activeStep === steps.length - 1 ? (
                  <Button variant="contained" color="primary" className={classes.button} startIcon={<GetAppIcon />}>
                    Unduh Faktur
                  </Button>
                ) : (
                  ""
                )}
                <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                  {activeStep === steps.length - 1 ? "Selesai" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
        {/* </Paper> */}
      </main>
    </React.Fragment>
  );
};

export default PembayaranAktif;
