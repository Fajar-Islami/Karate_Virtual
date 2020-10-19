import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Poppins !important",
    "& span": {
      fontWeight: "600",
    },
  },
}));

export default function Logout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Keluar">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className={classes.text}>
          {"Yakin ingin keluar?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.text}>
            Tekan keluar untuk keluar dari Akun ini.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <a href="/admin/masuk">
            <Button onClick={handleClose} variant="contained" color="primary" className={classes.text}>
              <span>Keluar</span>
            </Button>
          </a>
          <Button onClick={handleClose} color="primary" autoFocus className={classes.text}>
            <span>Batal</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
