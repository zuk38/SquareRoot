import React from 'react';
import { Box, Grid, Card, Typography, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Breadcrumb from '../../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import { connect } from 'react-redux';
import { theme } from '../../../assets/global/Theme-variable';

const BCrumb = [
  {
    to: '/',
    title: 'Plants for',
  },
  {
    title: 'Indoor',
  },
];

const ShopPage = (props) => {
  let { plants } = props;
  return (
    <PageContainer title='Shop List' description='this is Shop List page'>
      {/* breadcrumb */}
      <Breadcrumb title='All Plants' items={BCrumb} />

      <Grid container spacing={0}>
        {plants.map((plant) => (
          <Grid
            item
            xs={12}
            lg={4}
            sm={4}
            display='flex'
            alignItems='stretch'
            key={plant.id}
          >
            <Card
              sx={{ p: 0, width: '100%', textDecoration: 'none' }}
              component={Link}
              to='/shop/shop-detail'
            >
              <img
                src={plant.img}
                alt={plant.norwegian_name ?? plant.latin_name}
                width='100%'
              />
              <CardContent sx={{ p: 3 }}>
                <Typography variant='caption'>{plant.categories[0]}</Typography>
                <Typography
                  fontWeight='500'
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    color: theme.palette.grey.A200,
                  }}
                >
                  {plant.norwegian_name ?? plant.latin_name}
                </Typography>
                <Box
                  display='flex'
                  alignItems='center'
                  sx={{
                    mt: '15px',
                  }}
                >
                  {/**  ----- product price -----
                <Typography variant="h5" sx={{ mr: 'auto' }}>
                  {product.price}
                </Typography>

                */}

                  {/* ---- project icons ---- */}
                  <FeatherIcon>{plant.icons}</FeatherIcon>

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
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

const mapStateToProps = ({ plants }) => ({
  plants: plants.plants,
});

export default connect(mapStateToProps)(ShopPage);
