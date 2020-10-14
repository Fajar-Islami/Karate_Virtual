import React,{Fragment} from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    paperTitle: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginTop: theme.spacing(5),
        backgroundColor: '#bbdefb',
        color: '#0d47a1',
        width: theme.spacing(95),
        height: theme.spacing(5),
      },
    },
    paperForm:{
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        marginTop: theme.spacing(3),
        width: theme.spacing(95),
        height: theme.spacing(50),
        },
    },
    boxButton: {
        marginTop:15,
        marginRight:15,
    }
  }));

const IdentitasAtlet = () => {
    const classes = useStyles();
    return ( 
        <Fragment>
            <div className={classes.paperTitle}>
                <Paper elevation={3}>
                    <h4>Identitas Atlet</h4>
                </Paper>
            </div>
            <div className={classes.paperForm}>
                <Paper elevation={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                            />
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="flex-end" className={classes.boxButton}>
                        <Button
                            variant="contained"
                            color="primary"
                                className={classes.button}
                                startIcon={<SaveIcon/>}
                                >
                                    Simpan
                        </Button>
                    </Box>
                </Paper>
            </div>
        </Fragment>
     );
}
 
export default IdentitasAtlet;