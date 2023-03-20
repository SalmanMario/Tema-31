import { ChangeLocation } from "./ChangeLocation";
import { CurrentLocation } from "./CurrentLocation";
import { Box } from "@mui/material";
import React, { useState } from "react";

export function ChangeLocationSection() {
  const [city, setCity] = useState("Timisoara");
  function onSelectCity(newCity) {
    setCity(newCity);
  }
  return (
    <Box sx={{ mt: 2 }}>
      <CurrentLocation city={city} />
      <ChangeLocation city={city} onSelectCity={onSelectCity} />
    </Box>
  );
}
