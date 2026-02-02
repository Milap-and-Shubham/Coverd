import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainTheme from "./styles/Theme";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Wrapped from "./pages/Wrapped";
import CustomCovers from "./pages/CustomCovers";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";

function App() {
    return (
        <ThemeProvider theme={MainTheme}>
            <CssBaseline></CssBaseline>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/your-wrapped" element={<Wrapped />} />
                    <Route path="/FAQ" element={<FAQ />} />
                    <Route
                        path="/custom-playlist-covers"
                        element={<CustomCovers />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
