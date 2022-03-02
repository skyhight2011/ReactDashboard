import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Typography } from '@mui/material';
import * as React from 'react';
import UserList from './UserList';


export interface IAppProps {
}

export default function Manager (props: IAppProps) {
  return (
    <Box>
        <Typography variant='h4'>Users Management</Typography>
          <Button>
              <AddIcon />
              Create User
          </Button>
        <Paper sx={{px: 2, py: 2, display: 'flex', flexWrap: 'nowrap'}} elevation={1}>
        <UserList />
        </Paper>
    </Box>
  );
}
