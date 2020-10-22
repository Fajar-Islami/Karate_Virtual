import React from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//comp
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Paper from '@material-ui/core/Paper';
import TableChartIcon from '@material-ui/icons/TableChart';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function TimeLine() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            1 s.d. 31 Oktober 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AssignmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Pendaftaran
            </Typography>
            <Typography>Register ke rekening panitia dan struk bukti pembayaran diunggah ke aplikasi ini.</Typography>
            <Typography>Kontingen/Peserta mengisi formulir pendaftaran di aplikasi ini.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* 1 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2 November 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <TableChartIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Bagan Pertandingan
            </Typography>
            <Typography>Bagan pertandingan akan diumumkan di aplikasi ini.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* 2 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2 s.d. 4 November 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CloudUploadIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Unggah Video
            </Typography>
            <Typography>Peserta Open & Festival mengunggah video melalui aplikasi ini.</Typography>
            <Typography>Ketentuan video yang diunggah tertera di juknis/proposal.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* 3 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            7 November 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AssessmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Penilaian
            </Typography>
            <Typography>Penilaian langsung oleh juri, peserta dapat mengikuti jalannya pertandingan melalui zoom meeting.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* 4 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            9 November 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CardGiftcardIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Penghargaan
            </Typography>
            <Typography>Medali dan piagam dikirim ke alamat pelatih atau perwakilan dari salah satu peserta pada kontingen yang sama.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* 5 */}
    </Timeline>
  );
}
