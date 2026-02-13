import { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import NavBar from "../components/NavBar.jsx";

function Home() {
    const [dialogOpen, setDialogOpen] = useState(true);
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <NavBar></NavBar>
            <Box sx={{ height: "100%" }}>
                HOME
                <Dialog open={dialogOpen} onClose={() => {}}>
                    <Box>
                        <DialogTitle>
                            Terms & Conditions skeleton code, to fix and move
                            later
                        </DialogTitle>
                        <DialogContent>
                            <Typography>...terms text...</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="contained"
                                onClick={() => setDialogOpen(false)}
                            >
                                Agree
                            </Button>
                        </DialogActions>
                    </Box>
                </Dialog>
            </Box>
        </Box>
    );
}

export default Home;
