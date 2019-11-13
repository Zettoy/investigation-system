import React from 'react';

import CssBaseline from "@material-ui/core/CssBaseline";

import {
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

import themeConfig from "./config/theme";

import Routes from './routes'

const theme = createMuiTheme(themeConfig);

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
