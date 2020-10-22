import React from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
//other comp
import { TimerBagan } from '../../../assets';
import Timer from './Timer';



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
      width: "647px",
      height: "400px",
      marginBottom: 30,
  },
}));

export default function Bagan() {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" className={classes.title}>
              <strong>Bagan Pertandingan</strong>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <img src={TimerBagan} alt="Menunggu Bagan Pertandingan" className={classes.img}/>
          </Box>
          <Box display="flex" justifyContent="center">
            <Timer/>
          </Box>
        </div>
    )
}
