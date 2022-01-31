import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import sidebarBuynowsvg from '../../../assets/images/backgrounds/sidebar-buynow-bg.svg';
import img1 from '../../../assets/images/backgrounds/login-bg-transp.png';
import { NavLink } from 'react-router-dom';

const LearnMore = () => (
  // const customizer = useSelector((state)=> state.CustomizerReducer);

  <Box pb={5} mt={5}>
    <Box
      pl={3}
      pr={3}
      m={1}
      sx={{
        backgroundColor: '#ddebff',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
      style={{ position: 'relative' }}
    >
      <img src={img1} alt={sidebarBuynowsvg} className='buyNowImg' />
      <Box pb={3} pt={3} sx={{ width: '70%' }} mb={4}>
        <Typography variant='h4' fontWeight='700'>
          How it Works
        </Typography>
        <Button
          color='secondary'
          fullWidth
          target='_blank'
          disableElevation
          variant='contained'
          size='small'
          component={NavLink}
          to='/how-it-works'
        >
          Learn More
        </Button>
      </Box>
    </Box>
  </Box>
);
export default LearnMore;
