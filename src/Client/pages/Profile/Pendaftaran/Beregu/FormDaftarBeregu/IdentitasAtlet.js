import React, {Fragment, useState} from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paperTitle: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginTop: theme.spacing(5),
        backgroundColor: '#bbdefb',
        color: '#0d47a1',
        width: theme.spacing(95),
        height: theme.spacing(9),
      },
    },
    paperForm:{
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        marginTop: theme.spacing(3),
        width: theme.spacing(95),
        height: theme.spacing(52),
        },
    },
    boxButton: {
        marginTop:15,
        marginRight:30,
    },
    inputForm:{
        padding: theme.spacing(2),
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
  }));

  const jenisKelamin = [
      {
          value: 'Laki-Laki',
          label: 'Laki-Laki'
      },
      {
          value: 'Perempuan',
          label: 'Perempuan'
      }
  ];

  const pilihanTim = [
      {
          value: 'Tim 1',
          label: 'Tim 1',
      },
      {
          value: 'Tim 2',
          label: 'Tim 2',
      },
      {
          value: 'Tim 3',
          label: 'Tim 3',
      },
  ];
  const kategoriPertandingan = [
      {
          value: 'Open Beregu',
          label: 'Open Beregu'
      }
  ]

const IdentitasAtlet = () => {
    const classes = useStyles();
    const [jenKel, setjenKel] = useState('');
    const [tim, setTim] = useState('');
    const [kategori, setKategori] = useState('');

    const pilihJenisKelamin = (event) => {
        setjenKel(event.target.value);
      };

    const pilihTim = (event) => {
        setTim(event.target.value);
    }; 

    const pilihKategori = (event) => {
        setKategori(event.target.value);
    };  

    return ( 
        <Fragment>
            <div className={classes.paperTitle}>
                <Paper elevation={3}>
                    <Box display="flex" justifyContent="center">
                        <h3 style={{fontSize:20}}>Identitas Atlet</h3>
                    </Box>
                </Paper>
            </div>
            <div className={classes.paperForm}>
                <Paper elevation={3}>
                    <div className={classes.inputForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xs={6}>
                                <TextField 
                                id="namaLengkap" 
                                name="namaLengkap" 
                                label="Nama Lengkap" 
                                variant="outlined" 
                                fullWidth 
                                responsive
                                required />
                            </Grid>
                            <Grid item xs={12} xs={6}>
                                <TextField
                                    id="jenisKelamin"
                                    name="jenisKelamin"
                                    select
                                    label="Jenis Kelamin"
                                    value={jenKel}
                                    onChange={pilihJenisKelamin}
                                    variant="outlined" 
                                    fullWidth 
                                    required
                                    >
                                        {jenisKelamin.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} xs={6}>
                                <TextField
                                    id="tanggalLahir"
                                    name="tanggalLahir"
                                    label="Tanggal Lahir"
                                    type="date"
                                    defaultValue={new Date()}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    variant="outlined" 
                                    fullWidth 
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} xs={6}>
                                <TextField
                                    id="pilih_kategori"
                                    name="pilih_kategori"
                                    select
                                    label="Kategori Pertandingan"
                                    value={kategori}
                                    onChange={pilihKategori}
                                    variant="outlined" 
                                    fullWidth 
                                    required
                                    >
                                        {kategoriPertandingan.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} xs={6}>
                                <TextField
                                    id="pilih_tim"
                                    name="pilih_tim"
                                    select
                                    label="Tim"
                                    value={tim}
                                    onChange={pilihTim}
                                    variant="outlined" 
                                    fullWidth 
                                    required
                                    >
                                        {pilihanTim.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} xs={6}>
                                <Box display="flex" justifyContent="center">
                                    <Avatar 
                                        style={{marginTop:10}} 
                                        alt="Foto Peserta" 
                                        src="" 
                                        className={classes.avatar} />
                                </Box>  
                                <Box display="flex" justifyContent="center">  
                                    <label htmlFor="upload-photo" style={{marginTop:10}}>
                                        <input
                                            style={{ display: "none" }}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file"
                                        />
                                        <Fab
                                            color="secondary"
                                            size="small"
                                            component="span"
                                            aria-label="add"
                                            variant="extended"
                                        >
                                            <AddIcon /> Unggah Foto
                                        </Fab>
                                    </label>
                                </Box>    
                            </Grid>
                        </Grid>
                    </div>
                    <Box display="flex" justifyContent="flex-end" className={classes.boxButton}>
                        <Button
                            variant="contained"
                            color="primary"
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