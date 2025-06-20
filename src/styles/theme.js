import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f8f9ea', // light lemon background
      100: '#ffeb3b', // lemon yellow
      500: '#b2a03a', // medium olive
      700: '#687439', // deep olive
      900: '#283618', // dark text
    },
    // add accent/ utility colors as needed
    accent: {
      500: '#db9600', // olive green for buttons, accents, highlights
      700: '#3A5A40', // deep olive for hover, focus
    },
    success: {
      500: '#81C784', // accessible green for success
    },
    error: {
      500: '#E57373', // accessible red for error
    },
    background: {
      light: '#FFFBE9',
      dark: '#222B2E',
    },
    gray: {
      100: '#FAFAF7', // inputs
      400: '#888888', // subtext
      900: '#232323', // darkest bg
    },
  },
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

export default theme;
