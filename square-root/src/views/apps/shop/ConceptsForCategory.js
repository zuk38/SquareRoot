import React from 'react';
import { useParams } from 'react-router';
import Breadcrumb from '../../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import { useSelector } from 'react-redux';
import { selectConceptFromCategory } from '../../../redux/ducks/conceptsReducer';
import { Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function ConceptsForCategory() {
  const params = useParams();
  const categoryName =
    params.name.charAt(0).toUpperCase() + params.name.slice(1);

  const BCrumb = [
    {
      to: '/dashboard',
      title: 'Dashboard',
    },
    {
      title: categoryName,
    },
  ];

  const concepts = useSelector((state) =>
    selectConceptFromCategory(state, categoryName)
  );

  return (
    <PageContainer title={categoryName} description='this is Shop List page'>
      {/* breadcrumb */}
      <Breadcrumb title={categoryName} items={BCrumb} />
      <Grid container spacing={0}>
        {concepts.map((concept) => (
          <Grid
            item
            xs={12}
            lg={4}
            sm={4}
            display='flex'
            alignItems='stretch'
            key={concept.id}
          >
            <Card
              sx={{ p: 0, width: '100%', textDecoration: 'none' }}
              component={Link}
              to='/shop/shop-detail'
            >
              <img src={concept.photo} alt={concept.name} width='100%' />
              <CardContent sx={{ p: 3 }}>
                <Typography variant='caption'>{concept.category}</Typography>
                <Typography
                  fontWeight='500'
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'rgba(0, 0, 0, 0.87)',
                  }}
                >
                  {concept.name}
                </Typography>
                <Box
                  display='flex'
                  alignItems='center'
                  sx={{
                    mt: '15px',
                  }}
                >
                  {/* ---- project icons ---- */}
                  {/*<FeatherIcon>{product.icons}</FeatherIcon>*/}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
