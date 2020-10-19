import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title({ font = "body1", title = "blank" }) {
  return (
    <Typography component="h2" variant={font} color="primary" gutterBottom>
      {title}
    </Typography>
  );
}
