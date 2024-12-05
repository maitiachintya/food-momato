import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styling the container to include the background image
const BackgroundContainer = styled('div')({
    backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-colorful-background-with-gradient_1150-6801.jpg")',  // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '80px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
});

const Overlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to enhance text visibility
    zIndex: 1,
});

const AboutPage = () => {
    return (
        <BackgroundContainer>
            {/* Overlay to darken the background image for better contrast */}
            <Overlay />
            <Container
                maxWidth="lg"
                style={{ zIndex: 2, position: 'relative', padding: '40px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '16px' }}
            >
                {/* About Section */}
                <Paper
                    elevation={12}
                    style={{
                        padding: '40px',
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography
                        variant="h3"
                        align="center"
                        color="primary"
                        style={{
                            fontWeight: 700,
                            fontSize: '36px',
                            marginBottom: '20px',
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        style={{
                            fontWeight: 300,
                            marginBottom: '40px',
                            fontSize: '16px',
                            color: '#666',
                        }}
                    >
                        We are dedicated to bringing you the finest quality food, made with passion and love.
                        Our team works tirelessly to create culinary masterpieces that cater to all tastes and preferences.
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    backgroundColor: '#f8f8f8',
                                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    style={{
                                        fontWeight: 600,
                                        marginBottom: '15px',
                                    }}
                                >
                                    Our Vision
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    style={{
                                        fontWeight: 300,
                                        color: '#555',
                                    }}
                                >
                                    To become the leading food service provider known for our commitment to quality,
                                    sustainability, and innovation in the food industry.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    backgroundColor: '#f8f8f8',
                                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    style={{
                                        fontWeight: 600,
                                        marginBottom: '15px',
                                    }}
                                >
                                    Our Mission
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    style={{
                                        fontWeight: 300,
                                        color: '#555',
                                    }}
                                >
                                    To provide a memorable dining experience for each customer through our quality ingredients,
                                    exceptional customer service, and a passion for culinary creativity.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </BackgroundContainer>
    );
};

export default AboutPage;
