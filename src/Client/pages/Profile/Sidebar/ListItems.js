import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PeopleIcon from "@material-ui/icons/People";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";
import PaymentIcon from "@material-ui/icons/Payment";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import { List, Collapse } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HistoryIcon from "@material-ui/icons/History";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subIcon: {
    minWidth: "48px",
  },
}));

// export const mainListItems = (
export default function ListItems({ openP = "" }) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
    // setOpen2(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div>
      <Link to="/profile/dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>

      <ListItem button onClick={handleClick}>
        {openP === "true" ? (
          <ListItemIcon>
            <SportsKabaddiIcon />
          </ListItemIcon>
        ) : (
          <Link to="/profile/tabelerorangan">
            <ListItemIcon>
              <SportsKabaddiIcon />
            </ListItemIcon>
          </Link>
        )}

        <ListItemText primary="Pendaftaran" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open && openP} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/profile/tabelerorangan">
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.subIcon}>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Peorangan" />
            </ListItem>
          </Link>
          <Link to="/profile/tabelberegu">
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.subIcon}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Beregu" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2}>
        {openP === "true" ? (
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
        ) : (
          <Link to="/profile/pembayaranaktif">
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
          </Link>
        )}

        <ListItemText primary="Pembayaran" />
        {open2 === "true" ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2 && openP} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/profile/pembayaranaktif">
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.subIcon}>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="Pembayaran Akitf" />
            </ListItem>
          </Link>
          <Link to="/profile/riwayatpembayaran">
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.subIcon}>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Riwayat Pembayaran" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <Link to="/profile/datapengguna">
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Data Pengguna" />
        </ListItem>
      </Link>
    </div>
  );
}
