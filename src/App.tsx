import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import theme from 'app/theme/Theme';
import Header from 'app/components/Header';
import Rarity from 'app/components/Rarity';

const AppStyled = styled.div`
  background-color: #161616;
  color: #ffffff;
`;

const AppContent = () => (
  <AppStyled>
    <Header />
    <Rarity />
  </AppStyled>
);

const App = (props) => {
  return (
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContent {...props} />
      </ThemeProvider>
    </MUIThemeProvider>
  );
};

export default App;
