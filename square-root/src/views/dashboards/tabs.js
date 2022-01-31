import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

/* tabs props should be an object that has label, value and a respective component field */
export default function LabTabs({ tabs }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event) => {
    //event target id outpus something like: mui-p-45400-T-2
    let newTab = event.target.id.toString();
    setValue(newTab.slice(-1));
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onClick={(e) => handleChange(e)} aria-label=''>
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                label={tab.label}
                value={tab.value}
                sx={{ typography: 'h5' }}
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel value={tab.value}>{tab.component}</TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
