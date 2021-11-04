import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/container/PageContainer';

export default function Error() {
  const { t } = useTranslation();

  return (
    <PageContainer title='Error' description='this is Error page'>
      <Box
        display='flex'
        flexDirection='column'
        height='100vh'
        textAlign='center'
        justifyContent='center'
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Container maxWidth='md'>
          <Typography
            align='center'
            variant='h1'
            sx={{
              pt: 2,
              color: 'rgba(0, 0, 0, 0.87)',
            }}
          >
            404
          </Typography>
          <Typography
            align='center'
            variant='h4'
            sx={{
              pt: 1,
              pb: 3,
              color: 'rgba(0, 0, 0, 0.87)',
            }}
          >
            {t('error_page.title')}
          </Typography>
          <Button
            color='primary'
            variant='contained'
            component={Link}
            to='/'
            disableElevation
          >
            {t('error_page.return')}
          </Button>
        </Container>
      </Box>
    </PageContainer>
  );
}
