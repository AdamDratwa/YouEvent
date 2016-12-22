import * as React from 'react';
import * as ReactDOM from 'react-dom'
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TableExampleSimple from "./index.jsx";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: cyan500
    }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
  <TableExampleSimple />
  </MuiThemeProvider>,
  document.getElementById('content')
);
