import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextReadOnly({ label = "label", value = "value" }) {
  return (
    <div>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        id="read-only"
        label={label}
        defaultValue={value}
        variant="outlined"
        fullWidth
      />
    </div>
  );
}
