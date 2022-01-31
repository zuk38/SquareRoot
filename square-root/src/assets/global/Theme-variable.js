import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import typography from './Typography';
import components from './Override';
import shadows from './Shadows';

const SidebarWidth = 265;
const TopbarHeight = 70;

const commonColors = {
  black: '#111111',
  lightGray: '#DDDDDD',
};

const baseTheme = {
  direction: 'ltr',
  palette: {
    text: {
      primary: commonColors.black,
      secondary: commonColors.lightGray,
      disabled: '#9e9e9e',
      danger: '#fc4b6c',
    },
    background: {
      main: commonColors.lightGray,
    },
    primary: {
      main: '#8ca68c',
      light: '#bcd7bc',
      dark: '#5e775f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3e3d3d',
      light: '#7d7a7a',
      dark: '#292828',
    },
    success: {
      main: '#00c292',
      light: '#ebfaf2',
      dark: '#00964b',
      contrastText: '#ffffff',
    },
    danger: {
      main: '#e46a76',
      light: '#fdf3f5',
    },
    info: {
      main: '#0bb2fb',
      light: '#a7e3f4',
    },
    error: {
      main: '#c10810',
    },
    warning: {
      main: '#fec90f',
      light: '#fff4e5',
      dark: '#dcb014',
      contrastText: '#ffffff',
    },
    grey: {
      A100: '#ecf0f2',
      A200: '#99abb4',
      A400: '#767e89',
      A700: '#e6f4ff',
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: 'rgba(0, 0, 0, 0.03)',
    },
  },

  shape: {
    borderRadius: 5,
  },
  mixins: {
    toolbar: {
      color: '#949db2',
      '@media(min-width:1280px)': {
        minHeight: TopbarHeight,
        padding: '0 30px',
      },
      '@media(max-width:1280px)': {
        minHeight: '64px',
      },
    },
  },
  status: {
    danger: '#e53e3e',
  },
  components,
  typography,
  shadows,
};

export const BuildTheme = () => {
  const baseMode = {
    palette: {
      mode: 'light',
      background: {
        default: '#fafbfb',
        dark: '#ffffff',
        paper: '#ffffff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: '#777e89',
      },
    },
  };

  const theme = createTheme(
    _.merge({}, baseTheme, baseMode, {
      direction: 'ltr',
    })
  );
  return theme;
};

export const theme = BuildTheme();

export { TopbarHeight, SidebarWidth, baseTheme };
