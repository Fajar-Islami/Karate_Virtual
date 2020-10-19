//style
import { withStyles, makeStyles } from "@material-ui/core/styles";
// methods styling
import { TableCell, TableRow } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    title: {
      fontWeight: "600",
      fontSize: "24px",
    },
    rincian: {
      fontFamily: "Poppins !important",
      marginTop: 20,
      // marginLeft: 30,
      width: "100%",
      maxWidth: 500,
      height: "100%",
      maxHeight: 300,
      fontSize: 16,
    },
    boxTable: {
      marginTop: 20,
    },
    table: {
      minWidth: 500,
      "& th": {
        fontWeight: "600",
      },
    },
    paperInfo: {
      margin: "30px 0px",
      backgroundColor: "#757575",
      color: "#ffffff",
      justifyContent: "center",
    },
    gridContainer: {
      marginRight: 30,
      display: "flex",
      alignItems: "center",
    },
  }));
  
export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#039be5",
      color: theme.palette.common.white,
      fontSize: 16,
    },
    body: {
      fontSize: 14,
    },
    footer: {
      backgroundColor: "#039be5",
      color: theme.palette.common.white,
      fontSize: 16,
    },
  }))(TableCell);
  
export const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);