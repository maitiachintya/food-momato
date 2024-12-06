import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";

// Food items data
const foodItems = [
    {
        id: 2,
        image: "https://www.shutterstock.com/image-photo/classic-tasty-burger-on-wooden-600nw-2476088505.jpg",
        title: "Tasty Burger",
        description: "A classic burger served with crispy fries.",
        buttonText: "Order Now",
    },
    {
        id: 3,
        image: "https://i0.wp.com/colorfulrecipes.com/wp-content/uploads/2016/04/rainbow-fresh-chopped-salad-2.jpg?fit=1800%2C1200&ssl=1",
        title: "Fresh Salad",
        description: "A healthy salad made with fresh vegetables and herbs.",
        buttonText: "Order Now",
    },
    {
        id: 4,
        image: "https://img.pikbest.com/origin/09/34/47/80bpIkbEsTxKg.jpg!w700wp",
        title: "Grilled Steak",
        description: "Juicy steak grilled to perfection with a side of veggies.",
        buttonText: "Order Now",
    },
    {
        id: 7,
        image: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
        title: "Pasta Alfredo",
        description: "Creamy Alfredo pasta with a hint of garlic and parsley.",
        buttonText: "Order Now",
    },
];

function FoodItemsPage() {
    return (
        <Box sx={{ padding: "40px 20px" }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    textAlign: "center",
                    marginBottom: "30px",
                    fontWeight: "bold",
                }}
            >
                Explore Our Menu
            </Typography>
            <Grid container spacing={4}>
                {foodItems.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ height: "100%" }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={() => alert(`${item.title} added to cart!`)}
                                >
                                    {item.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default FoodItemsPage;
