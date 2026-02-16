import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


import { users } from "./data/usersData";

export default function UsersPage() {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 3, fontWeight: 900 }}>
        Users Table
      </Typography>
      <Button variant='contained'>
        Add users
      </Button>
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
              <TableRow
                key={row.email}
              >
                <TableCell sx={{ fontWeight: 700 }}>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>

                <TableCell>
                  {row.assignedGames
                    .map((game) => `${game.gameName}`)
                    .join(", ")}
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