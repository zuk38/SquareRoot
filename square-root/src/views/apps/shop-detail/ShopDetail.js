import React from 'react';

import { Card, CardContent, Box, Grid } from '@mui/material';

import ProductDesc from '../../../components/shop/ProductDesc';
import Breadcrumb from '../../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';

import ProductCarousel from '../../../components/shop/ProductCarousel';
import ConceptDetail from '../../../components/shop/ConceptDetail';
import ProductRelated from '../../../components/shop/ProductRelated';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Roof gardens',
  },
];

const ShopDetail = () => {
  return (
    <PageContainer title="Shop Detail" description="this is Shop Detail page">
      {/* breadcrumb */}
      <Breadcrumb title="Roof gardens" items={BCrumb} />
      {/* end breadcrumb */}
      <Card>
        <CardContent>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} lg={6}>
              <Box sx={{ paddingRight: { xs: 0, lg: '50px' } }}>
                <ProductCarousel />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <ConceptDetail />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <ProductDesc />
      <ProductRelated />
    </PageContainer>
  );
};

export default ShopDetail;
