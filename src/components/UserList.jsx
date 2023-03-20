import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { UserItem } from "./UserItem";

export function UserList({ users, handleDeleteUsers }) {
  return (
    <Box>
      {users.map((user, index) => (
        <UserItem
          key={index}
          name={user.name}
          email={user.email}
          username={user.username}
          phone={user.phone}
          userId={user.id}
          handleDeleteUsers={handleDeleteUsers}
        />
      ))}
    </Box>
  );
}
