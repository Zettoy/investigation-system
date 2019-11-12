import React from 'react';

import {
  CssBaseline,
  useMediaQuery
} from "@material-ui/core";

import {
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

import themeConfig from "./config/theme";

import Routes from './routes'

const theme = createMuiTheme(themeConfig.theme);

function App() {
  themeConfig.link["&:hover"] = {
    color: theme.palette.text.primary
  };

  themeConfig.xs = useMediaQuery(theme.breakpoints.down('sm')) ? 11 : 9;

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
