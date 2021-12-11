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
    name: 'Andreas Johannessen',
    post: 'Landscape Entrepreneur',
    pname: 'Anlegg Øst',
    email: 'andreasjohannessen@anleggost.no',
  },
  {
    id: '2',
    name: 'Linn Runeson',
    post: 'Landscape Architect',
    pname: 'Edit',
    email: 'linn@edit.land',
  },
  {
    id: '3',
    name: 'Ingrid Svelvik',
    post: 'Real Estate Developer',
    pname: 'OBOS',
    email: 'ingrid@obos.no',
  },
  {
    id: '4',
    name: 'Eric Reid',
    post: 'Landscape Architect',
    pname: 'Edit',
    email: 'eric@edit.land',
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
                      <Box
                        sx={{
                          ml: 0,
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
