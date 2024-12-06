import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slice/AuthSlice";
import {
    TextField,
    Button,
    Box,
    Typography,
    Paper,
    CircularProgress,
    IconButton,
    InputAdornment,
    Snackbar,
    Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";

function RegistrationPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [uniqueError, setUniqueError] = useState("");
    const [successMessage, setSuccessMessage] = useState(false); // Snackbar state

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, users } = useSelector((state) => state.users);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    const phoneRegex = /^\d{10}$/;
    const fullNameRegex = /^[A-Za-z ]+$/;

    const handleRegistration = (e) => {
        e.preventDefault();
        let isValid = true;
        setUniqueError("");

        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email.");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be 8-20 characters long, include one uppercase letter, one lowercase letter, one number, and one special character."
            );
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (phone && !phoneRegex.test(phone)) {
            setPhoneError("Phone number should be 10 digits.");
            isValid = false;
        } else {
            setPhoneError("");
        }

        if (!fullNameRegex.test(fullName)) {
            setFullNameError("Full name should only contain alphabets and spaces.");
            isValid = false;
        } else {
            setFullNameError("");
        }

        const emailExists = users?.some((user) => user.email === email);
        if (emailExists) {
            setUniqueError("This email is already registered. Please use another.");
            isValid = false;
        }

        if (isValid) {
            dispatch(registerUser({ email, password, phone, fullName }))
                .unwrap()
                .then(() => {
                    setSuccessMessage(true); // Show success message
                    setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
                })
                .catch((err) => {
                    console.error("Registration failed:", err);
                    setUniqueError("Something went wrong. Please try again.");
                });
        }
    };

    const handleCloseSnackbar = () => {
        setSuccessMessage(false);
    };

    return (
        <div className="registration-container">
            <Paper className="registration-paper">
                <Box className="registration-box">
                    <Typography variant="h5" className="registration-title">
                        Register to Order Your Favorite Meals!
                    </Typography>

                    <form onSubmit={handleRegistration}>
                        <TextField
                            label="Full Name"
                            type="text"
                            fullWidth
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="input-field"
                            error={!!fullNameError}
                            helperText={fullNameError}
                        />
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
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
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
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
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
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="submit-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <CircularProgress size={24} className="circular-progress" />
                            ) : (
                                "Register & Order Now"
                            )}
                        </Button>
                    </form>

                    {uniqueError && (
                        <Typography className="error-message">{uniqueError}</Typography>
                    )}

                    {error && (
                        <Typography className="error-message">{error}</Typography>
                    )}

                    <Typography className="login-link">
                        Already have an account?{" "}
                        <NavLink to="/login" className="login-link-text">
                            Login
                        </NavLink>
                    </Typography>
                </Box>
            </Paper>

            {/* Success Snackbar */}
            <Snackbar
                open={successMessage}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Registration Successful! Redirecting to Login Page...
                </Alert>
            </Snackbar>
        </div>
    );
}

export default RegistrationPage;
