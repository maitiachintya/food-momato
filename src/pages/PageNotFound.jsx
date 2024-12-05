import React from 'react';
import { Container, Typography, Button, Box, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import { styled } from '@mui/system';

// Styled components for the 404 page
const AnimatedBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    position: 'relative',
    padding: '20px',
    '@media (max-width: 600px)': {
        height: 'auto', // Adjust height for smaller screens
        padding: '10px',
    },
});

// Keyframes for waiter animation (walking animation)
const waiterAnimation = `
@keyframes waiterWalk {
  0% {
    transform: translateX(-100px) rotate(0deg);
  }
  50% {
    transform: translateX(0) rotate(10deg);
  }
  100% {
    transform: translateX(100px) rotate(0deg);
  }
}`;

// Keyframes for food tray animation (bouncing effect)
const foodAnimation = `
@keyframes foodBounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}`;

// Keyframes for card bounce animation
const cardBounce = `
@keyframes cardBounce {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}`;

const PageNotFound = () => {
    return (
        <>
            <style>{waiterAnimation}</style> {/* Add waiter animation */}
            <style>{foodAnimation}</style> {/* Add food tray bounce effect */}
            <style>{cardBounce}</style> {/* Add card bounce effect */}

            <Container
                maxWidth="sm"
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f8f8f8',
                    padding: '40px',
                    '@media (max-width: 600px)': {
                        padding: '20px', // Reduce padding on small screens
                    },
                }}
            >
                <Box
                    style={{
                        padding: '30px',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        maxWidth: '600px',
                        width: '100%',
                        '@media (max-width: 600px)': {
                            padding: '20px', // Reduce padding on mobile screens
                        },
                    }}
                >
                    <AnimatedBox>
                        {/* Waiter Animation */}
                        <Box
                            style={{
                                fontSize: '48px',
                                fontWeight: 'bold',
                                animation: 'waiterWalk 4s linear infinite',
                                '@media (max-width: 600px)': {
                                    fontSize: '32px', // Adjust font size on small screens
                                },
                            }}
                        >
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                {/* Cartoon Waiter */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50px',
                                        left: '20px',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: '#f39c12',
                                    }}
                                ></div>
                                {/* Cartoon Tray with Food */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '30px',
                                        left: '80px',
                                        width: '100px',
                                        height: '20px',
                                        backgroundColor: '#e74c3c',
                                        borderRadius: '5px',
                                        animation: 'foodBounce 1s infinite',
                                    }}
                                ></div>
                            </div>
                        </Box>

                        <Typography
                            variant="h3"
                            style={{
                                fontWeight: 700,
                                color: '#e53946',
                                marginTop: '20px',
                                '@media (max-width: 600px)': {
                                    fontSize: '36px', // Adjust font size on small screens
                                },
                            }}
                        >
                            404
                        </Typography>
                        <Typography
                            variant="h5"
                            style={{
                                fontWeight: 400,
                                color: '#666',
                                marginBottom: '20px',
                                '@media (max-width: 600px)': {
                                    fontSize: '18px', // Adjust font size on small screens
                                },
                            }}
                        >
                            Oops! The page you're looking for is not available.
                        </Typography>

                        {/* Animated Card */}
                        <Card
                            style={{
                                padding: '20px',
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                animation: 'cardBounce 0.5s ease-out forwards',
                                marginBottom: '30px',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    style={{
                                        fontWeight: 600,
                                        color: '#333',
                                    }}
                                >
                                    We can't find that page, but here's a menu to get you back on track!
                                </Typography>
                            </CardContent>
                        </Card>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            component={Link}
                            to="/"
                            style={{
                                textDecoration: 'none',
                                padding: '10px 30px',
                                fontSize: '16px',
                                '@media (max-width: 600px)': {
                                    padding: '8px 20px', // Adjust padding on mobile
                                    fontSize: '14px', // Adjust font size on mobile
                                },
                            }}
                        >
                            Go Back to Home
                        </Button>
                    </AnimatedBox>
                </Box>
            </Container>
        </>
    );
};

export default PageNotFound;
