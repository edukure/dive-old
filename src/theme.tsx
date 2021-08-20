import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    white: '#FFFFFF',
    black: '#16161D',
    alura: {
      gray: '#464545',
      'dark-blue': '#041833',
      blue: '#154580',
      'light-blue': '#1875e8',
      programacao: '#00c86F',
      'front-end': '#6bd1ff',
      'data-science': '#9cd33B',
      devops: '#f16165',
      'design-ux': '#DC6EBE',
      mobile: '#FFBA05',
      'inovacao-gestao': '#ff8c2a',
    },
  },
  fonts: { body: 'Inter, sans-serif', heading: 'Inter, sans-serif'},
  breakpoints,
});

export default theme;
