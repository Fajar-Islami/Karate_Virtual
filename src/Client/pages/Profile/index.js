import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { Footer, Logout } from "../../components";
import { RoutesProfile } from "../../config";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListItems from "./Sidebar/ListItems";

import "./style.css";
import { useMediaQuery, useTheme } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    "& a": {
      color: "#000",
      textDecoration: "none",
    },
    "& .MuiDialog-paper": {
      borderRadius: "20px !important",
      padding: "16px !important",
    },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    "& a": {
      color: "inherit",
      fontWeight: "600",
    },
  },
  drawerPaper: {
    position: "fixed",
    whiteSpace: "nowrap",
    width: drawerWidth,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,

    overflow: "auto",
  },
  container: {
    marginTop: theme.spacing(2),
    marginRight: "auto",
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  contentPage: {
    transition: "0.2s",
    maxWidth: "95%",
    // border: "1px solid black",
    fontFamily: "Poppins !important",
    padding: "10px 30px",
  },
}));

export default function Profile() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(matches);
  return (
    <Fragment>
      <Router>
        {/* <CssBaseline /> */}
        <div className={classes.root}>
          <div className={classes.content}>
            <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                  <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  <a href="/">Kihon Virtual Karate Championship</a>
                </Typography>
                <Logout />
              </Toolbar>
            </AppBar>
            <Drawer
              variant={matches ? "temporary" : "permanent"}
              classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}>
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItems openP={open} />
              </List>
            </Drawer>
            <main>
              <Container maxWidth="false" className={classes.container}>
                <div className={classes.appBarSpacer} />
                <Box mt={1} ml={matches === true ? "0px" : open === true ? "240px" : "72px"} className={classes.contentPage}>
                  <RoutesProfile />
                </Box>
              </Container>
            </main>
          </div>
          <Footer ml={matches === true ? "0px" : open === true ? "240px" : "72px"} />
        </div>
      </Router>
    </Fragment>
  );
}
