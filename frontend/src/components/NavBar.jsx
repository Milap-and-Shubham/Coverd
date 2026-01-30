import { useState, useEffect, useRef } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Grid,
    Menu,
    MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const [shrink, setShrink] = useState(false);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 120) {
                setShrink(true);
            } else if (currentScrollY < 60) {
                setShrink(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleExploreClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleExploreClose = () => {
        setAnchorEl(null);
    };

    const handleHomeNavigation = (e) => {
        navigate("/");
    };

    const handleWrappedNavigation = (e) => {
        navigate("/your-wrapped");
    };

    const handleCustomCoverNavigation = (e) => {
        navigate("/custom-playlist-covers");
    };

    const handleAboutUsNavigation = (e) => {
        navigate("/about-us");
    };

    const handleContactNavigation = (e) => {
        navigate("/contact");
    };
    return (
        <AppBar
            position="sticky"
            top="0"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: shrink ? "50px" : "80px",
                transition: "all 1s ease",
                marginBottom: "20px",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Grid container sx={{ gap: "30px" }}>
                    <Box>
                        <Button
                            sx={{ color: "white" }}
                            onClick={handleHomeNavigation}
                        >
                            Home
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            sx={{ color: "white" }}
                            onClick={handleExploreClick}
                        >
                            Explore
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleExploreClose}
                        >
                            <MenuItem onClick={handleWrappedNavigation}>
                                Your wrapped
                            </MenuItem>
                            <MenuItem onClick={handleCustomCoverNavigation}>
                                Create customer playlist covers
                            </MenuItem>
                        </Menu>
                    </Box>
                </Grid>
                <Grid container sx={{ gap: "30px" }}>
                    <Box>
                        <Button
                            sx={{ color: "white" }}
                            onClick={handleAboutUsNavigation}
                        >
                            About Us
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            sx={{ color: "white" }}
                            onClick={handleContactNavigation}
                        >
                            Contact
                        </Button>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
