import React from 'react';
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

import GoogleIcon from '@mui/icons-material/Google';

import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';

import img1 from '../../assets/images/backgrounds/login-bg-transp.png';
import LogoIcon from '../../layouts/full-layout/logo/LogoIcon';

import useForm from '../../components/hooks/useForm';
import validate from '../../utility/LoginFormValidation';

import Alert from '../../components/Alert';
import { connect } from 'react-redux';
import { loginUser, fetchUser } from '../../redux/ducks/userReducer';
import { createScript } from '../../services/GoogleService';

function Login(props) {
  React.useEffect(() => {
    const ga =
      window.gapi && window.gapi.auth2
        ? window.gapi.auth2.getAuthInstance()
        : null;

    if (!ga) createScript();
  }, []);

  const signIn = () => {
    const ga = window.gapi.auth2.getAuthInstance();
    ga.signIn().then(
      (googleUser) => {
        props.loginGoogle(googleUser);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    callback,
    log
  );

  function callback() {
    console.log('callback');
    props.fetchU();
  }

  function log() {
    //form validated
    //cognito integration here, may detect cognito errors
    console.log(values);
    props.login(values);
  }

  return (
    <PageContainer title='Login' description='this is Login page'>
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
                    fontWeight='500'
                    sx={{
                      mr: 1,
                    }}
                  >
                    New to SquareRoot?
                  </Typography>
                  <Typography
                    component={Link}
                    to='/auth/register'
                    fontWeight='500'
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Create an account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 4,
                  }}
                >
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
                  <CustomFormLabel htmlFor='loginPassword'>
                    Password
                  </CustomFormLabel>
                  <CustomTextField
                    id='loginPassword'
                    type='password'
                    variant='outlined'
                    value={values.loginPassword || ''}
                    onChange={handleChange}
                    {...(errors.loginPassword &&
                      errors.loginPassword !== '' && {
                        error: true,
                        helperText: errors.loginPassword,
                      })}
                    fullWidth
                    sx={{
                      mb: 3,
                    }}
                  />
                  <Box
                    sx={{
                      display: {
                        xs: 'block',
                        sm: 'flex',
                        lg: 'flex',
                      },
                      alignItems: 'center',
                    }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<CustomCheckbox defaultChecked />}
                        label='Remember this Device'
                        sx={{
                          mb: 2,
                        }}
                      />
                    </FormGroup>
                    <Box
                      sx={{
                        ml: 'auto',
                      }}
                    >
                      <Typography
                        component={Link}
                        to='/auth/reset-password'
                        fontWeight='500'
                        sx={{
                          display: 'block',
                          textDecoration: 'none',
                          mb: '16px',
                          color: 'primary.main',
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </Box>
                  </Box>

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
                    Sign In
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
                  <Box
                    sx={{
                      position: 'relative',
                      textAlign: 'center',
                      mt: '20px',
                      mb: '20px',
                      '&::before': {
                        content: '""',
                        background: '#ecf0f2',
                        height: '1px',
                        width: '100%',
                        position: 'absolute',
                        left: '0',
                        top: '13px',
                      },
                    }}
                  >
                    <Typography
                      component='span'
                      color='textSecondary'
                      variant='h6'
                      fontWeight='400'
                      sx={{
                        position: 'relative',
                        padding: '0 12px',
                        background: '#fff',
                      }}
                    >
                      or sign in with
                    </Typography>
                  </Box>

                  <Box>
                    <Button
                      variant='outlined'
                      size='large'
                      display='flex'
                      alignitems='center'
                      justifycontent='center'
                      onClick={signIn}
                      sx={{
                        width: '100%',
                        borderColor: '#dde3e8',
                        borderWidth: '2px',
                        textAlign: 'center',
                        mt: 2,
                        pt: '10px',
                        pb: '10px',
                        '&:hover': {
                          borderColor: '#dde3e8',
                          borderWidth: '2px',
                        },
                      }}
                    >
                      <Box display='flex' alignItems='center'>
                        <GoogleIcon
                          sx={{
                            color: (theme) => theme.palette.error.main,
                          }}
                        />
                        <Typography
                          variant='h6'
                          sx={{
                            ml: 1,
                            color: (theme) =>
                              `${
                                theme.palette.mode === 'dark'
                                  ? theme.palette.grey.A200
                                  : '#13152a'
                              }`,
                          }}
                        >
                          Google
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
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
  login: (values) => {
    dispatch(loginUser(values));
  },
  fetchU: () => {
    dispatch(fetchUser());
  },
});

export default connect(null, mapDispatchToProps)(Login);
