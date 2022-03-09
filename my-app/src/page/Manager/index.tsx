import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';
import PageTitleWrapper from '../../components/PageTitleWraper';
import UserList from './UserList';
import PageHeader from './PageHeader';

export default function Manager () {
  return (
      <>
        <Helmet>
          <title>Users Management</title>
        </Helmet>
        <PageTitleWrapper>
          <PageHeader />
        </PageTitleWrapper>
        <Container maxWidth="lg">
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
