import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';

const BaseCard = ({ title, children, variant, centering }) => (
  <Card
    sx={{
      width: '100%',
      p: 0,
    }}
  >
    <CardHeader
      style={centering && { textAlign: 'center' }}
      title={
        variant ? <Typography variant={variant}>{title}</Typography> : title
      }
    />
    <Divider />
    <CardContent
      sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
    >
      {children}
    </CardContent>
  </Card>
);

BaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  variant: PropTypes.string,
  centering: PropTypes.bool,
};

export default BaseCard;
