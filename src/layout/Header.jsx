import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

export default function FoodOrderingNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [cartCount, setCartCount] = useState(0); // Cart count state
    const navigate = useNavigate();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/orders?search=${searchQuery}`);
        }
    };

    // Increment and decrement cart count functions
    const handleIncrement = () => {
        setCartCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const menuId = "primary-search-account-menu";

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#ff5722" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        FOODIES
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <Button color="inherit" sx={{ fontWeight: "bold" }}>
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                Home
                            </Link>
                        </Button>
                        <Button color="inherit" sx={{ fontWeight: "bold" }}>
                            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                                About
                            </Link>
                        </Button>
                        <Button color="inherit" sx={{ fontWeight: "bold" }}>
                            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                                Contact
                            </Link>
                        </Button>
                        <Button color="inherit" sx={{ fontWeight: "bold" }}>
                            <Link to="/service" style={{ textDecoration: "none", color: "inherit" }}>
                                Services
                            </Link>
                        </Button>
                    </Box>
                    <form onSubmit={handleSearch}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search food…"
                                inputProps={{ "aria-label": "search" }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </Search>
                    </form>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Button color="inherit" onClick={handleDecrement}>
                            -
                        </Button>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={cartCount} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Button color="inherit" onClick={handleIncrement}>
                            +
                        </Button>
                    </Box>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}
