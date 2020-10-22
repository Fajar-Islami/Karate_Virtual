import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./Navbar/Navbar";
// import Kategori from "./KategoriPertandingan/Kategori";
// import Alur from "./AlurKejuaraan/Alur";
// import Bagan from "./BaganPertandingan/Bagan";
// import About from "./TentangKami/AboutUs";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
      fontFamily: "Rubik",
  },
  button: {
    margin: theme.spacing(1),
    fontWeight: "600",
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

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Navbar/>
      {/* <Kategori/>
      <Alur/>
      <Bagan/>
      <About/> */}
      <Footer/>
    </div>

    // <Box className={classes.root}>
    //   <h1 style={{ marginLeft: "10px" }}>Halaman Home</h1>
    //   <Box display="flex">
    //     <a href="/signin">
    //       <Button variant="contained" className={classes.button} color="primary">
    //         Masuk
    //       </Button>
    //     </a>
    //     <a href="/registration">
    //       <Button variant="contained" className={classes.button} color="primary">
    //         Registrasi
    //       </Button>
    //     </a>
    //     <Link to="/profile/">
    //       <Button variant="contained" className={classes.button} color="primary">
    //         Profil
    //       </Button>
    //     </Link>
    //   </Box>
    // </Box>
  );
};

export default Home;
