import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import { StyledEngineProvider } from '@mui/material/styles';
import Tabs from './tabs';
import MembersTable from '../tables/MembersTable';
import ProjectSettings from './dashboard-components/ProjectSettings';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import { useParams } from 'react-router';

const tabs = [
  {
    label: 'Overview',
    value: '1',
    component: <div> hello from project </div>,
  },
  {
    label: 'Members',
    value: '2',
    component: <MembersTable />,
  },
  {
    label: 'Settings',
    value: '3',
    component: <ProjectSettings />,
  },
];

function SingleProject() {
  const params = useParams();
  const projectName = params.name;

  const BCrumb = [
    {
      to: '/dashboard',
      title: 'Dashboard',
    },
    {
      title: projectName,
    },
  ];

  return (
    <PageContainer
      title='Individual Project Dashboard'
      description='this is individual project Dashboard'
    >
      <Breadcrumb title={projectName} items={BCrumb} />
      <Grid container spacing={0}>
        {/* ------------------------- grid wrapper ------------------------- */}

        {/* ------------------------- row 2 : tabs ------------------------- */}
        <Grid container spacing={0}>
          <Grid item xs={12} lg={8} sm={8}>
            <StyledEngineProvider injectFirst>
              <Tabs tabs={tabs} />
            </StyledEngineProvider>
          </Grid>
        </Grid>
        <Grid container spacing={0}></Grid>
      </Grid>
    </PageContainer>
  );
}

export default SingleProject;
