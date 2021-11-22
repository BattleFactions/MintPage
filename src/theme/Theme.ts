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
      // hover: '#5CB85C',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          // color: 'white',
          // ':hover': {
          //   borderBottom: '1px solid rgba(2, 2, 2)',
          // },
          // '::before': {
          //   borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
          // },
          // '::after': {
          //   borderBottom: '1px solid rgba(4, 4, 4, 0.42)',
          // },
        },
      },
    },
  },
});

export default theme;
