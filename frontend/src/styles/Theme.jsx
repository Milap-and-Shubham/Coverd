import { createTheme } from "@mui/material/styles";

const MainTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1a4d3a",
        },
        secondary: {
            main: "#2a2d2a",
        },
        background: {
            default: "#1a4d3a",
            paper: "#ffffff",
        },
        divider: "rgba(0,0,0,0.19)",
    },
    typography: {
        fontFamily: "Raleway",
        button: {
            fontFamily: 'Raleway',
        }
    },
});

export default MainTheme