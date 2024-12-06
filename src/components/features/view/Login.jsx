import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slice/AuthSlice"; // Adjust the path to the slice
import {
    TextField,
    Button,
    Box,
    Typography,
    Paper,
    IconButton,
    InputAdornment,
    Snackbar,
    Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Fastfood, Visibility, VisibilityOff } from "@mui/icons-material";
import "./SignIn.css"; // Import the external CSS file

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.users);

    // Regex patterns for stricter validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;<>?/~`]).{8,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    useEffect(() => {
        if (user) {
            setOpenSnackbar(true); // Show the success Snackbar
            setTimeout(() => {
                navigate("/dashboard"); // Redirect after a delay
            }, 2000);
        }
    }, [user, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        let isValid = true;

        // Email validation
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email (e.g., example@mail.com).");
            isValid = false;
        } else {
            setEmailError("");
        }

        // Password validation
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters, include at least one letter, one number, and one special character."
            );
            isValid = false;
        } else {
            setPasswordError("");
        }

        // Phone validation
        if (phone && !phoneRegex.test(phone)) {
            setPhoneError("Phone number must be 10 digits.");
            isValid = false;
        } else {
            setPhoneError("");
        }

        // If all validations pass, dispatch the login
        if (isValid) {
            dispatch(loginUser({ email, password, phone }));
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="login-page">
            <Paper className="login-paper">
                <Box className="login-box">
                    {/* Food icon and heading */}
                    <Fastfood className="food-icon" />
                    <Typography className="login-heading" style={{ fontSize: "36px" }}>
                        Login to Order Your Favorite Meals!
                    </Typography>

                    <form onSubmit={handleLogin}>
                        {/* Email Field */}
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            error={!!emailError}
                            helperText={emailError}
                        />

                        {/* Password Field */}
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"} // Toggle between text and password
                            fullWidth
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            error={!!passwordError}
                            helperText={passwordError}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={togglePasswordVisibility}
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Phone Field */}
                        <TextField
                            label="Phone (Optional)"
                            type="text"
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input-field"
                            error={!!phoneError}
                            helperText={phoneError}
                        />

                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="submit-button"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Logging In..." : "Login & Order Now"}
                        </Button>
                    </form>

                    {/* Error Message */}
                    {error && (
                        <Typography className="error-message" align="center">
                            {error}
                        </Typography>
                    )}

                    <Typography className="signup-link" align="center">
                        Don't have an account?{" "}
                        <Link to="/signup" className="signup-link-text">
                            Sign Up
                        </Link>
                    </Typography>
                </Box>
            </Paper>

            {/* Success Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
                    Login Successful! Redirecting...
                </Alert>
            </Snackbar>
        </div>
    );
}

export default LoginPage;
