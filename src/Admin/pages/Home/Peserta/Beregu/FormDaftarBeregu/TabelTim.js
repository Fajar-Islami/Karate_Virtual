import React,{Fragment} from 'react';
//style
import { makeStyles } from '@material-ui/core/styles';
//component
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    paperTitle: {
      display: 'flex',
      flexWrap: 'wrap',
        marginTop: 30,
        backgroundColor: '#bbdefb',
        color: '#0d47a1',
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
    },
    paperInfo:{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 20,
        backgroundColor: '#bbdefb',
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
    },
    table: {
        minWidth: 150,
    },
    paperTable:{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 20,
        width: 'auto',
        height: 'auto',
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  
const TabelTim = () => {
  const classes = useStyles();

    function createData(foto, nama, aksi) {
      return { foto, nama, aksi};
    }
    
    const rows = [
      createData(<Avatar alt="Foto Peserta" src="" className={classes.avatar} />, 'Ocean', <div>
      <IconButton aria-label="edit" size="small" style={{marginRight:10, backgroundColor:'#bbdefb'}}><AssignmentIcon /></IconButton>
      <IconButton aria-label="delete" size="small"  style={{backgroundColor:'#ffcdd2'}}><DeleteIcon /></IconButton> </div>),
      createData(<Avatar alt="Foto Peserta" src="" className={classes.avatar} />, 'Oasis', <div>
      <IconButton aria-label="edit" size="small"  style={{marginRight:10, backgroundColor:'#bbdefb'}}><AssignmentIcon /></IconButton>
      <IconButton aria-label="delete" size="small"  style={{backgroundColor:'#ffcdd2'}}><DeleteIcon /></IconButton> </div>),
      createData(<Avatar alt="Foto Peserta" src="" className={classes.avatar} />, 'Omar', <div>
      <IconButton aria-label="edit" size="small"  style={{marginRight:10, backgroundColor:'#bbdefb'}}><AssignmentIcon /></IconButton>
      <IconButton aria-label="delete" size="small"  style={{backgroundColor:'#ffcdd2'}}><DeleteIcon /></IconButton> </div>),
    ];

    return ( 
        <Fragment>
            <div>
              <Paper elevation={3} className={classes.paperTitle}>
                <Box display="flex" justifyContent="center">
                    <h3 style={{fontSize:20}}>Informasi</h3>
                </Box>
              </Paper>
            </div>
            <div>
                <Paper elevation={3} className={classes.paperInfo}>
                <Box display="flex" justifyContent="center">
                    <p style={{fontSize:14, textAlign:'justify', marginLeft:15, marginRight:15}}>
                    Hasil simpan data peserta dari form identitas atlet akan ditampung pada tabel bawah ini. Pastikan Anda menginputnya dengan benar. Sistem akan menyimpannya apabila sudah 3 peserta.
                    </p>
                  </Box>
                </Paper>
            </div>
            <div className={classes.paperTable}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Foto</TableCell>
                    <TableCell align="left">Nama</TableCell>
                    <TableCell align="left">Aksi</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.foto}
                    </TableCell>
                    <TableCell align="left">{row.nama}</TableCell>
                    <TableCell align="left">{row.aksi}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        </Fragment>
     );
}
 
export default TabelTim;