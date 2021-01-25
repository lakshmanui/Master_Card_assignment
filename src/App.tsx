import React from 'react';
import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client'
import { ApolloProvider, HttpLink } from '@apollo/react-hooks';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import { RepositorySearch } from './Features/RepositorySearch/RepositorySearch';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `bearer ${'b4c61b1f0aaea901740bda05a5862cdfacc637a4'}`
   
    },
  }),
});

   
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});
const App = () => {
  
  
  return (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <Wrapper>
        <Header />
        <RepositorySearch />
      </Wrapper>
  </MuiThemeProvider>
  </ApolloProvider>
  )
};


export default App;
