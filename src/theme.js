import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#5E33BF" },
    secondary: { main: "#F44336" },        
    success:   { main: "#19B394" },
    warning:   { main: "#F0A21C" },
    info:      { main: "#2F65E0" },
    background:{ default: "#fff" }
  },
  typography: {
    fontFamily: ['Inter','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial','sans-serif'].join(','),
    h2: { fontWeight: 800, letterSpacing: 0.3 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 }
  },
  shape: { borderRadius: 14 },
});
export default theme;
