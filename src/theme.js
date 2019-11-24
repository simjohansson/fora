import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6a7a6b',
    },
    secondary: {
      main: '#7a6a79',
    },
    error: {
      main: "#FF0000",
    },
    background: {
      paper: '#fff',
      default:"rgb(231, 239, 232)"
    },
    
  },
  typography: {
    fontFamily: "Tangerine",
    body1: {
      fontFamily: "Arial"
    },
    h1: {
      paddingTop: '1rem'
    }
  },
});

export default theme;