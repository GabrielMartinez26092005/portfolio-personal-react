import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Themes/resources'; 
import Main from './Components/Main/main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </ChakraProvider>
);
