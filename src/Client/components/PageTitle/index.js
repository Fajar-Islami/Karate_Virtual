import React from "react";
import { Popover, Typography, IconButton, makeStyles } from "@material-ui/core";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "36px",
    fontWeight: "600",
  },
  typography: {
    fontFamily: "Poppins !important",
    padding: theme.spacing(2),
  },
}));

const PageTitle = ({ title = "Title", popover = "The content of the Popover." }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.root}>
      {title}
      <IconButton aria-describedby={id} variant="outlined" onClick={handleClick}>
        <ContactSupportIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}>
        <Typography className={classes.typography}> {popover} </Typography>
      </Popover>
    </div>
  );
};

export default PageTitle;
