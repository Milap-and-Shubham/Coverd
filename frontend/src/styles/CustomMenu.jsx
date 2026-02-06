import { Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        backgroundColor: "#1a4d3a",
        color: "#fff",
        borderRadius: 5,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
    },
    "& .MuiMenu-list": {
        padding: 5,
    },
    "& .MuiMenuItem-root": {
        padding: "8px",
        borderRadius: 5,
        margin: 0,
        fontSize: 12,
        "&:hover": {
            backgroundColor: "#0a0a0a",
        },
    },
}));

export default CustomMenu;
