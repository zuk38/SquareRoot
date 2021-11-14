import React from 'react';
import PropTypes from 'prop-types';
import { Box, MenuItem } from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';

import CustomSelect from './CustomSelect';
import CustomFormLabel from './CustomFormLabel';

const CustomThumbComponent = (props) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
        }}
      />
      <Box
        sx={{
          height: '14px',
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
    </SliderThumb>
  );
};

CustomThumbComponent.propTypes = {
  children: PropTypes.node,
};

const SelectDropdown = (props) => {
  return (
    <>
      <CustomFormLabel htmlFor='standard-select-number'>
        {props.label}
      </CustomFormLabel>
      <CustomSelect
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={props.value}
        onChange={props.handleChange}
        fullWidth
        size='small'
        variant={props.variant}
        sx={{ mb: props.mb }}
      >
        {props.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </CustomSelect>
    </>
  );
};

export default SelectDropdown;
