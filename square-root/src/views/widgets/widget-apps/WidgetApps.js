import React from 'react';
import { Grid } from '@mui/material';

import RecentComments from '../../../components/menus/widgets/RecentComments';
import Todo from '../../../components/menus/widgets/Todo';
import Visits from '../../../components/menus/widgets/Visits';
import TaskList from '../../../components/menus/widgets/TaskList';
import RecentMessages from '../../../components/menus/widgets/RecentMessages';
import BrowesStats from '../../../components/menus/widgets/BrowesStats';
import Subscribe from '../../../components/menus/widgets/Subscribe';

import Breadcrumb from '../../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Widget Apps',
  },
];

const WidgetApps = () => {
  return (
    <PageContainer title='Widget Apps' description='this is Widget Apps page'>
      {/* breadcrumb */}
      <Breadcrumb title='Widget Apps' items={BCrumb} />

      {/* end breadcrumb */}
      <Grid container spacing={0}>
        <Grid item lg={4} md={12} xs={12}>
          <RecentComments />
          <TaskList />
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <Todo />
          <Visits />
          <Subscribe />
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <RecentMessages />
          <BrowesStats />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default WidgetApps;
