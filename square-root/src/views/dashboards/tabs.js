import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Grid } from '@mui/material';
import {
  WelcomeCard,
  BlogCard,
  Earnings,
  MonthlySales,
  SalesOverview,
  TotalSales,
  ProductPerformance,
  WeeklyStats,
  DailyActivities,
} from './dashboard1-components';
import MembersTable from '../tables/MembersTable';
import ProjectOrders from './dashboard-components/ProjectOrders';
import ProjectGreenspaces from './dashboard-components/ProjectGreenspaces';
import ProjectSettings from './dashboard-components/ProjectSettings';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label=''>
            <Tab label='Greenspaces' value='1' sx={{ typography: 'h5' }} />
            <Tab label='Members' value='2' sx={{ typography: 'h5' }} />
            <Tab label='Orders' value='3' sx={{ typography: 'h5' }} />
            <Tab label='Settings' value='4' sx={{ typography: 'h5' }} />
          </TabList>
        </Box>

        <TabPanel value='1'>
          <ProjectGreenspaces />
        </TabPanel>

        <TabPanel value='2'>
          <MembersTable />
        </TabPanel>

        <TabPanel value='3'>
          <ProjectOrders />
        </TabPanel>

        <TabPanel value='4'>
          <Grid item lg={12} md={12} xs={12}>
            <ProjectSettings />
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
