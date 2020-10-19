import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: 200,
    height: 200,
    borderRadius: 10,
    objectFit: "contain",
    border: "1px solid black",
  },
}));
const PhotoForm = ({ img = "" }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <img src={img} className={classes.large} alt="Foto Identitas" />
    </Box>
  );
};

export default PhotoForm;
