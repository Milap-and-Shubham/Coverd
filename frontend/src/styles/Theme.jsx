import { createTheme } from "@mui/material/styles";

//colours: main; 1a4d3a, secondary: 517266, complementary black: 161918

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
            fontFamily: "Raleway",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    "&:hover": {
                        backgroundColor: "#517266",
                    },
                },
                outlined: {
                    "&:hover": {
                        backgroundColor: "#517266",
                    },
                },
                text: {
                    "&:hover": {
                        backgroundColor: "#517266",
                    },
                },
            },
        },
    },
});

export default MainTheme;