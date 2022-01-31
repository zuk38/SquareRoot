import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Card,
  CardContent,
  Box,
  CardMedia,
  CardActionArea,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../assets/global/Theme-variable';
import { ReactComponent as ImageIcon } from '../../images/icons/image.svg';

const Icon = styled(ImageIcon)`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;

function ImageCard({ path, img, title, subtitle, children, width, height }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        p: 0,
        width: width ? width : '270px',
        height: height ? height : '320px',
        postion: 'relative',
      }}
      onClick={() => navigate(path)}
    >
      <CardActionArea sx={{ height: '100%' }}>
        <Box
          sx={{
            borderRadius: 2,
            position: 'absolute',
            top: 0,
            height: '160px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {img ? (
            <CardMedia
              component={'img'}
              height='160'
              width='100%'
              image={img}
              alt={title}
            />
          ) : (
            <Icon />
          )}
        </Box>

        <CardContent sx={{ position: 'absolute', height: '50%' }}>
          <Typography variant='h4' fontStyle='bold'>
            {title}
          </Typography>
          <Typography
            variant='h5'
            fontStyle='italic'
            fontWeight='100'
            sx={{ color: theme.palette.grey.A200 }}
          >
            {subtitle}
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              bottom: '15px',
            }}
          >
            {children}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ImageCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  path: PropTypes.string.isRequired,
  img: PropTypes.any,
  children: PropTypes.node,
};

export default ImageCard;
