import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';

import {
  EarningsShop,
  TopCards,
  ProductPerformance,
  WeeklyStats,
  RecentTransactions,
  Earnings,
  YearlySales,
  ProductsTable,
  MedicalproBranding,
  BlogCard,
} from './dashboard2-components';

import { StyledEngineProvider } from '@mui/material/styles';
import Tabs from './tabs';

const Dashboard2 = () => (
  <PageContainer
    title='eCommerce Dashboard'
    description='this is eCommerce Dashboard'
  >
    <Grid container spacing={0}>
      {/* ------------------------- grid wrapper ------------------------- */}

      {/* ------------------------- row 2 : tabs ------------------------- */}
      <Grid container spacing={0}>
        <Grid item xs={12} lg={8} sm={8}>
          <StyledEngineProvider injectFirst>
            <Tabs />
          </StyledEngineProvider>
          ,
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4}>
          <EarningsShop />
        </Grid>
        <Grid item xs={12} lg={8}>
          <TopCards />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Earnings />
          <YearlySales />
        </Grid>
        <Grid item xs={12} lg={4}>
          <RecentTransactions />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductsTable />
        </Grid>
        <Grid item xs={12} lg={4}>
          <WeeklyStats />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MedicalproBranding />
        </Grid>
        <Grid item xs={12} lg={4}>
          <BlogCard />
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
);

export default Dashboard2;
