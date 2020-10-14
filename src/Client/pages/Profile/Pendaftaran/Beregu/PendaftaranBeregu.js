import React,{Fragment} from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IdentitasAtlet from './IdentitasAtlet';
import TabelTim from './TabelTim';

const useStyles = makeStyles((theme) => ({
    title: {
    marginTop:30,
    marginLeft:30,
      width: '100%',
      maxWidth: 500,
    },
    box: {
        marginTop:30,
        marginRight:30
    },
    rootPaper: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
  }));

const PendaftaranBeregu = () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    return ( 
        <Fragment>
            <Box className={classes.title}>
                <Typography variant="h4" gutterBottom>Formulir Pendaftaran Peserta</Typography>
                <Typography variant="h6" gutterBottom>Beregu</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end" className={classes.box}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<ArrowBackIcon/>}
                    >
                        Kembali
                </Button>
            </Box>
            <Grid container className={classes.rootPaper} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid item><IdentitasAtlet/></Grid>
                        <Grid item><TabelTim/></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default PendaftaranBeregu;