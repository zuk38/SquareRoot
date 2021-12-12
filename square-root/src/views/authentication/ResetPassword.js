import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import img1 from '../../assets/images/backgrounds/login-bg.svg';
import LogoIcon from '../../layouts/full-layout/logo/LogoIcon';
import PageContainer from '../../components/container/PageContainer';
import ResetPassCode from '../../components/auth/ResetPassCode';
import ResetPassEmail from '../../components/auth/ResetPassEmail';

export default function ResetPassword() {
  const [emailProvided, setEmailProvided] = useState(false);

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
        {!emailProvided ? (
          <ResetPassEmail redirectToCode={(arg) => setEmailProvided(arg)} />
        ) : (
          <ResetPassCode />
        )}
      </Grid>
    </PageContainer>
  );
}
