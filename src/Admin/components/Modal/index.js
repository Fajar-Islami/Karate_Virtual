import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, Link } from "react-router-dom";
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Poppins !important",
    "& span": {
      fontWeight: "600",
    },
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Modal({ handleNext }) {
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen(false);
    history.push("/admin/pembayaran");
  };

  return (
    <div>
      {/* <Tooltip title="Keluar">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip> */}
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen} className={classes.button}>
        Selanjutnya
      </Button> */}
      <Button variant="contained" style={{ width: "234px", height: "56px" }} color="primary" component="span" onClick={handleClickOpen} startIcon={<OfflinePinIcon />}>
        Verifikasi Pembayaran
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className={classes.text}>
          <span style={{ fontWeight: "600" }}> Konfirmasi Pembayaran ?</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.text} style={{ color: "red" }}>
            Data yang sudah diproses <br />
            tidak dapat <b>diedit dan dihapus! </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <a href="#"> */}
          {/* <Link to="/admin/pembayaran"> */}
          <Button onClick={handleClose1} variant="contained" color="primary" className={classes.text}>
            <span>Konfirmasi</span>
          </Button>
          {/* </Link> */}
          {/* </a> */}
          <Button onClick={handleClose} color="primary" autoFocus className={classes.text}>
            <span>Batal</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
