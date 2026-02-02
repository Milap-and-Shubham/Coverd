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
import CustomMenu from "../styles/CustomMenu";

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

    const handleFAQNavigation = (e) => {
        navigate("/FAQ");
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
                            onClick={handleHomeNavigation}
                            sx={{
                                color: "white",
                                "& .lift": {
                                    display: "inline-block",
                                    transition: "transform 200ms ease",
                                },
                                "&:hover .lift": {
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <span className="lift">Home</span>
                        </Button>
                    </Box>
                    <Box>
                    <Button
                            onClick={handleExploreClick}
                            sx={{
                                color: "white",
                                "& .lift": {
                                    display: "inline-block",
                                    transition: "transform 200ms ease",
                                },
                                "&:hover .lift": {
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <span className="lift">Explore</span>
                        </Button>
                        <CustomMenu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleExploreClose}
                            disableScrollLock={true}
                        >
                            <MenuItem onClick={handleWrappedNavigation}>
                                Your wrapped
                            </MenuItem>
                            <MenuItem onClick={handleCustomCoverNavigation}>
                                Custom playlist covers
                            </MenuItem>
                        </CustomMenu>
                    </Box>
                </Grid>
                <Grid container sx={{ gap: "30px" }}>
                    <Box>
                    <Button
                            onClick={handleAboutUsNavigation}
                            sx={{
                                color: "white",
                                "& .lift": {
                                    display: "inline-block",
                                    transition: "transform 200ms ease",
                                },
                                "&:hover .lift": {
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <span className="lift">About Us</span>
                        </Button>
                    </Box>
                    <Box>
                    <Button
                            onClick={handleContactNavigation}
                            sx={{
                                color: "white",
                                "& .lift": {
                                    display: "inline-block",
                                    transition: "transform 200ms ease",
                                },
                                "&:hover .lift": {
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <span className="lift">Contact</span>
                        </Button>
                    </Box>
                    <Box>
                    <Button
                            onClick={handleFAQNavigation}
                            sx={{
                                color: "white",
                                "& .lift": {
                                    display: "inline-block",
                                    transition: "transform 200ms ease",
                                },
                                "&:hover .lift": {
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <span className="lift">FAQ</span>
                        </Button>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
