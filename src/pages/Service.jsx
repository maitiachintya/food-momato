import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Styled components
const ServiceCard = styled(Card)({
    maxWidth: 345,
    marginBottom: '20px',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    },
});

const ServicePage = () => {
    const services = [
        {
            title: 'Fast Delivery',
            description: 'Get your favorite food delivered to your doorstep in no time.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH97HFJ1S1Wy5f8CeyhxyoxbQhCJE8Z7_PqQ&s',
            link: '/fast-delivery',
        },
        {
            title: 'Fresh Ingredients',
            description: 'We use the freshest ingredients to prepare your meals.',
            image: 'https://www.seriouseats.com/thmb/749OYF1-4OLtNfTk2-apVANS8UU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__drinks.seriouseats.com__images__2014__01__20140110-easy-two-ingredients-juice-recipe-1-6b8dda4aeacb4a7aa06514d0e690db93.jpg',
            link: '/fresh-ingredients',
        },
        {
            title: 'Affordable Prices',
            description: 'Enjoy great meals at prices that won\'t break the bank.',
            image: 'https://media.istockphoto.com/id/1465590479/photo/symbol-for-selecting-a-product-with-a-high-quality-insread-of-a-low-price-wooden-cubes-form.jpg?s=612x612&w=0&k=20&c=TfMiktfmPb70pTffQxZrAYOPeA77zw-10Jmx9qXIVBg=',
            link: '/affordable-prices',
        },
    ];

    return (
        <Container maxWidth="lg" style={{ marginTop: '50px' }}>
            <Typography variant="h3" align="center" style={{ marginBottom: '40px' }}>
                Our Services
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ServiceCard>
                            <CardMedia
                                component="img"
                                height="200"
                                image={service.image}
                                alt={service.title}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {service.description}
                                </Typography>
                            </CardContent>
                            <Box textAlign="center" style={{ padding: '10px' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to={service.link}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </ServiceCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ServicePage;
