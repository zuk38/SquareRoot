import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormHelperText,
  FormControl,
} from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';
import SelectDropdown from '../../components/forms/custom-elements/SelectDropdown';

import img1 from '../../assets/images/backgrounds/login-bg-transp.png';
import LogoIcon from '../../layouts/full-layout/logo/LogoIcon';

import useForm from '../../components/hooks/useForm';
import validate from '../../utility/RegistrationFormValidation';

import { connect } from 'react-redux';
import { signupUser } from '../../redux/ducks/userReducer';
import Alert from '../../components/Alert';

function Register(props) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    register
  );

  function register() {
    //form validated
    //cognito integration here, may detect cognito errors
    console.log(values);
    props.signUp(values);
  }

  /* TODO: this will come from the API */
  const dropdownVals = [
    'Real Estate Developer',
    'Landscape Architect',
    'Plant Nursery',
    'Other',
  ];

  return (
    <PageContainer title='Register' description='this is Register page'>
      <Grid
        container
        spacing={0}
        sx={{ height: '100vh', justifyContent: 'center' }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          sx={{
            background: '#ffffff',
          }}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              sx={{
                position: {
                  xs: 'relative',
                  lg: 'absolute',
                },
                height: { xs: 'auto', lg: '100vh' },
                right: { xs: 'auto', lg: '-50px' },
                margin: '0 auto',
              }}
            >
              <img
                src={img1}
                alt='bg'
                style={{
                  width: '100%',
                  maxWidth: '812px',
                }}
              />
            </Box>

            <Box
              display='flex'
              alignItems='center'
              sx={{
                p: 4,
                position: 'absolute',
                top: '0',
              }}
            >
              <LogoIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} lg={6} display='flex' alignItems='center'>
          <Grid container spacing={0} display='flex' justifyContent='center'>
            <Grid item xs={12} lg={9} xl={6}>
              <Box
                sx={{
                  p: 4,
                }}
              >
                <Alert />
                <Typography fontWeight='700' variant='h2'>
                  Welcome to SquareRoot
                </Typography>
                <Box display='flex' alignItems='center'>
                  <Typography
                    color='textSecondary'
                    variant='h6'
                    fontWeight='400'
                    sx={{
                      mr: 1,
                    }}
                  >
                    Already have an Account?
                  </Typography>
                  <Typography
                    component={Link}
                    to='/auth/login'
                    fontWeight='500'
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Sign In
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 5,
                  }}
                >
                  <CustomFormLabel htmlFor='name'>Name</CustomFormLabel>
                  <CustomTextField
                    id='name'
                    variant='outlined'
                    fullWidth
                    value={values.name || ''}
                    onChange={handleChange}
                    {...(errors.name &&
                      errors.name !== '' && {
                        error: true,
                        helperText: errors.name,
                      })}
                  />
                  <CustomFormLabel htmlFor='email'>
                    Email Address
                  </CustomFormLabel>
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
                  <CustomFormLabel htmlFor='password'>Password</CustomFormLabel>
                  <CustomTextField
                    id='password'
                    type='password'
                    variant='outlined'
                    fullWidth
                    value={values.password || ''}
                    onChange={handleChange}
                    {...(errors.password &&
                      errors.password !== '' && {
                        error: true,
                        helperText: errors.password,
                      })}
                  />
                  {/** --- verify passwords ---- */}
                  <CustomFormLabel htmlFor='confirmPassword'>
                    Repeat Password
                  </CustomFormLabel>
                  <CustomTextField
                    id='confirmPassword'
                    type='password'
                    variant='outlined'
                    fullWidth
                    value={values.confirmPassword || ''}
                    onChange={handleChange}
                    {...(errors.confirmPassword &&
                      errors.confirmPassword !== '' && {
                        error: true,
                        helperText: errors.confirmPassword,
                      })}
                  />
                  <FormControl
                    {...(errors.role && { error: true })}
                    fullWidth
                    sx={{ mb: '50px' }}
                  >
                    <SelectDropdown
                      fullwidth
                      name='role'
                      options={dropdownVals}
                      label="I'm a ..."
                      handleChange={handleChange}
                      value={values.role || ''}
                      size='medium'
                    />
                    {errors.role && (
                      <FormHelperText fullwidth>{errors.role}</FormHelperText>
                    )}
                  </FormControl>

                  <Button
                    color='secondary'
                    variant='contained'
                    size='large'
                    fullWidth
                    onClick={handleSubmit}
                    sx={{
                      pt: '10px',
                      pb: '10px',
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    color='secondary'
                    size='large'
                    fullWidth
                    component={Link}
                    to='/'
                    sx={{
                      pt: '10px',
                      pb: '10px',
                      mt: 2,
                    }}
                  >
                    Back to Home
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => {
    dispatch(signupUser(data));
  },
});

export default connect(null, mapDispatchToProps)(Register);
