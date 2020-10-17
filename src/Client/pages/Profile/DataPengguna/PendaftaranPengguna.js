import React,{Fragment} from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//component form
import FormDataPengguna from './FormDataPengguna';


const useStyles = makeStyles((theme) => ({
    title: {
    marginTop:30,
    marginLeft:30,
      width: '100%',
      maxWidth: 500,
    },
    box: {
        margin:30
    },
    rootPaper: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
  }));

const PendaftaranPengguna = () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    return ( 
        <Fragment>
            <Paper elevation={3} style={{margin:20}}>
                <div style={{margin:20}}>
                    <Box className={classes.title}>
                        <Typography style={{fontSize:30}} variant="h4" gutterBottom>Formulir Edit Profil</Typography>
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
                    <Box display="flex" justifyContent="center" style={{marginBottom:50}}>
                        <FormDataPengguna/>
                    </Box>
                </div>
            </Paper>
        </Fragment>
     );
}
 
export default PendaftaranPengguna;