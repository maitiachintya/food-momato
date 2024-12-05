import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CardComponent from "../components/Carousal";

// Sample data for cards
const cardsData = [
    {
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        title: "Delicious Pizza",
        description: "A mouth-watering pizza with fresh ingredients.",
        buttonText: "Order Now"
    },
    {
        image: "https://www.shutterstock.com/image-photo/classic-tasty-burger-on-wooden-600nw-2476088505.jpg",
        title: "Tasty Burger",
        description: "Enjoy a tasty burger with crispy fries.",
        buttonText: "Order Now"
    },
    {
        image: "https://i0.wp.com/colorfulrecipes.com/wp-content/uploads/2016/04/rainbow-fresh-chopped-salad-2.jpg?fit=1800%2C1200&ssl=1",
        title: "Fresh Salad",
        description: "A healthy salad with fresh veggies.",
        buttonText: "Order Now"
    },
    {
        image: "https://img.pikbest.com/origin/09/34/47/80bpIkbEsTxKg.jpg!w700wp",
        title: "Grilled Steak",
        description: "Juicy grilled steak with a side of veggies.",
        buttonText: "Order Now"
    },
];

function CardSection() {
    return (
        <Box sx={{ padding: "40px 20px" }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: "center", marginBottom: "30px", fontWeight: "bold" }}>
                Our Special Dishes
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {cardsData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <CardComponent
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            buttonText={card.buttonText}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CardSection;
