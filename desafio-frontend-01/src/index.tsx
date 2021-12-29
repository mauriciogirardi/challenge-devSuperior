import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { theme } from 'styles/theme'
import { Providers } from 'hooks'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Providers>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Providers>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
