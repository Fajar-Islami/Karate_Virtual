import React from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
//other comp
import ImgCard1 from './ImgCard1';
import ImgCard2 from './ImgCard2';
import ImgCard3 from './ImgCard3';

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
}));

export default function Kategori() {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" className={classes.title}>
              <strong>Kategori Pertandingan</strong>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={2}>
              <Grid item xs={12} xs={4}>
                <Box display="flex" justifyContent="center">
                  <ImgCard1/>
                </Box>
              </Grid>
              <Grid item xs={12} xs={4}>
                <Box display="flex" justifyContent="center">
                  <ImgCard2/>
                </Box>
              </Grid>
              <Grid item xs={12} xs={4}>
                <Box display="flex" justifyContent="center">
                  <ImgCard3/>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
    )
}
