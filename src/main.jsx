import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Footer from './Components/Header/header'

const colors = {
  brand: {
    900: '#F2D7EE',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Footer/>
    </React.StrictMode>
  </ChakraProvider>,

)
