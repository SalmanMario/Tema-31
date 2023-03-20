import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

export function UserItem({ name, email, username, phone, userId, handleDeleteUsers }) {
  return (
    <Box>
      <Typography variant="h2">{name}</Typography>
      <Typography variant="h3">{username}</Typography>
      <Typography variant="body1">{email}</Typography>
      <Typography variant="body1">{phone}</Typography>
      <Button variant="contained" onClick={() => handleDeleteUsers(userId)}>
        Delete User
      </Button>
    </Box>
  );
}
