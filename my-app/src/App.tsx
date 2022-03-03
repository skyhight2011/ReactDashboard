import React from 'react';
import Manager from './page/Manager';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

const App = ()=>{
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Manager />
    </ThemeProvider>
  );
}

export default App;
