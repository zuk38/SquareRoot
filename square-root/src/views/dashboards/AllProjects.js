import React from 'react';
import { Grid } from '@mui/material';

import PageContainer from '../../components/container/PageContainer';

import { StyledEngineProvider } from '@mui/material/styles';
import Tabs from './tabs';
import ProjectOrders from './dashboard-components/ProjectOrders';
import ProjectsContainer from '../../components/dashboard/ProjectsContainer';
import { connect } from 'react-redux';
import { fetchConcepts } from '../../redux/ducks/conceptsReducer';
import { fetchPlants } from '../../redux/ducks/plantsReducer';
import { fetchCategories } from '../../redux/ducks/conceptsReducer';
import { fetchProjects } from '../../redux/ducks/projectsReducer';

function AllProjects(props) {
  let { projects, fetchPlants, fetchConcepts, fetchCategories, fetchProjects } =
    props;

  const tabs = [
    {
      label: 'My Projects',
      value: '1',
      component: <ProjectsContainer projects={projects} />,
    },
    {
      label: 'My Favourites',
      value: '2',
      component: <div>hello from favourites</div>,
    },
    {
      label: 'Orders',
      value: '3',
      component: <ProjectOrders />,
    },
  ];

  React.useEffect(() => {
    fetchConcepts();
    fetchPlants();
    fetchCategories();
    fetchProjects();
  }, [fetchConcepts, fetchPlants, fetchCategories, fetchProjects]);

  return (
    <PageContainer
      title='Project Dashboard'
      description='this is Analytical Dashboard'
    >
      {/* ------------------------- grid wrapper ------------------------- */}
      <Grid container spacing={0}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12} sm={12} />
        </Grid>

        {/*------------------------- row 2 : tabs ------------------------- */}
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            lg={12}
            sm={12}
            sx={{
              ml: 2,
              mt: 5,
            }}
          >
            <StyledEngineProvider injectFirst>
              <Tabs tabs={tabs} />
            </StyledEngineProvider>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
});

export default connect(mapStateToProps, {
  fetchProjects,
  fetchPlants,
  fetchConcepts,
  fetchCategories,
})(AllProjects);
