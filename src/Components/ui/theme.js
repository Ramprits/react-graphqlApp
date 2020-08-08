import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";

export default createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: green[500],
    },
  },
});
