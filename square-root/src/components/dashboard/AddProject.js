import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { connect } from 'react-redux';
import {
  openAddProjectModal,
  addProject,
} from '../../redux/ducks/projectsReducer';
import { Modal } from '@mui/material';
import useForm from '../hooks/useForm';
import validate from '../../utility/CreateProjectValidation';
import CustomTextField from '../forms/custom-elements/CustomTextField';
import CustomFormLabel from '../forms/custom-elements/CustomFormLabel';

const AddProject = (props) => {
  const { addProjectModalOpen, openAddProjectModal, projects, addProject } =
    props;
  const { values, errors, handleChange, handleSubmit, setProjectExistsErrors } =
    useForm(validate, add);

  React.useEffect(() => {
    if (!values.name || values.name === '' || !projects.length) return;
    let found = projects.find((project) => project.name === values.name);
    setProjectExistsErrors(found);
  }, [values.name, projects.length]);

  function add() {
    console.log(values);
    //form validated, add project
    addProject(values);
    //close modal
    openAddProjectModal(false);
  }

  return (
    <Modal
      open={addProjectModalOpen}
      onClose={() => openAddProjectModal(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      sx={{ borderRadius: '10px' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          bgcolor: 'background.paper',
          border: 'none',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant='h1'>La oss lage et økosystem</Typography>
        <Divider />
        <Box p='10px 20px'>
          <form>
            <CustomFormLabel htmlFor='name'>Project name</CustomFormLabel>
            <CustomTextField
              id='name'
              type='text'
              variant='outlined'
              fullWidth
              size='small'
              value={values.name || ''}
              onChange={handleChange}
              {...(errors.name &&
                errors.name !== '' && {
                  error: true,
                  helperText: errors.name,
                })}
            />
            <CustomFormLabel htmlFor='address'>Project adress</CustomFormLabel>
            <CustomTextField
              id='address'
              type='text'
              variant='outlined'
              fullWidth
              size='small'
              value={values.address || ''}
              onChange={handleChange}
              {...(errors.address &&
                errors.address !== '' && {
                  error: true,
                  helperText: errors.address,
                })}
            />
            <CustomFormLabel htmlFor='city'>City</CustomFormLabel>
            <CustomTextField
              id='city'
              type='text'
              variant='outlined'
              fullWidth
              size='small'
              value={values.city || ''}
              onChange={handleChange}
              {...(errors.city &&
                errors.city !== '' && {
                  error: true,
                  helperText: errors.city,
                })}
            />
            <CustomFormLabel htmlFor='zip'>Zip code</CustomFormLabel>
            <CustomTextField
              id='zip'
              type='text'
              variant='outlined'
              fullWidth
              size='small'
              value={values.zip || ''}
              onChange={handleChange}
              {...(errors.zip &&
                errors.zip !== '' && {
                  error: true,
                  helperText: errors.zip,
                })}
            />
            <CustomFormLabel htmlFor='description'>
              Project description
            </CustomFormLabel>
            <CustomTextField
              id='description'
              multiline
              rows={4}
              variant='outlined'
              fullWidth
              size='small'
              value={values.description || ''}
              onChange={handleChange}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginTop: '20px',
              }}
            >
              <Button
                color='primary'
                variant='contained'
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
  addProjectModalOpen: projects.addProjectModalOpen,
});

export default connect(mapStateToProps, {
  openAddProjectModal,
  addProject,
})(AddProject);
