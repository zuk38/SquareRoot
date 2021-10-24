import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="">
            <Tab label="Greenspaces" value="1" sx={{typography: 'h5' }}/>
            <Tab label="Members" value="2" sx={{typography: 'h5' }}/>
            <Tab label="Orders" value="3" sx={{typography: 'h5' }}/>
            <Tab label="Settings" value="4" sx={{typography: 'h5' }}/>
          </TabList>
        </Box>
        <TabPanel value="1">Show greenspces</TabPanel>
        <TabPanel value="2">Show members</TabPanel>
        <TabPanel value="3">Show Orders</TabPanel>
        <TabPanel value="4">Show settings</TabPanel>
      </TabContext>
    </Box>
  );
}