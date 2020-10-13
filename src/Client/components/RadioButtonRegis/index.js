import React from "react";
import Radio from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core";

export default function RadioButtons({ ket = "" }) {
  return <FormControlLabel value={ket} control={<Radio color="primary" />} label={ket} />;
}
