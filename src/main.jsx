import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Main from './Components/Main/main'

const colors = {
  brand: {
    900: '#F2D7EE',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const Button = {
  variants: {
    'black_button': {
      borderRadius:'30',
      bg:'black', 
      color:'white',
      fontSize:'14',
      border: '1px solid',
      p:'6',
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
}


const theme = extendTheme({ colors , components: { Button } })

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Main/>
    </React.StrictMode>
  </ChakraProvider>,

)
