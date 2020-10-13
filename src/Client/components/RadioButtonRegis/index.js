import React from "react";
import Radio from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core";

export default function RadioButtons() {
  return <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />;
}
