import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export function ChangeLocation({ city, onSelectCity }) {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="oras-label">Oras</InputLabel>
        <Select
          labelId="oras-label"
          value={city}
          onChange={(event) => {
            onSelectCity(event.target.value);
          }}
        >
          <MenuItem value={"Timisoara"}>Timisoara</MenuItem>
          <MenuItem value={"Cluj"}>Cluj</MenuItem>
          <MenuItem value={"Bucuresti"}>Bucuresti</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
