import React from 'react';
import { Box, Grid, Card, Typography, CardContent, Fab, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Shopitems from '../../../data/projects/Greenspaces';
import PageContainer from '../../../components/container/PageContainer';



const ShopPage = () => (
  <PageContainer title="Project Greenspaces" description="this is Project Greenspaces page">
       <Box display="flex" justifyContent="right">
       <Fab size="medium" variant="extended" color="primary" aria-label="medium-bell"
        sx={{ position: 'fixed', right: '15px', bottom: '15px' }}
        //onClick={}
        >
          <FeatherIcon fontSize="small" icon="plus" width="18" height="18" />
          <Typography
            sx={{
              ml: 1,
              textTransform: 'capitalize',
            }}
          >
            Add greenspace
          </Typography>
        </Fab>
        </Box>
    <Grid container spacing={0}>
      {Shopitems.map((product) => (
        <Grid item xs={12} lg={4} sm={4} display="flex" alignItems="stretch" key={product.id}>
          <Card sx={{ p: 0, width: '100%' }}>

            <img src={product.photo} alt="img" width="100%" />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="caption">{product.category}</Typography>
              <Typography
                component={Link}
                to="/shop/shop-detail"
                fontWeight="500"
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  color: (theme) =>
                    `${
                      theme.palette.mode === 'dark'
                        ? theme.palette.grey.A200
                        : 'rgba(0, 0, 0, 0.87)'
                    }`,
                }}
              >
                {product.title}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
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
                <FeatherIcon>
                  {product.icons}
               </FeatherIcon>
                
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

export default ShopPage;
