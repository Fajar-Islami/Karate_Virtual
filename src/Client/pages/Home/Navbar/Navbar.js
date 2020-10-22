import React, { useState, useEffect, useRef } from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ImgBG } from '../../../assets';
import Kategori from '../KategoriPertandingan/Kategori';
import Alur from '../AlurKejuaraan/Alur';
import Bagan from '../BaganPertandingan/Bagan';
import About from '../TentangKami/AboutUs';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Rubik",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
  bg: {
    minHeight: "100vh",
    backgroundImage: `url(${ImgBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  appBarTransparent:{
      backgroundColor: "rgba(0, 0, 0, 0)",
  },
  appBarSolid:{
    backgroundColor: "rgba(0, 0, 0)",
  },
  buttonNav: {
    fontFamily: "Rubik",
  },
  divTitle: {
    color: "white", 
    textAlign: "center", 
  },
  title1: {
    fontWeight: 700, 
    fontSize: 56, 
    
  },
  title2: { 
    fontWeight: 400, 
    fontSize: 23, 
  },
  buttonWhite: {
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "21px",
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    position:"absolute",
    width: "95px",
    height: "50px",
  },
  link: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [navbarBg, setNavbarBg] = useState("appBarTransparent");

  const navRef = React.useRef();
  navRef.current = navbarBg;

  useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY > 50;
          if (show) {
              setNavbarBg("appBarSolid");
          }else {
              setNavbarBg("appBarTransparent");
          }
      }
      document.addEventListener("scroll", handleScroll);
      return () => {
          document.removeEventListener("scroll", handleScroll);
      }
  }, []);

  const beranda = useRef(null);
  const goToBeranda = () => window.scrollTo({
    top: beranda.current.offsetTop, 
    behavior: "smooth"
  });

  const kategoriPertandingan = useRef(null);
  const goToKategoriPertandingan = () => window.scrollTo({
    top: kategoriPertandingan.current.offsetTop, 
    behavior: "smooth"
  });
  
  const alurKejuaraan = useRef(null);
  const goToAlurKejuaraan = () => window.scrollTo({
    top: alurKejuaraan.current.offsetTop, 
    behavior: "smooth"
  });
  
  const baganPertandingan = useRef(null);
  const goToBaganPertandingan = () => window.scrollTo({
    top: baganPertandingan.current.offsetTop, 
    behavior: "smooth"
  });
  
  const tentangKami = useRef(null);
  const goToTentangKami = () => window.scrollTo({
    top: tentangKami.current.offsetTop, 
    behavior: "smooth"
  });

  return (
    <div>
      <div className={classes.bg}>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes[navRef.current]} ref={beranda}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <strong>Kata Virtual Karate Championship</strong>
              </Typography>
              <Button color="inherit" className={classes.buttonNav} onClick={goToBeranda}>Beranda</Button>
              <Button color="inherit" className={classes.buttonNav} onClick={goToKategoriPertandingan}>Kategori Pertandingan</Button>
              <Button color="inherit" className={classes.buttonNav} onClick={goToAlurKejuaraan}>Alur Kejuaraan</Button>
              <Button color="inherit" className={classes.buttonNav} onClick={goToBaganPertandingan}>Bagan Pertandingan</Button>
              <Button color="inherit" className={classes.buttonNav} onClick={goToTentangKami}>Tentang Kami</Button>
            </Toolbar>
          </AppBar>
          <div className={classes.divTitle}>
            <h1 className={classes.title1}>Kejuaraan Karate Virtual Kata</h1>
            <h5 className={classes.title2}>-Kejuaraan Karate Tingkat Pelajar “MGMP PJOK CUP III” Series 1 Virtual Kata Open & Festival-</h5>
              <Box>
                <Grid container spacing={10}>
                  <Grid item xs={12} xs={6}>
                    <Box display="flex" justifyContent="flex-end" style={{marginRight:25}}>
                          <Link to="/signin" className={classes.link}>
                            <Button color="inherit" size="large" className={classes.buttonWhite}>Masuk</Button>
                          </Link>
                      </Box>
                  </Grid>
                  <Grid item xs={12} xs={6}>
                    <Box display="flex" justifyContent="flex-start" style={{marginLeft:25}}>
                        <Link to="/registration" className={classes.link}>
                          <Button color="inherit" size="large" className={classes.buttonWhite}>Daftar</Button>
                        </Link>
                    </Box>     
                  </Grid>
                </Grid>
              </Box>
          </div>
        </div>
      </div>
      <div ref={kategoriPertandingan}>
        <Kategori/>
      </div>
      <div ref={alurKejuaraan}>
        <Alur/>
      </div>
      <div ref={baganPertandingan}>
        <Bagan/>
      </div>
      <div ref={tentangKami}>
        <About/>
      </div>
    </div>
  );
}