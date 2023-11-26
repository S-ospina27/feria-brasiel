import React, { useRef, useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

function TextFieldFile({
  label,
  value,
  setValue,

  disabled = false,
  accept = [],
}) {
  const fileInput = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue(file);
    } else {
      setValue(null);
    }
  };

  return (
    <TextField
      fullWidth
      required
      disabled={disabled}
      label={label}
      value={value?.name || ""}
      variant="outlined"
      autoComplete="off"
      InputProps={{
        readOnly: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="primary"
              edge="end"
              onClick={() => fileInput.current.click()}
            >
              <PhotoCameraBackIcon />
            </IconButton>
            <input
              hidden
              accept={accept.join(", ")}
              type="file"
              ref={fileInput}
              onChange={handleFileChange}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TextFieldFile;
