import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectedBriefcase = ({ value, setValue, opciones, label }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={label}
        onChange={(e) => setValue(e.target.value)}
        required
      >
        {opciones.map((opcion) => (
          <MenuItem key={opcion.idbriefcase} value={opcion.idbriefcase} sx={{color:"#000000"}}>
            {opcion.briefcase_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectedBriefcase;
