import React, { Fragment } from "react";
//style
import { makeStyles, withStyles } from "@material-ui/core/styles";
//component
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// other comp
import { ScrollToTop } from "../../../../config";

const useStyles = makeStyles((theme) => ({
    large: {
        display: 'flex',
        width: 200,
        height: 200,
    },
    paperUpload: {
        marginTop: 30,
        marginBottom: 30,
        padding: 5,
    },
    boxButton: {
        marginTop: 10,
        marginBottom: 15,
    },
  }));

const UploadBukti = () => {
    const classes = useStyles();
    return ( 
        <div>
            <Paper elevation={3} className={classes.paperUpload}>
                <div className={classes.paperUpload}>
                    <Box display="flex" justifyContent="center">
                        <Avatar alt="Bukti Pembayaran" src="" variant="rounded" className={classes.large}>
                            <AssignmentIcon style={{width:100, height:100}}/>
                        </Avatar>
                    </Box>
                    <Box display="flex" justifyContent="center" className={classes.boxButton}>
                        <label htmlFor="upload-photo" style={{marginTop:10}}>
                            <input style={{ display: "none" }} id="upload-photo" name="upload-photo" type="file" />
                                <Button variant="contained"
                                    color="primary"
                                    component="span" 
                                    startIcon={<AddAPhotoIcon/>}>
                                        Unggah Foto Bukti Pembayaran
                                </Button>
                        </label>
                    </Box>
                </div>    
            </Paper>
        </div>
     );
}
 
export default UploadBukti;