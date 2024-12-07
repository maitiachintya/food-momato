import React from "react";
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";

function CardComponent({ image, title, description, buttonText }) {
    return (
        <Card>
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">
                    {buttonText}
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;
