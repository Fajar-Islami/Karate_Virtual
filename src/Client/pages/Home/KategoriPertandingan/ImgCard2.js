import React from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//comp
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
//other comp
import { imgCard2 } from '../../../assets';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    fontFamily: "Rubik",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardTitle: {
    fontFamily: "Rubik",
    fontWeight: 400, 
    fontSize: 24, 
  },
}));

export default function ImgCard2() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <AssignmentIcon />
          </Avatar>
        }
        title="Open Beregu" 
        className={classes.cardTitle}
      />
      <CardMedia
        className={classes.media}
        image={imgCard2}
        title="Open Beregu"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Kategori Open Beregu: Pra Usia Dini – Usia Dini – Pra Pemula – Pemula – Kadet – Junior
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>
            Kelas Pertandingan Putra dan Putri
          </Typography>
          <Typography paragraph>
            Klasifikasi Usia:
            <ol>
              <li>Usia Dini s.d. Pra Pemula</li>
              <ul>
                <li>Tahun Kelahiran 2009 s.d. 2012</li>
                <li>Babak Penyisihan: Kata 1 s.d. 5</li>
                <li>Babak Final: Kata WKF</li>
              </ul>
              <li>Pemula</li>
              <ul>
                <li>Tahun Kelahiran 2007 s.d. 2008</li>
                <li>Babak Penyisihan: Kata WKF</li>
                <li>Babak Final: Kata WKF</li>
              </ul>
              <li>Kadet s.d. Junior</li>
              <ul>
                <li>Tahun Kelahiran 2003 s.d. 2006</li>
                <li>Babak Penyisihan: Kata WKF</li>
                <li>Babak Final: Kata WKF</li>
              </ul>
            </ol>
          </Typography>
          <Typography paragraph>
            Ketentuan Umum:
            <ol>
              <li>Peserta diharapkan mengikuti alur dan cara pendaftaran yang sudah tertera dijuknis/proposal.</li>
              <li>Video yang diupoad melewati batas waktu yang telah ditentukan tidak akan diproses.</li>
              <li>Setiap peserta yang mengikuti event ini harus seijin/berkoordinasi dengan pelatih masing-masing di Dojo.</li>
              <li>Tiap Peserta mentransfer biaya pendaftaran dengan jadwal dan ketentuan yang tertera di atas.</li>
              <li>Peserta yang sudah mengirimkan struk bukti transfer ke aplikasi ini, selanjutnya admin akan memberikan akses kepada peserta untuk mengupload video.</li>
            </ol>
          </Typography>
          <Typography paragraph>
            Ketentuan Open Beregu:
            <ol>
              <li>Peserta mengirimkan 2 video. (1 video penyisihan menggunakan sabuk AO, dan 1 video final menggunakan sabuk AKA)</li>
              <li>Peserta dibagi kedalam 2 grup. Babak pertama menggunakan video 1/sabuk AO akan diambil 3 orang/top ranking 1,2,3.</li>
              <li>Babak kedua menggunakan video ke-2/sabuk AKA. Rangking 1 masing-masing grup akan memperebutkan Juara 1 dan 2. Ranking 2 dan 3 akan memperebutkan juara 3.</li>
              <li>Kualitas video minimal 720p tanpa adanya pengeditan (efek suara, music, cutting, kecepatan video)</li>
              <li>Pengambilan video layar mendatar/landscape.</li>
              <li>Pengambilan video tidak menghadap sinar matahari, dan dapat mengambil objek atlet secara keseluruhan.</li>
              <li>Tidak diperbolehkan menampilkan logo sponsor atau lainnya dalam bingkai video.</li>
            </ol>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}