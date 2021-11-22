import React, { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import RedText from 'app/components/RedText';
import background from '../../public/background.jpg';

const appbarStyleTransparent = css({
  background: 'none',
});

const appbarStyleBold = css({
  background: '#161616',
});

const AppbarLogo = styled.a`
  font-family: 'Arial Rounded MT Bold', sans-serif;
  font-size: x-large;
  text-decoration: none;
  color: #ffffff;
`;

const HeaderStyled = styled.div`
  if() {
  }
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: auto;
  min-height: 100vh;
`;

const appbarWrapperStyle = css({
  padding: '1.875rem',
});

const Space = styled.div`
  padding-top: 96px;
`;

const iconStyle = css({
  color: '#ffffff',
  fontSize: '4rem',
});

const Header = () => {
  const [isAppbarBold, setIsAppbarBold] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  useScrollPosition(({ currPos }) => {
    setIsAppbarBold(currPos.y < -24);
  });

  return (
    <HeaderStyled>
      <AppBar
        css={isAppbarBold ? appbarStyleBold : appbarStyleTransparent}
        elevation={0}
        onScroll={(e) => console.log('scrolling!', e.view)}
      >
        <Toolbar css={appbarWrapperStyle}>
          <AppbarLogo href="https://www.battlefactions.com">
            BattleFactions<RedText>.</RedText>
          </AppbarLogo>
        </Toolbar>
      </AppBar>
      <Space />
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedSize={50}>
        <Container>
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h3">
                BattleFactions <RedText>NFT.</RedText>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Which Faction Do You Represent?</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">This is the rarity page checker.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Check your rarity rank below.</Typography>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Space />
              <Scroll to="rarity-checker" smooth={true}>
                <IconButton>
                  <KeyboardArrowDownIcon css={iconStyle} />
                </IconButton>
              </Scroll>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4} />
          </Grid>
        </Container>
      </Collapse>
    </HeaderStyled>
  );
};

export default Header;
