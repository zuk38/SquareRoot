import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import { SidebarWidth } from '../../../assets/global/Theme-variable';
import LogoIcon from '../logo/LogoIcon';
import LearnMore from './LearnMore';
import Scrollbar from '../../../components/custom-scroll/Scrollbar';
import Menuitems from './Menuitems';
import { button } from 'aws-amplify';

const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
  onModalOpen,
  projects,
}) => {
  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const SidebarContent = (
    <Scrollbar style={{ height: 'calc(100vh - 5px)' }}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ p: 2 }}>
          <LogoIcon />
          <Typography
            variant='secondary' //not yet updated with IBM font
            sx={{ mt: 1, opacity: '0.6' }}
          >
            The new platform for greenspaces
          </Typography>
        </Box>
        <Box>
          <List>
            {Menuitems.map((item, index) => {
              // {/********SubHeader**********/}
              if (item.subheader) {
                return (
                  <li key={item.subheader}>
                    <Typography
                      variant='body1'
                      sx={{ my: 2, mt: 4, opacity: '0.4' }}
                    >
                      {item.subheader}
                    </Typography>
                  </li>
                );
                // {/********If Sub Menu**********/}
                /* eslint no-else-return: "off" */
              } else if (item.children) {
                return (
                  <React.Fragment key={item.title}>
                    <ListItem
                      button
                      component='li'
                      onClick={() => handleClick(index)}
                      selected={pathWithoutLastPart === item.href}
                      sx={{
                        mb: 1,
                        ...(pathWithoutLastPart === item.href && {
                          color: 'white',
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(pathWithoutLastPart === item.href && {
                            color: 'white',
                          }),
                        }}
                      >
                        <FeatherIcon
                          icon={item.icon !== undefined ? item.icon : ''}
                          width='20'
                          height='20'
                        />
                      </ListItemIcon>
                      <ListItemText>{item.title}</ListItemText>
                      {index === open || pathWithoutLastPart === item.href ? (
                        <FeatherIcon icon='chevron-down' size='16' />
                      ) : (
                        <FeatherIcon icon='chevron-right' size='16' />
                      )}
                    </ListItem>
                    <Collapse in={index === open} timeout='auto' unmountOnExit>
                      <List component='li' disablePadding>
                        {item.title === 'My Projects'
                          ? projects.map((project) => (
                              <ListItem
                                key={project.name}
                                button
                                component={NavLink}
                                to={`/dashboard/${project.name}`}
                                onClick={onSidebarClose}
                                selected={
                                  pathDirect === `/dashboard/${project.name}`
                                }
                                sx={{
                                  mb: 1,
                                  ...(pathDirect ===
                                    `/dashboard/${project.name}` && {
                                    color: 'primary.main',
                                    backgroundColor: 'transparent!important',
                                  }),
                                }}
                              >
                                <ListItemIcon
                                  sx={{
                                    svg: { width: '14px', marginLeft: '3px' },
                                    ...(pathDirect ===
                                      `/dashboard/${project.name}` && {
                                      color: 'primary.main',
                                    }),
                                  }}
                                >
                                  <FeatherIcon
                                    icon={
                                      project.icon !== undefined
                                        ? project.icon
                                        : ''
                                    }
                                    width='20'
                                    height='20'
                                  />
                                </ListItemIcon>
                                <ListItemText>{project.name}</ListItemText>
                              </ListItem>
                            ))
                          : item.children.map((child) => (
                              <ListItem
                                key={child.title}
                                button
                                component={NavLink}
                                to={child.href}
                                onClick={onSidebarClose}
                                selected={pathDirect === child.href}
                                sx={{
                                  mb: 1,
                                  ...(pathDirect === child.href && {
                                    color: 'primary.main',
                                    backgroundColor: 'transparent!important',
                                  }),
                                }}
                              >
                                <ListItemIcon
                                  sx={{
                                    svg: { width: '14px', marginLeft: '3px' },
                                    ...(pathDirect === child.href && {
                                      color: 'primary.main',
                                    }),
                                  }}
                                >
                                  <FeatherIcon
                                    icon={
                                      child.icon !== undefined ? child.icon : ''
                                    }
                                    width='20'
                                    height='20'
                                  />
                                </ListItemIcon>
                                <ListItemText>{child.title}</ListItemText>
                              </ListItem>
                            ))}
                        {item.title === 'My Projects' && (
                          <ListItem
                            key='new project'
                            button
                            component={button}
                            onClick={() => onModalOpen(true)}
                            sx={{
                              mb: 1,
                              ...{
                                color: 'secondary.main',
                              },
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                svg: { width: '14px', marginLeft: '3px' },
                                ...{
                                  color: 'primary.main',
                                },
                              }}
                            >
                              <FeatherIcon icon='plus' width='20' height='20' />
                            </ListItemIcon>
                            <ListItemText>Create new Project</ListItemText>
                          </ListItem>
                        )}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
                // {/********If Sub No Menu**********/}
              } else {
                return (
                  <List component='li' disablePadding key={item.title}>
                    <ListItem
                      onClick={() => handleClick(index)}
                      button
                      component={NavLink}
                      to={item.href}
                      selected={pathDirect === item.href}
                      sx={{
                        mb: 1,
                        ...(pathDirect === item.href && {
                          color: 'white',
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(pathDirect === item.href && { color: 'white' }),
                        }}
                      >
                        <FeatherIcon
                          icon={item.icon !== undefined ? item.icon : ''}
                          width='20'
                          height='20'
                        />
                      </ListItemIcon>
                      <ListItemText onClick={onSidebarClose}>
                        {item.title}
                      </ListItemText>
                    </ListItem>
                  </List>
                );
              }
            })}
          </List>
        </Box>
        <LearnMore />
      </Box>
    </Scrollbar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor='left'
        open={isSidebarOpen}
        variant='persistent'
        PaperProps={{
          sx: {
            width: SidebarWidth,
            border: '0 !important',
            boxShadow: '0px 7px 30px 0px rgb(113 122 131 / 11%)',
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor='left'
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
          border: '0 !important',
        },
      }}
      variant='temporary'
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  onModalOpen: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
  projects: PropTypes.object,
};

export default Sidebar;
