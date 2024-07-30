import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: 'rgb(16,24,32)',  
  white: 'rgb(249,249,249)', 
  yellow: 'rgb(254,231,21)', 
};

const theme = extendTheme({
  colors, 

  components: {
    Button: {
      variants: {
        'black_button': {
          borderRadius: '30px', 
          bg: 'black', 
          color: 'white',
          fontSize: '14px', 
          border: '1px solid',
          p: '6px',
          _hover: {
            bg: 'white',
            color: 'black',
            borderColor: 'black',
            transition: '.8s',
          }
        },
        'white_button': {
          borderRadius: '30px', 
          bg: 'white', 
          color: 'black',
          fontSize: '14px', 
          p: '6px',
          _hover: {
            bg: 'black',
            color: 'white',
            transition: '.8s',
          }  
        },
      }
    },
  },
});

export default theme;
