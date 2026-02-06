import { createTheme } from "@mui/material/styles";

//colours: main; 1a4d3a, secondary: 517266, complementary black: 0a0a0a

const MainTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1a4d3a",
        },
        secondary: {
            main: "#517266",
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
            fontFamily: "Raleway",
            textTransform: "none",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#0a0a0a",
                    },
                },
                outlined: {
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#0a0a0a",
                    },
                },
                text: {
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#0a0a0a",
                    },
                },
            },
        },
    },
});

export default MainTheme;
