import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import * as React from 'react';
import UserSearch from './Components/UserSearch';
import UserList from './UserList';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(6)};
`
);

export default function Manager () {
  return (
      <>
        <PageTitle>
          <Grid  container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant='h3' component='h3' gutterBottom>User Manager</Typography>
              <Typography variant='subtitle1'>
                All aspects related to the app users can be managed from this page
              </Typography>
            </Grid>

            <Grid item>
            <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddIcon fontSize="small" />}
        >
          Create User
        </Button>
            </Grid>
          </Grid>
        </PageTitle>
        <Container maxWidth="lg">
        <UserSearch />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
          <UserList />
          </Grid>
        </Grid>
        </Container>
      </>
  );
}
