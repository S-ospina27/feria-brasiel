import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectedCategory = ({ value, setValue, opciones, label }) => {
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
          <MenuItem
            key={opcion.idcategories}
            value={opcion.idcategories}
            sx={{ color: "#000000" }}
          >
            {opcion.categories_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectedCategory;
