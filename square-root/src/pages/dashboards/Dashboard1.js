import React from 'react';
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

import PageContainer from '../../components/container/PageContainer';

import { StyledEngineProvider } from '@mui/material/styles';
import Tabs from '../../components/menus/tabs';

import ProjectTitle from "./dashboard-components/ProjectTitle"

const Dashboard1 = () => (
  // 2

  <PageContainer title="Analytical Dashboard" description="this is Analytical Dashboard">
    
    {/* ------------------------- grid wrapper ------------------------- */}
    <Grid container spacing={0}>
     <ProjectTitle />
      {/* ------------------------- row 2 : tabs ------------------------- */}
      <Grid container spacing={0}>
      <Grid item xs={12} lg={8} sm={8}>
      <StyledEngineProvider injectFirst>
        <Tabs />
      </StyledEngineProvider>,
      </Grid>
      </Grid>
    <Grid container spacing={0}>
      {/* ------------------------- row 3 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <WelcomeCard />
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} sm={6}>
            <Earnings />
          </Grid>
          <Grid item xs={12} lg={6} sm={6}>
            <MonthlySales />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 4 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <TotalSales />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerformance />
      </Grid>
      {/* ------------------------- row 5 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <BlogCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <WeeklyStats />
      </Grid>
      <Grid item xs={12} lg={4}>
        <DailyActivities />
      </Grid>
    </Grid>
    </Grid>
  </PageContainer>
);
export default Dashboard1;
