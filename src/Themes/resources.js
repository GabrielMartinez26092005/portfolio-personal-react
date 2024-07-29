import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // color1: 'rgb(16,24,32)',  // "Negro"
    // color2: 'rgb(249,249,249)', // "Blanco"
    // color3: 'rgb(254,231,21)', // "Amarillo"
  },

  

  components: {
    Button: {
      variants: {
        'black_button': {
          borderRadius:'30',
          bg:'black', 
          color:'white',
          fontSize:'14',
          border: '1px solid',
          p:'6px',
          _hover: {
            bg: 'white',
            color: 'black',
            border: '1px solid',
            borderColor: 'black',
            transition:'.8s'
          }
        },
        'white_button': {
          borderRadius:'30',
          bg:'white', 
          color:'black',
          fontSize:'14',
          p:'6px',
          _hover: {
            bg: 'black',
            color: 'white',
            transition:'.8s'
          }  
        },
      }
    },
  },
});

export default theme;

// Definir colores en formato rgb()
export const colors = {
  // color1: 'rgb(16,24,32)',  // "Negro"
  // color2: 'rgb(249,249,249)', // "Blanco"
  // color3: 'rgb(254,231,21)', // "Amarillo"
};
