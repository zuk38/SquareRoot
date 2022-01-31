import React from 'react';
import { connect } from 'react-redux';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import ImageCard from '../../components/base-card/ImageCard';
import { Grid } from '@mui/material';

function Plants({ plants }) {
  const BCrumb = [
    {
      to: '/dashboard',
      title: 'Dashboard',
    },
    {
      title: 'All Plants',
    },
  ];

  return (
    <PageContainer title='All Plants' description='This is all plants page'>
      <Breadcrumb title='All Plants' items={BCrumb} />
      <Grid container spacing={0} sx={{ width: '100%' }}>
        {plants.map((plant) => (
          <ImageCard title={plant.norwegian_name} subtitle={plant.latin_name}>
            {/* ---- project icons ---- 
        <FeatherIcon>{plant.icons}</FeatherIcon>*/}
            {/** 
      {product.star.map((index) => (
        <FeatherIcon
          icon="star"
          key={index}
          size="14"
          style={{ fill: '#fdd43f', stroke: '#fdd43f' }}
        />

      ))}
      */}
          </ImageCard>
        ))}
      </Grid>
    </PageContainer>
  );
}

const mapStateToProps = ({ plants }) => ({
  plants: plants.plants,
});

export default connect(mapStateToProps)(Plants);
