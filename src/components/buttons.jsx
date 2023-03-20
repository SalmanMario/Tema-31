import * as React from "react";
import { Stack, Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";

export function Buttons() {
  const buttonDisabled = true;
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" color="warning" disableElevation>
          Warning! Form invalid
        </Button>
        <Button variant="outlined" disabled={buttonDisabled}>
          Outlined
        </Button>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </Stack>
    </div>
  );
}
