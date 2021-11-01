import React from 'react';
import { Grid } from '@mui/material';

import PageContainer from '../../components/container/PageContainer';

import { StyledEngineProvider } from '@mui/material/styles';
import Tabs from './tabs';

import ProjectTitle from "./dashboard-components/ProjectTitle";
import ProjectDescription from "./dashboard-components/ProjectDescription";

const Dashboard1 = () => (

  <PageContainer title="Project Dashboard" description="this is Analytical Dashboard">
    
    {/* ------------------------- grid wrapper ------------------------- */}
    <Grid container spacing={0}>
     <ProjectTitle />
     <Grid container spacing={0}>
     <Grid item xs={12} lg={12} sm={12}>
       <ProjectDescription />
     </Grid>
     </Grid>
      {/* ------------------------- row 2 : tabs ------------------------- */}
      <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sm={12} sx={{
            ml: 2,
            mt: 5
          }}>
      <StyledEngineProvider injectFirst>
        <Tabs />
      </StyledEngineProvider>,
      </Grid>
      </Grid>
    </Grid>
  </PageContainer>
);
export default Dashboard1;
