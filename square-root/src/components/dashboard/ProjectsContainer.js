import React from 'react';
import { Grid, Tooltip, Fab } from '@mui/material';
import { connect } from 'react-redux';
import ImageCard from '../base-card/ImageCard';
import BaseCard from '../base-card/BaseCard';
import FeatherIcon from 'feather-icons-react';
import { openAddProjectModal } from '../../redux/ducks/projectsReducer';
import AddProject from './AddProject';

function ProjectsContainer(props) {
  let { projects, openAddProjectModal } = props;

  return (
    <>
      {projects.length === 0 && (
        <BaseCard
          title='You have no projects. Create one to get started!'
          variant='h3'
          centering
          alignItems='center'
        >
          <Tooltip arrow title='Add project'>
            <Fab
              color='primary'
              aria-label='plus'
              onClick={() => openAddProjectModal(true)}
            >
              <FeatherIcon icon='plus' width='20' />
            </Fab>
          </Tooltip>
        </BaseCard>
      )}
      <AddProject />
      <Grid container spacing={0} sx={{ width: '100%', marginTop: '20px' }}>
        {projects.map(({ id, name, address, city, postalCode, createdAt }) => (
          <ImageCard
            key={id}
            title={name}
            subtitle={address + ' ' + city + ' ' + postalCode}
            path={`/dashboard/${name}`}
          >
            {createdAt.split('T')[0]}
          </ImageCard>
        ))}
      </Grid>
    </>
  );
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
});

export default connect(mapStateToProps, { openAddProjectModal })(
  ProjectsContainer
);
