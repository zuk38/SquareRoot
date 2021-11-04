import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomFormLabel from '../forms/custom-elements/CustomFormLabel';
import CustomTextField from '../forms/custom-elements/CustomTextField';
import { Link } from 'react-router-dom';

export default function ResetPassEmail() {
  return (
    <Grid item xs={12} sm={8} lg={6} display='flex' alignItems='center'>
      <Grid container spacing={0} display='flex' justifyContent='center'>
        <Grid item xs={12} lg={9} xl={6}>
          <Box
            sx={{
              p: 4,
            }}
          >
            <Typography variant='h2' fontWeight='700'>
              Set new password
            </Typography>

            <Typography
              color='textSecondary'
              variant='h5'
              fontWeight='400'
              sx={{
                mt: 2,
              }}
            >
              Please enter the verification code sent to your email address
              below, your email address and a new password.
            </Typography>

            <Box
              sx={{
                mt: 4,
              }}
            >
              <CustomFormLabel htmlFor='reset-code'>
                Verification Code
              </CustomFormLabel>
              <CustomTextField id='reset-email' variant='outlined' fullWidth />
              <CustomFormLabel htmlFor='reset-email'>E-mail</CustomFormLabel>
              <CustomTextField id='reset-code' variant='outlined' fullWidth />
              <CustomFormLabel htmlFor='reset-password'>
                Password
              </CustomFormLabel>
              <CustomTextField
                id='reset-password'
                variant='outlined'
                fullWidth
              />

              <Button
                color='secondary'
                variant='contained'
                size='large'
                fullWidth
                component={Link}
                to='/'
                sx={{
                  pt: '10px',
                  pb: '10px',
                  mt: 4,
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
