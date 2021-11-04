import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from '@mui/material';

import PageContainer from '../../components/container/PageContainer';

import img1 from '../../assets/images/users/1.jpg';
import img2 from '../../assets/images/users/2.jpg';
import img3 from '../../assets/images/users/3.jpg';
import img4 from '../../assets/images/users/4.jpg';
import img5 from '../../assets/images/users/5.jpg';

const basics = [
  {
    id: '1',
    imgsrc: img1,
    name: 'Sunil Joshi',
    post: 'Landscape Entrepreneur',
    pname: 'Anlegg Øst',
    email: 'sil.joshi@anlegg.no',
  },
  {
    id: '2',
    imgsrc: img2,
    name: 'Andrew McDownland',
    post: 'Landscape Architect',
    pname: 'Edit',
    email: 'andrew@edit.no',
  },
  {
    id: '3',
    imgsrc: img3,
    name: 'Christopher Jamil',
    post: 'Real Estate Developer',
    pname: 'OBOS',
    email: 'christopher@obos.no',
  },
  {
    id: '4',
    imgsrc: img3,
    name: 'Nirav Joshi',
    post: 'Landscape Architect',
    pname: 'Edit',
    email: 'nirav@edit.no',
  },
];

const MembersTable = () => (
  <PageContainer title='Basic Table' description='this is Basic Table page'>
    <Card>
      <CardContent>
        <Box
          sx={{
            overflow: {
              xs: 'auto',
              sm: 'unset',
            },
          }}
        >
          <Table
            aria-label='simple table'
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h5'>Members</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h5'>Company</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h5'>E-mail</Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {basics.map((basic) => (
                <TableRow key={basic.id}>
                  <TableCell>
                    <Box display='flex' alignItems='center'>
                      <Avatar
                        src={basic.imgsrc}
                        alt={basic.imgsrc}
                        width='35'
                        sx={{
                          borderRadius: '100%',
                        }}
                      />
                      <Box
                        sx={{
                          ml: 2,
                        }}
                      >
                        <Typography variant='h6' fontWeight='600'>
                          {basic.name}
                        </Typography>
                        <Typography
                          color='textSecondary'
                          variant='h6'
                          fontWeight='400'
                        >
                          {basic.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color='textSecondary'
                      variant='h6'
                      fontWeight='400'
                    >
                      {basic.pname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color='textSecondary'
                      variant='h6'
                      fontWeight='400'
                    >
                      {basic.email}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  </PageContainer>
);

export default MembersTable;
