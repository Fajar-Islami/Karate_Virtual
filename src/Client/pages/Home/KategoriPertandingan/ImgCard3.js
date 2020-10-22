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
import { imgCard3 } from '../../../assets';

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

export default function ImgCard3() {
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
        title="Festival" 
        className={classes.cardTitle}
      />
      <CardMedia
        className={classes.media}
        image={imgCard3}
        title="Festival"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Kategori Festival: Jenjang SD/MI, SMP/MTs dan SMA/MA.
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
            Klasifikasi Jenjang Pendidikan:
            <ol>
              <li>SD/MI</li>
              <ul>
                <li>Sabuk Putih s.d. Kuning: Kata Dasar 1</li>
                <li>Sabuk Hijau s.d. Biru: Kata 3</li>
                <li>Sabuk Cokelat: Kata 5</li>
              </ul>
              <li>SMP/MTs</li>
              <ul>
                <li>Sabuk Putih s.d. Kuning: Kata Dasar 1</li>
                <li>Sabuk Hijau s.d. Biru: Kata 3</li>
                <li>Sabuk Cokelat: Kata 5</li>
              </ul>
              <li>MA</li>
              <ul>
                <li>Sabuk Putih s.d. Kuning: Kata Dasar 1</li>
                <li>Sabuk Hijau s.d. Biru: Kata 3</li>
                <li>Sabuk Cokelat: Kata 5</li>
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
              <li>Peserta mengirimkan 1 video, dengan menggunakan sabuk sesuai dengan kelas yang diikuti.</li>
              <li>Peserta festival akan dikelompokan menjadi 4 orang dalam tiap kelompok sesuai kelasnya.</li>
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