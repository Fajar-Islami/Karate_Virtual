import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function PreviewVideo({ jenis = "Jenis", video = "", teks = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet officia ipsam totam ipsum assumenda hic perferendis repellat, vel omnis deserunt fuga, dolore ad blanditiis nemo maxime odit minima ea." }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {jenis}
          </Typography>
          <iframe width="100%" title="video" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Typography variant="body2" color="textSecondary" component="p">
            {teks}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
