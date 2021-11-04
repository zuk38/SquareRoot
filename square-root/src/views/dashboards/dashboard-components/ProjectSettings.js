import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  FormControlLabel,
  Button,
  Grid,
  MenuItem,
  FormControl,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import CustomTextField from '../../../components/forms/custom-elements/CustomTextField';
import CustomSelect from '../../../components/forms/custom-elements/CustomSelect';
import CustomRadio from '../../../components/forms/custom-elements/CustomRadio';
import CustomFormLabel from '../../../components/forms/custom-elements/CustomFormLabel';

const currencies = [
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const countries = [
  {
    value: 'india',
    label: 'India',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
  },
  {
    value: 'srilanka',
    label: 'Srilanka',
  },
];

const FbBasicHeaderForm = () => {
  const [currency, setCurrency] = React.useState('');

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange3 = (event) => {
    setSelectedValue(event.target.value);
  };

  const [country, setCountry] = React.useState('');

  const handleChange4 = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Card
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: '15px 30px',
          }}
          display='flex'
          alignItems='center'
        >
          <Box flexGrow={1}>
            <Typography fontWeight='500' variant='h4'>
              Project Settings
            </Typography>
          </Box>
        </Box>
        <Divider />

        <CardContent
          sx={{
            padding: '30px',
          }}
        >
          <form>
            <Grid container spacing={3}>
              <Grid item lg={6} md={12} sm={12}>
                <CustomFormLabel htmlFor='fname-text'>
                  Project Name
                </CustomFormLabel>
                <CustomTextField
                  id='fname-text'
                  variant='outlined'
                  fullWidth
                  size='small'
                />
                <FormControl
                  sx={{
                    width: '100%',
                  }}
                >
                  {' '}
                </FormControl>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor='street-text'
                >
                  Street
                </CustomFormLabel>

                <CustomTextField
                  id='street-text'
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor='city-text'
                >
                  City
                </CustomFormLabel>
                <CustomTextField
                  id='city-text'
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor='state-text'
                >
                  State
                </CustomFormLabel>
                <CustomTextField
                  id='state-text'
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor='post-text'
                >
                  Post Code
                </CustomFormLabel>
                <CustomTextField
                  id='post-text'
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor='country-text'
                >
                  Country
                </CustomFormLabel>
                <CustomSelect
                  id='country-select'
                  value={country}
                  onChange={handleChange4}
                  fullWidth
                  variant='outlined'
                  size='small'
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </Grid>
            </Grid>
          </form>
        </CardContent>

        <Divider />
        <Box p={3} display='flex' justifyContent='right'>
          <Button variant='contained' color='primary'>
            Save
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default FbBasicHeaderForm;
