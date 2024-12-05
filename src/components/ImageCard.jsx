import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function CardComponent({ image, title, description, buttonText }) {
    return (
        <Card sx={{ maxWidth: 345, margin: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                sx={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                }}
            />
            <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Button size="small" sx={{ marginLeft: "10px" }} color="primary">
                {buttonText}
            </Button>
        </Card>
    );
}

export default CardComponent;
