import React from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import { Fastfood, DeliveryDining } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function CTASection() {
    return (
        <Box sx={{
            backgroundColor: "#FF6F61", // A warm, food-related color
            padding: "60px 20px",
            color: "white",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        }}>
            {/* Heading */}
            <Typography variant="h4" component="h2" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                Hungry? Order Your Favorite Meals Now!
            </Typography>

            {/* Subheading */}
            <Typography variant="h6" sx={{ marginBottom: "40px", fontWeight: "300", fontStyle: "italic" }}>
                Fresh, Delicious, and Delivered Right to Your Doorstep!
            </Typography>

            {/* Icons for extra flair */}
            <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: "40px" }}>
                <Grid item>
                    <Paper sx={{ padding: "20px", backgroundColor: "#fff", boxShadow: 3, borderRadius: "10px" }}>
                        <Fastfood sx={{ fontSize: "50px", color: "#FF6F61" }} />
                        <Typography variant="body1" sx={{ marginTop: "10px" }}>Delicious Meals</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper sx={{ padding: "20px", backgroundColor: "#fff", boxShadow: 3, borderRadius: "10px" }}>
                        <DeliveryDining sx={{ fontSize: "50px", color: "#FF6F61" }} />
                        <Typography variant="body1" sx={{ marginTop: "10px" }}>Fast Delivery</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* CTA Button */}
            <Link to="/login" style={{ textDecoration: "none" }}> {/* Link to Login Page */}
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        padding: "12px 40px",
                        fontSize: "18px",
                        backgroundColor: "#FF6F61",
                        "&:hover": { backgroundColor: "#D45746" },
                    }}
                >
                    Order Now & Enjoy
                </Button>
            </Link>
        </Box>
    );
}

export default CTASection;
