import React from 'react';
import CustomSelect from '../custom-elements/CustomSelect';
import CustomFormLabel from '../custom-elements/CustomFormLabel';
import { MenuItem } from '@mui/material';

const titles = [
    {
      value: 'RED',
      label: 'Real Estate Developer',
    },
    {
      value: 'LARK',
      label: 'Landscape Architect',
    },
    {
      value: 'LENT',
      label: 'Landscape Entrepreneur',
    },
    {
      value: 'PN',
      label: 'Plant Nursery',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ];

  const SignUpDropdown = () => {
    


    const [title, setTitle] = React.useState('');

    const handleChange = (event) => {
      setTitle(event.target.value);
    };


return (
    <>
    <CustomFormLabel htmlFor="standard-select-number">I am a...</CustomFormLabel>
            <CustomSelect
              fullWidth
              id="standard-select-number"
              variant="outlined"
              value={title}
              onChange={handleChange}
              size="small"
              sx={{
                mb: 3,
              }}
            >
              {titles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>
    </>
);
};

export default SignUpDropdown;