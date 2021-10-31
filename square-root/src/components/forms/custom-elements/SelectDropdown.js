import React from 'react';
import PropTypes from 'prop-types';
import {Box, MenuItem} from '@mui/material';
import {SliderThumb} from '@mui/material/Slider';

import CustomSelect from './CustomSelect';
import CustomFormLabel from './CustomFormLabel';

const CustomThumbComponent = (props) => {
    const {
        children,
        ...other
    } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <Box sx={
                {
                    height: 9,
                    width: '2px',
                    backgroundColor: '#fff'
                }
            }/>
            <Box sx={
                {
                    height: '14px',
                    width: '2px',
                    backgroundColor: '#fff',
                    ml: '2px'
                }
            }/>
            <Box sx={
                {
                    height: 9,
                    width: '2px',
                    backgroundColor: '#fff',
                    ml: '2px'
                }
            }/>
        </SliderThumb>
    );
};

CustomThumbComponent.propTypes = {
    children: PropTypes.node
};

const SelectDropdown = () => {
    const [age, setAge] = React.useState('1');
    const [select1, setSelect] = React.useState('1');
    const [select2, setSelect2] = React.useState('1');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange4 = (event2) => {
        setSelect(event2.target.value);
    };

    const handleChange5 = (event3) => {
        setSelect2(event3.target.value);
    };

    const [value, setValue] = React.useState(null);
    const [value2, setValue2] = React.useState(null);

    const [value3, setValue3] = React.useState(30);
    const handleChange6 = (event, newValue) => {
        setValue3(newValue);
    };
    return (
        <>
            
            <CustomSelect labelId="demo-simple-select-label" id="demo-simple-select"
                value={age}
                onChange={handleChange}
                fullWidth
                size="small">
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
            </CustomSelect>
        
        </>
    );
};

export default SelectDropdown;
