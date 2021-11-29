import { createTheme, ThemeOptions } from '@mui/material';

const theme: ThemeOptions = createTheme({
  palette: {
    background: {
      paper: '#20262D',
    },
    primary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#5CB85C',
    },
    action: {
      active: '#FFFFFF',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
});

export default theme;
