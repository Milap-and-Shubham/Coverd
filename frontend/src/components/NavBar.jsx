import { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Button, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";


function NavBar() {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <AppBar position="sticky" top="0" 
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            height: shrink ? '50px':"80px",
            transition:'all 0.2s ease'

        }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Grid container sx={{ gap: "30px" }}>
                    <Box>
                        <Button sx={{ color: "white" }}>Home</Button>
                    </Box>
                    <Box>
                        <Button sx={{ color: "white" }}>Explore</Button>
                    </Box>
                </Grid>
                <Grid container sx={{ gap: "30px" }}>
                    <Box>
                        <Button sx={{ color: "white" }}>About Us</Button>
                    </Box>
                    <Box>
                        <Button sx={{ color: "white" }}>Contact</Button>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
