import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomFormLabel from '../forms/custom-elements/CustomFormLabel';
import CustomTextField from '../forms/custom-elements/CustomTextField';
import { Link } from 'react-router-dom';

export default function ResetPassEmail(props) {
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
              Forgot your password?
            </Typography>

            <Typography
              color='textSecondary'
              variant='h5'
              fontWeight='400'
              sx={{
                mt: 2,
              }}
            >
              Please enter the email address associated with your account and we
              will email you a code to reset your password.
            </Typography>

            <Box
              sx={{
                mt: 4,
              }}
            >
              <CustomFormLabel htmlFor='reset-email'>
                Email Adddress
              </CustomFormLabel>
              <CustomTextField id='reset-email' variant='outlined' fullWidth />

              <Button
                color='secondary'
                variant='contained'
                size='large'
                fullWidth
                onClick={() => props.redirectToCode(true)}
                sx={{
                  pt: '10px',
                  pb: '10px',
                  mt: 4,
                }}
              >
                Reset Password
              </Button>
              <Button
                color='secondary'
                size='large'
                fullWidth
                component={Link}
                to='/auth/login'
                sx={{
                  pt: '10px',
                  pb: '10px',
                  mt: 2,
                }}
              >
                Back to Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
