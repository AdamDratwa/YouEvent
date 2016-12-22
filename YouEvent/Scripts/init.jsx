import * as React from 'react';
import * as ReactDOM from 'react-dom'
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TableExampleSimple from "./index.jsx";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#476471"
    }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
  <TableExampleSimple />
  </MuiThemeProvider>,
  document.getElementById('content')
);
