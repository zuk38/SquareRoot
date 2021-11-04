import React from 'react';

import { TextField } from '@mui/material';

import Autocomplete from '@mui/material/Autocomplete';
import BaseCardSmall from '../../base-card/BaseCardSmall';

const myprojects = [
  { label: 'Sørengkaia' },
  { label: 'Tekna' },
  { label: 'Netflix HQ' },
];

const ProjectAutocomplete = () => (
  <Autocomplete
    disablePortal
    id='combo-box-demo'
    options={myprojects}
    fullWidth
    sx={{
      mb: 2,
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        placeholder='Select project'
        aria-label='Select project'
      />
    )}
  />
);

export default ProjectAutocomplete;
