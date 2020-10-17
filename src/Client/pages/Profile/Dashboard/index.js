import React, { Component } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import PersonIcon  from "@material-ui/icons/Person";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FlagIcon from '@material-ui/icons/Flag';

import cx from "classnames";
// importing styles
import styles from "./index.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.single)}>
          <Typography color="textSecondary" gutterBottom>Peserta Open Single</Typography>
          <div className={styles.app__parent}>
            <div className={styles.app__left}>
              <PersonIcon style={{ fontSize: 50, color: "ced4da"}}/>
            </div>
            <div className={styles.app__right}>
              <Typography variant="h4"> 7</Typography>
            </div>
          </div>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.double)}>
          <Typography color="textSecondary" gutterBottom>Peserta Open Group</Typography>
          <div className={styles.app__parent}>
            <div className={styles.app__left}>
              <PeopleAltIcon style={{ fontSize: 50, color: "ced4da"}}/>
            </div>
            <div className={styles.app__right}>
              <Typography variant="h4">3</Typography>
            </div>
          </div>
        </Grid>
        
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.festival)}>
          <Typography color="textSecondary" gutterBottom>Peserta Open Festival</Typography>
          <div className={styles.app__parent}>
            <div className={styles.app__left}>
              <FlagIcon style={{ fontSize: 50, color: "ced4da"}}/>
            </div>
            <div className={styles.app__right}>
              <Typography variant="h4">2</Typography>
            </div>
          </div>
        </Grid>
        
      </Grid>

     
    </div>
  );
}
