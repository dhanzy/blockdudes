import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import Helvetica from "../assets/fonts/Helvetica-Bold-Font.ttf";

let theme = createTheme({
  typography: {
    fontFamily: ["Roboto Slab", "serif"].join(","),
    h1: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      fontWeight: 600,
    },
    h2: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      fontWeight: 500,
    },
    h3: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      fontWeight: 500,
    },
    h4: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Roboto Slab, serif",
      fontSize: "1rem",
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#010101",
    },
    primary: {
      main: "#00FFED",
      dark: "#37989D",
    },
    secondary: {
      main: "#F6416C",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
