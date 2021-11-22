import React, { FormEvent } from 'react';
import { css } from '@emotion/react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import InputAdornment from '@mui/material/InputAdornment';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';

const rarity = css({
  minHeight: '100vh',
  paddingTop: '96px',
});

type RarityProps = {
  bfNumber: string;
};

type ErrorProps = {
  hasError: boolean;
  message: string;
};

type NftProperty = {
  label: string;
  value: string;
};

type NftProps = {
  id: string;
  image: string;
  imageAlt: string;
  properties: NftProperty[];
};

const Space = styled.div`
  padding-top: 48px;
`;

const Rarity = () => {
  const [error, setError] = React.useState<ErrorProps>({
    hasError: false,
    message: '',
  });
  const [values, setValues] = React.useState<RarityProps>({
    bfNumber: '',
  });
  const [nft, setNft] = React.useState<NftProps>(null);

  const handleChange = (prop: keyof RarityProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (values.bfNumber && values.bfNumber !== '') setError({ hasError: false, message: '' });
    setValues({ ...values, [prop]: event.target.value });
  };

  const search = (e: FormEvent) => {
    e.preventDefault();
    if (!values.bfNumber || values.bfNumber === '') {
      setError({ hasError: true, message: 'BattleFactions # is required' });
      return;
    }
    const reg = new RegExp(/^\d+$/);
    if (!reg.test(values.bfNumber)) {
      setError({ hasError: true, message: 'Only numbers are accepted!' });
      return;
    }

    axios
      .get(`https://api.x.immutable.com/v1/assets/0xb941a7373e1dd60ad75e3460f849f28dd4bd6a07/${values.bfNumber}`)
      .then(function ({ data }) {
        console.log('BattleFactions #', data);

        const properties: NftProperty[] = [];
        const metadata = data['metadata'];
        for (const key in metadata) {
          if (key === 'image_url' || key === 'description') continue;
          properties.push({
            label: key,
            value: metadata[key],
          });
        }
        console.log('Properties', properties);

        setNft({
          id: data['token_id'],
          image: data['image_url'],
          imageAlt: data['name'],
          properties,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="rarity-checker" css={rarity}>
      <Container>
        <Typography variant="h4">Rarity checker</Typography>
        <Space />
        <Grid container spacing={2} direction="row" justifyContent="center">
          <Grid item xs={8} sm={8} md={8}>
            <form noValidate autoComplete="off" onSubmit={search}>
              <TextField
                id="rarity-number"
                label="BattleFactions #"
                variant="outlined"
                type="tel"
                fullWidth
                required
                error={error.hasError}
                helperText={error.message}
                onChange={handleChange('bfNumber')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Grid3x3Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit" aria-label="Search">
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                }}
              />
            </form>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            {nft && (
              <Card sx={{ minWidth: 275 }}>
                <CardMedia component="img" height="450" image={nft.image} alt={nft.imageAlt} />
                <CardContent>
                  {nft.properties.map((property) => (
                    <>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {property.label}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {property.value}
                      </Typography>
                    </>
                  ))}
                </CardContent>
              </Card>
            )}
          </Grid>
          <Grid item xs={8} sm={8} md={8} />
        </Grid>
      </Container>
    </div>
  );
};

export default Rarity;
