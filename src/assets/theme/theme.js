import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#175cd3",
      light: "#104093",
      dark: "#457cdb",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#101828",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#4aa742",
    },
  },
});

export default theme;
