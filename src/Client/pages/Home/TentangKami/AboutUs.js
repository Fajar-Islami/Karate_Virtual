import React from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
//other comp
import { Us } from '../../../assets';


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
    width: "447px",
    height: "400px",
    },
    paragraf: {
        fontFamily: "Rubik",
        fontSize: 18, 
        color: "black", 
        textAlign: "center", 
    },
    boxContact: {
        marginTop: 20,
        backgroundColor: "black",
        color: "white",
        fontFamily: "Rubik",

    }
}));

export default function About() {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" className={classes.title}>
              <strong>Tentang Kami</strong>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <img src={Us} alt="Tentang Kami" className={classes.img}/>
          </Box>
          <Box display="flex" justifyContent="center" className={classes.paragraf}>
              <p>Karate merupakan cabang beladiri yang dilombakan dalam Kompetisi Olahraga Siswa Nasional (KOSN) baik ditingkat Kecamatan, Kotamadya, Provinsi dan Nasional. Perlu kiranya dilakukan pembinaan secara berjenjang dan terarah agar karateka-karateka usia sekolah dapat tersalurkan minat dan bakatnya. Salah satunya melalui kompetisi atau kejuaraan yang akan diselenggarakan ini.
              <br/>
              Kegiatan ini merupakan agenda rutin tahunan dalam program kerja kepengurusan MGMP PJOK Sudin Wilayah 2 Jakarta Timur yang diselenggarakan disetiap bulan November. Untuk tahun ini dalam masa pandemi covid-19 tetap diselenggarakan dengan nuansa yang berbeda dari biasanya yaitu melalui sistem pertandingan virtual. Semoga melalui kegiatan ini dapat memotivasi para peserta didik melalui kegiatan olahraga khususnya karate.</p>
          </Box>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={4}>
                <Grid item xs={12} xs={6}>
                    <Box display="flex" justifyContent="center" className={classes.boxContact}>
                        <p>Narahubung: 0859-2119-4336</p>
                    </Box>
                </Grid>
                <Grid item xs={12} xs={6}>
                    <Box display="flex" justifyContent="center" className={classes.boxContact}>
                        <p>Bank DKI No: 52723090450 a.n. Eko Supriyanto</p>
                    </Box>
                </Grid>
            </Grid>
          </Box>
        </div>
    )
}
