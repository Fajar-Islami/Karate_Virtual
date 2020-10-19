import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../TitleDashboard";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    // flex: 1,
  },
  link: {
    color: "blue !important",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default function CardDashboard({ title = "", orang = "", totPeserta = "false", festival = "", open = "", link = "" }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box>
        <Title title={title} />
        {totPeserta === "true" ? (
          <>
            <Typography variant="subtitle1" className={classes.depositContext}>
              <b> Festival : {festival} /100 Orang </b>
            </Typography>
            <Typography variant="subtitle1" className={classes.depositContext}>
              <b> Open Turnamen : {open} /150 Orang </b>
            </Typography>
          </>
        ) : (
          <Typography component="p" variant="h4">
            {orang} Orang
          </Typography>
        )}
      </Box>
      <Box>
        <Link color="primary" className={classes.link} to={`/admin/${link}`}>
          Lihat Data
        </Link>
      </Box>
    </React.Fragment>
  );
}
