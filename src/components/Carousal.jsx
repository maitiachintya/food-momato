import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

// Array of image URLs
const images = [
    "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    "https://www.shutterstock.com/image-photo/classic-tasty-burger-on-wooden-600nw-2476088505.jpg",
    "https://i0.wp.com/colorfulrecipes.com/wp-content/uploads/2016/04/rainbow-fresh-chopped-salad-2.jpg?fit=1800%2C1200&ssl=1",
    "https://img.pikbest.com/origin/09/34/47/80bpIkbEsTxKg.jpg!w700wp",
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle Next Image
    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handle Previous Image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Automatically move to the next image every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000); // Change the image every 3 seconds

        // Clear the interval when the component is unmounted or when the interval changes
        return () => clearInterval(intervalId);
    }, [currentIndex]); // The effect runs when `currentIndex` changes

    return (
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
            {/* Carousel Image */}
            <img
                src={images[currentIndex]}
                alt={`carousel-img-${currentIndex}`}
                style={{
                    width: "100%",
                    height: "30%",
                    borderRadius: "10px",
                    transition: "transform 0.5s ease-in-out",
                }}
            />

            {/* Next Button */}
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

            {/* Previous Button */}
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

            {/* Carousel Caption */}
            <Typography
                variant="h5"
                sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    color: "white",
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                }}
            >
                {/* {`Slide ${currentIndex + 1}`} */}
            </Typography>
        </Box>
    );
}

export default Carousel;
