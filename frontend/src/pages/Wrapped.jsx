import { Box, Button } from "@mui/material";
import NavBar from "../components/NavBar.jsx";

function Wrapped() {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <NavBar></NavBar>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100%", marginTop: "30px" }}
            >
                <Box>
                    Get your spotify listening patterns anytime, anywhere using
                    Coverd
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: 4,
                        padding: 6,
                        paddingY: 1.5,
                        borderRadius: "5px",
                        fontWeight: 600,
                        backgroundColor: "rgba(16, 16, 15, 0.64)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(6px)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.14)",
                            transform: "translateY(-1px)",
                        },
                    }}
                >
                    Try it out
                </Button>
            </Box>
        </Box>
    );
}

export default Wrapped;
