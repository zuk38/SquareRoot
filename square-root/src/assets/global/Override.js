import Poppins from '../fonts/Poppins/Poppins-SemiBold.ttf';
import IBM from '../fonts/IBM/IBMPlexSerif-BoldItalic.ttf';

const poppinsSemiBold = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
  local('Poppins SemiBold'),
  local('Poppins-SemiBold'),
    url(${Poppins}) format('ttf')
  `,
};

const ibmBoldItalic = {
  fontFamily: 'IBM Plex Serif',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
  local('IBM Plex Serif Bold Italic'),
  local('IBMPlexSerif-BoldItalic'),
    url(${IBM}) format('ttf')
  `,
};

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        margin: 0,
        padding: 0,
      },
      '@global': {
        '@font-face': [poppinsSemiBold, ibmBoldItalic],
      },
      '#root': {
        height: '100%',
      },
      "*[dir='rtl'] .buyNowImg": {
        transform: 'scaleX(-1)',
      },

      '.buyNowImg': {
        position: 'absolute',
        right: '-44px',
        bottom: '0px',
        width: '230px',
      },
      '.MuiCardHeader-action': {
        alignSelf: 'center !important',
      },
      '.scrollbar-container': {
        borderRight: '0 !important',
      },
      "*[dir='rtl'] .welcomebg:before": {
        backgroundPosition: 'top -24px left -9px !important',
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '15px !important',
        paddingRight: '15px !important',
        maxWidth: '1600px',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '15px',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: '9px',
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        padding: '14px',
        margin: '15px',
        boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.11)',
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px',
      },
    },
  },

  MuiGridItem: {
    styleOverrides: {
      root: {
        paddingTop: '30px',
        paddingLeft: '30px !important',
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: '#ecf0f2',
        borderRadius: '6px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '0',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: '500',
        fontSize: '0.75rem',
      },
    },
  },
};

export default components;
