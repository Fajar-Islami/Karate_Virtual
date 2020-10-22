import React from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
//other comp
import TimeLine from './TimeLine';
import { TimelineTanding } from '../../../assets';


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Rubik",
    backgroundColor:"white",
    padding: 50,
  },
  title: {
    fontFamily: "Rubik",
    fontWeight: 700, 
    fontSize: 33, 
    color: "black", 
    textAlign: "center", 
    marginBottom: 50, 
    marginTop: 30,
  },
  img: {
      width: "620px",
      height: "542px",
  },
}));

export default function Alur() {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" className={classes.title}>
              <strong>Alur Kejuaraan</strong>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={4}>
              <Grid item xs={12} xs={6}>
                <Box display="flex" justifyContent="center">
                  <TimeLine/>
                </Box>
              </Grid>
              <Grid item xs={12} xs={6}>
                <Box display="flex" justifyContent="center">
                  <img src={TimelineTanding} alt="Alur Pertandingan" className={classes.img}/>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
    )
}
