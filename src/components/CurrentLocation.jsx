import { Typography } from "@mui/material";
export function CurrentLocation({ city }) {
  return (
    <div>
      <Typography variant="body1">
        Orasul este <strong>{city}</strong>
      </Typography>
    </div>
  );
}
