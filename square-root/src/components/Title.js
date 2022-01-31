import React from 'react';
import { Grid, Typography } from '@mui/material';

const Title = (props) => (
  <>
    <Typography
      color='textPrimary'
      variant='h1'
      sx={{
        ml: 2,
        mt: 5,
      }}
    >
      {props.title}
    </Typography>
    {props.subtitle && (
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12} sm={12}>
          <Typography
            color='textPrimary'
            variant='subtitle'
            sx={{
              ml: 2.5,
              mt: 5,
            }}
          >
            {props.subtitle}
          </Typography>
        </Grid>
      </Grid>
    )}
  </>
);

export default Title;
