import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../slice/AuthSlice"; 
import { Box, Button, Typography, Paper, Avatar, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
    const user = useSelector((state) => state.users.user); 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 

    const handleLogout = () => {
        dispatch(logoutUser()); 
        navigate("/login"); 
    };

    return (
        <div
            style={{
                height: "100vh",
                backgroundColor: "#f0f0f0",
                padding: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url('https://static.toiimg.com/thumb/msid-100825388,imgsize-1512741,width-900,height-1200,resizemode-6/100825388.jpg')", // Replace with your image URL
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                backgroundAttachment: "fixed", 
            }}
        >
            <Paper
                sx={{
                    padding: "30px",
                    maxWidth: "600px",
                    width: "100%",
                    boxShadow: 3,
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Avatar
                        sx={{
                            width: 100,
                            height: 100,
                            marginBottom: 2,
                            margin: "0 auto",
                            backgroundColor: "#FF6F61",
                        }}
                        alt={user?.fullName}
                        src={user?.profilePicture} 
                    />
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FF6F61", marginBottom: 3 }}>
                        Welcome, {user?.fullName}! Enjoy and having fun
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: 3 }}>
                        Email: {user?.email}
                    </Typography>

                    <Divider sx={{ marginBottom: 3 }} />
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        Quick Actions:
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: "#FF6F61",
                                "&:hover": { backgroundColor: "#D45746" },
                            }}
                            onClick={() => navigate("/orders")}
                        >
                            View Orders
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleLogout}
                            sx={{
                                padding: "10px 20px",
                                fontSize: "16px",
                                borderColor: "#FF6F61",
                                color: "#FF6F61",
                                "&:hover": {
                                    borderColor: "#D45746",
                                    color: "#D45746",
                                },
                            }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </div>
    );
}

export default DashboardPage;
