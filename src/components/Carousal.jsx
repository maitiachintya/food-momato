import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const images = [
    "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    "https://www.shutterstock.com/image-photo/classic-tasty-burger-on-wooden-600nw-2476088505.jpg",
    "https://i0.wp.com/colorfulrecipes.com/wp-content/uploads/2016/04/rainbow-fresh-chopped-salad-2.jpg?fit=1800%2C1200&ssl=1",
    "https://img.pikbest.com/origin/09/34/47/80bpIkbEsTxKg.jpg!w700wp",
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <img
                src={images[currentIndex]}
                alt={`carousel-img-${currentIndex}`}
                style={{
                    width: "100%",
                    height: "800px",
                    borderRadius: "10px",
                    transition: "transform 0.5s ease-in-out",
                }}
            />
            <IconButton
                onClick={nextImage}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                }}
            >
                <ArrowForward />
            </IconButton>
            <IconButton
                onClick={prevImage}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                }}
            >
                <ArrowBack />
            </IconButton>
        </Box>
    );
}

export default Carousel;
