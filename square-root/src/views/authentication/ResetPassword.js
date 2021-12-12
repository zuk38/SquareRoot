import React from 'react';
import { Grid, Box } from '@mui/material';
import img1 from '../../assets/images/backgrounds/login-bg.jpg';
import LogoIcon from '../../layouts/full-layout/logo/LogoIcon';
import PageContainer from '../../components/container/PageContainer';
import ResetPassCode from '../../components/auth/ResetPassCode';
import ResetPassEmail from '../../components/auth/ResetPassEmail';
import { connect } from 'react-redux';
import { AUTH_STATES } from '../../redux/ducks/userReducer';
import Alert from '../../components/Alert';

function ResetPassword(props) {
  const [emailProvided, setEmailProvided] = React.useState(false);

  React.useEffect(() => {
    if (props.status === AUTH_STATES.FORGOT_PASSWORD_STARTED)
      setEmailProvided(true);
  }, [props.status]);

  return (
    <PageContainer
      title='Reset Password'
      description='this is Reset Password page'
    >
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
        <Alert />
        {!emailProvided ? <ResetPassEmail /> : <ResetPassCode />}
      </Grid>
    </PageContainer>
  );
}

const mapStateToProps = ({ user }) => ({
  status: user.status,
});

export default connect(mapStateToProps)(ResetPassword);
