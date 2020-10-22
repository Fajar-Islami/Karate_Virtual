import React, { useEffect, useState } from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "Geo",
      fontSize: "96px",
      textAlign: "center",
    },
    subWaktu: {
        fontFamily: "Rubik",
        fontSize: "48px",
        fontWeight: "400px",
        textAlign: "center",
        marginTop: 30,
    },
    keterangan: {
        fontFamily: "Rubik",
        fontSize: "28px",
        fontWeight: "400px",
        textAlign: "center",
        marginTop: 30,
    },
  }));

export default function Timer() {
    const classes = useStyles();
    const [countdownDate, setCountdownDate] = useState(new Date('11/02/2020').getTime());
    const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    useEffect(() => {
      setInterval(() => updateCountdown(), 1000);
    }, []);
  
    const updateCountdown = () => {
      // TODO: Code to calculate how long between the countdown date and the current time
      if (countdownDate) {
        // Get the current time
        const currentTime = new Date().getTime();
    
        // Get the time remaining until the countdown date
        const distanceToDate = countdownDate - currentTime;
    
        // Calculate days, hours, minutes and seconds remaining
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
    
        // For visual appeal, add a zero to each number that's only one digit
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
    
        // Set the state to each new time
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };
    
    return (
        <div className={classes.root}>
            <div className='countdown-wrapper'>
                <div className='time-section'>
                    <div className='time'>{state.days || '0'} : {state.hours || '00'} : {state.minutes || '00'} : {state.seconds || '00'}</div>
                </div>
                <div className={classes.subWaktu}>Hari : Jam : Menit : Detik</div>
            </div>
            <div className={classes.keterangan}>Bagan pertandingan akan diumumkan dalam beberapa saat lagi...</div>
        </div>
    )
}
