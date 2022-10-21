import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      lagunaDark: string;
      lagunaLight: string;
      light: string;
      secondary: string;
      bg: string
    };
  }
}

const palette = {
  custom: {
    lagunaDark: '#69A297',
    lagunaLight: '#84B59F',
    greenLight: '#A3C9A8',
    secondary: '#DDD8C4',
    bg: '#f6f6f6',
  },
};

export const baseThemeOptions = {
  palette,
  components: {
    MuiLink: {
      styleOverrides: {
        underlineAlways: {
          textDecoration: 'none',
        },
      },
    },
  },
};

export const ProjectTheme = createTheme(baseThemeOptions as any);
