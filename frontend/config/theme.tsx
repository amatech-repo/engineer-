import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
      light: "#fff",
    },
    secondary: {
      main: "#fff",
      dark: "#333",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
export default theme;
