import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props) => <TextField {...props} />)({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: '#767e89',
    opacity: '1',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#dee3e9',
  },
  '& .MuiOutlinedInput-input.Mui-disabled': {
    backgroundColor: '#f8f9fb',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: '#767e89',
    opacity: '1',
  },
});

export default CustomTextField;
