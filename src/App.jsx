import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Buttons } from "./components/buttons";
import { ChangeLocationSection } from "./components/ChangeLocationSection";
import { Typography } from "@mui/material";
import { TextFields } from "./components/TextFields";
import { getUsers } from "./services/user";
import { UserList } from "./components/UserList";
import { AddUserForm } from "./components/AddUserForm";

function App() {
  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setApiUsers(data);
    });
  }, []);

  function addNewUser(newUser) {
    const newApiUsers = [newUser, ...apiUsers];
    setApiUsers(newApiUsers);
  }

  function handleDeleteUsers(userId) {
    const deleteUsers = apiUsers.filter((user) => user.id !== userId);
    setApiUsers(deleteUsers);
  }

  return (
    <div className="App">
      <Typography variant="h3">test</Typography>
      <Buttons />
      <ChangeLocationSection />
      <TextFields />
      <UserList users={apiUsers} handleDeleteUsers={handleDeleteUsers} />
      <AddUserForm onFormSubmit={addNewUser} />
    </div>
  );
}

export default App;
