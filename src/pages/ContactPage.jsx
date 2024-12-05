import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box, Paper, Divider } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { styled } from '@mui/system';

// Styling the container to include the background image
const BackgroundContainer = styled('div')({
    backgroundImage: 'url("https://img.freepik.com/premium-photo/delicious-details-closeup-food-table-with-purpose_950053-1523.jpg")',  // Replace with your image URL
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

const ContactPage = () => {
    return (
        <BackgroundContainer>
            {/* Overlay to darken the background image for better contrast */}
            <Overlay />
            <Container
                maxWidth="lg"
                style={{ zIndex: 2, position: 'relative', padding: '40px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '16px' }}
            >
                {/* Contact Form Section */}
                <Paper
                    elevation={12}
                    style={{
                        padding: '40px',
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                    }}
                    className="contact-form"
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
                        Get in Touch with Us
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
                        We would love to hear from you. Whether you have a question, feedback, or want to inquire about an order,
                        we’re here to help.
                    </Typography>

                    <form>
                        <Grid container spacing={3}>
                            {/* Full Name */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    style={{
                                        background: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                        transition: '0.3s ease',
                                    }}
                                />
                            </Grid>

                            {/* Email */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    type="email"
                                    style={{
                                        background: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                        transition: '0.3s ease',
                                    }}
                                />
                            </Grid>

                            {/* Message */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    multiline
                                    rows={4}
                                    style={{
                                        background: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                        transition: '0.3s ease',
                                    }}
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        type="submit"
                                        style={{
                                            padding: '12px 30px',
                                            fontSize: '16px',
                                            borderRadius: '30px',
                                            textTransform: 'none',
                                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                                            transition: '0.3s ease',
                                        }}
                                        className="hover-button"
                                    >
                                        Send Message
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>

                <Divider style={{ margin: '40px 0', backgroundColor: '#ddd' }} />

                {/* Contact Information Section */}
                <Box mt={5} textAlign="center" style={{ backgroundColor: '#ffebee', padding: '40px 0' }}>
                    <Typography
                        variant="h4"
                        color="primary"
                        style={{
                            fontWeight: 700,
                            fontSize: '32px',
                            marginBottom: '20px',
                            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography variant="body1" paragraph style={{ fontSize: '18px', fontWeight: 400 }}>
                        Our team is available to assist you with any inquiries you may have, whether it's about placing an order,
                        or any feedback you want to share!
                    </Typography>

                    <Box display="flex" justifyContent="center" spacing={4}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            style={{
                                width: '250px',
                                transition: 'transform 0.3s ease',
                                padding: '20px',
                                borderRadius: '12px',
                                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}
                            className="contact-box"
                        >
                            <Phone color="primary" style={{ fontSize: '3.5em', marginBottom: '15px' }} />
                            <Typography variant="h6" color="textPrimary" style={{ fontWeight: 600 }}>
                                Call Us
                            </Typography>
                            <Typography variant="body1">📞 (123) 456-7890</Typography>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            style={{
                                width: '250px',
                                transition: 'transform 0.3s ease',
                                padding: '20px',
                                borderRadius: '12px',
                                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}
                            className="contact-box"
                        >
                            <Email color="primary" style={{ fontSize: '3.5em', marginBottom: '15px' }} />
                            <Typography variant="h6" color="textPrimary" style={{ fontWeight: 600 }}>
                                Email Us
                            </Typography>
                            <Typography variant="body1">📧 support@foodordering.com</Typography>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            style={{
                                width: '250px',
                                transition: 'transform 0.3s ease',
                                padding: '20px',
                                borderRadius: '12px',
                                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}
                            className="contact-box"
                        >
                            <LocationOn color="primary" style={{ fontSize: '3.5em', marginBottom: '15px' }} />
                            <Typography variant="h6" color="textPrimary" style={{ fontWeight: 600 }}>
                                Visit Us
                            </Typography>
                            <Typography variant="body1">📍 123 Food Street, Tasty City, FL</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </BackgroundContainer>
    );
};

export default ContactPage;
