import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, } from '@mui/material';

const BaseCardSmall = ({ children }) => (
  <Card
    sx={{
      width: '100%',
    }}
  >
    <CardContent>{children}</CardContent>
  </Card>
);

BaseCardSmall.propTypes = {
  children: PropTypes.node,
};

export default BaseCardSmall;