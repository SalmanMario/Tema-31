import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export function AddUserForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const user = {
      name,
      username,
      email,
      phone,
    };
    console.log("New user is ", user);
    onFormSubmit(user);
    setEmail("");
    setUsername("");
    setName("");
    setPhone("");
  }
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField required onChange={handleNameChange} margin="normal" fullWidth label="Name" value={name} />
      <TextField required onChange={handleUsernameChange} margin="normal" fullWidth label="Username" value={username} />
      <TextField required onChange={handleEmailChange} margin="normal" fullWidth label="Email" value={email} />
      <TextField required onChange={handlePhoneChange} margin="normal" fullWidth label="Phone" value={phone} />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
