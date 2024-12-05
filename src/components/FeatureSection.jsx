import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

const features = [
    { title: "Fast Delivery", description: "Get your products delivered quickly and efficiently." },
    { title: "24/7 Support", description: "We are always here to help you, any time of the day." },
    { title: "Quality Products", description: "We offer the highest quality products in the market." },
];

function FeatureSection() {
    return (
        <Box sx={{ padding: "40px 20px" }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: "center", marginBottom: "30px" }}>
                Our Features
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Paper sx={{ padding: "20px", textAlign: "center", boxShadow: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {feature.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default FeatureSection;
