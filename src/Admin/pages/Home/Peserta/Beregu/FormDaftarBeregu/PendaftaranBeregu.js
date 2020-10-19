import React, { Fragment } from "react";
//style
import { makeStyles } from "@material-ui/core/styles";
//component
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//component form
import IdentitasAtlet from "./IdentitasAtlet";
import TabelTim from "./TabelTim";
import { Link } from "react-router-dom";
import { PageTitle } from "../../../../../components";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: 30,
  },
  rootPaper: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const PendaftaranBeregu = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <Fragment>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} sm={8}>
          <Box>
            <PageTitle title="Data Tim Beregu" />
            <Typography style={{ fontSize: 24 }} variant="h6" gutterBottom>
              Nama Kontingen : Tim 1
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" justifyContent="flex-end" className={classes.box}>
            <Link to="/admin/pesertaberegu">
              <Button variant="contained" color="primary" className={classes.button} startIcon={<ArrowBackIcon />}>
                Kembali
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 50 }}>
        <Grid container spacing={3} justify="flex-end">
          <Grid item xs={12} sm={6}>
            <IdentitasAtlet />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TabelTim />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default PendaftaranBeregu;
