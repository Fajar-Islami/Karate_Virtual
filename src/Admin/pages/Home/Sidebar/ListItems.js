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
export default function ListItems({}) {
  return (
    <div>
      <Link to="/admin/dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>

      <Link to="/admin/peserta">
        <ListItem button>
          <ListItemIcon>
            <SportsKabaddiIcon />
          </ListItemIcon>
          <ListItemText primary="Peserta" />
        </ListItem>
      </Link>

      <Link to="/admin/pembayaran">
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Pembayaran" />
        </ListItem>
      </Link>
    </div>
  );
}
