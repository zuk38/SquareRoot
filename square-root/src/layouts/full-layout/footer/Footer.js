import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography>&copy; {new Date().getFullYear()} SquareRoot </Typography>
  </Box>
);

export default Footer;
