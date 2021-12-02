import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomFormLabel from '../forms/custom-elements/CustomFormLabel';
import CustomTextField from '../forms/custom-elements/CustomTextField';
import useForm from '../hooks/useForm';
import validate from '../../utility/ForgotPassVerificationValidation';
import { useNavigate } from 'react-router-dom';

export default function ResetPassEmail() {
  const navigate = useNavigate();
  const handleReset = () => {
    //TODO: set a global alert with the reducer
    navigate('/auth/login');
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    handleReset,
    {}
  );

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
              <CustomFormLabel htmlFor='code'>
                Verification Code
              </CustomFormLabel>
              <CustomTextField
                id='code'
                variant='outlined'
                fullWidth
                value={values.code || ''}
                onChange={handleChange}
                {...(errors.code &&
                  errors.code !== '' && {
                    error: true,
                    helperText: errors.code,
                  })}
              />

              <CustomFormLabel htmlFor='email'>E-mail</CustomFormLabel>
              <CustomTextField
                id='email'
                variant='outlined'
                fullWidth
                value={values.email || ''}
                onChange={handleChange}
                {...(errors.email &&
                  errors.email !== '' && {
                    error: true,
                    helperText: errors.email,
                  })}
              />

              <CustomFormLabel htmlFor='password'>
                Your New Password
              </CustomFormLabel>
              <CustomTextField
                id='password'
                variant='outlined'
                type='password'
                fullWidth
                value={values.password || ''}
                onChange={handleChange}
                {...(errors.password &&
                  errors.password !== '' && {
                    error: true,
                    helperText: errors.password,
                  })}
              />

              <Button
                color='secondary'
                variant='contained'
                size='large'
                fullWidth
                onClick={handleSubmit}
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
