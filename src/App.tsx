import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { RepositorySearch } from './Features/RepositorySearch/RepositorySearch';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Wrapper from './components/Wrapper';


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
const App = () => (
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    
      <Wrapper>
        <Header />
       
        <RepositorySearch />
      </Wrapper>
  </MuiThemeProvider>
  );


export default App;
