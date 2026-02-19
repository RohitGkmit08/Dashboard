import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { users as initialUsers, type UserRow } from "./constants";
import AddUserModal from "./components/AddUserModal";

export default function UsersPage() {
  const [users, setUsers] = useState<UserRow[]>(initialUsers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleAddUser = (newUser: UserRow) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 3, fontWeight: 900 }}>
        Users Table
      </Typography>

      <Button variant="contained" sx={{ mb: 2 }} onClick={handleOpenAddModal}>
        Add Users
      </Button>

      <AddUserModal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        onAddUser={handleAddUser}
      />

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table sx={{ minWidth: 900 }} size="medium">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Assigned Games</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((row) => (
              <TableRow key={row.email}>
                <TableCell sx={{ fontWeight: 700 }}>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>

                <TableCell>
                  {row.assignedGames.map((g) => g.gameName).join(", ")}
                </TableCell>

                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Button size="small" variant="outlined">
                      Edit
                    </Button>

                    <Button size="small" variant="contained" color="error">
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
