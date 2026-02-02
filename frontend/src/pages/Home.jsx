import { useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import NavBar from "../components/NavBar.jsx";
//import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";


function Home() {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <NavBar></NavBar>
            <Box sx={{ height: "100%" }}>
                HOME
                <Button onClick={() => setOpen(true)}>Show Terms</Button>

                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Terms & Conditions skeleton code, to fix and move later</DialogTitle>
                    <DialogContent>
                        <Typography>...terms text...</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}

export default Home;
