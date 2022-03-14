import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
        Users Management
        </Typography>
        <Typography variant="subtitle2">
          All aspects related to the app users can be managed from this page
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 }, borderRadius:'10px', fontSize: '0.85rem'}}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          
        >
          Create User
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;