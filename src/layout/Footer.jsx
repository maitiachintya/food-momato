import React from 'react';
import { Container, Grid, Typography, Link, Box, TextField, Button } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube, Payment } from '@mui/icons-material';

const footerStyles = {
  backgroundColor: '#333', // Dark background for footer
  color: '#fff', // White text for contrast
  padding: '40px 0', // Padding for footer sections
  marginTop: '40px',
};

const footerLinkStyles = {
  color: '#fff',
  margin: '5px 0',
  display: 'block',
  '&:hover': {
    color: '#FF6347', // Red color on hover
  },
};

const footerIconStyles = {
  color: '#fff',
  marginRight: '10px',
  '&:hover': {
    color: '#FF6347', // Red color on hover
  },
};

function FoodOrderingFooter() {
  return (
    <footer style={footerStyles}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Section 1: Quick Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" style={footerLinkStyles}>Home</Link>
            <Link href="#" style={footerLinkStyles}>About Us</Link>
            <Link href="#" style={footerLinkStyles}>Contact</Link>
            <Link href="#" style={footerLinkStyles}>FAQ</Link>
          </Grid>

          {/* Section 2: Customer Support */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Customer Support
            </Typography>
            <Link href="#" style={footerLinkStyles}>Help Center</Link>
            <Link href="#" style={footerLinkStyles}>Track Order</Link>
            <Link href="#" style={footerLinkStyles}>Shipping Info</Link>
            <Link href="#" style={footerLinkStyles}>Return Policy</Link>
          </Grid>

          {/* Section 3: Social Media Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" alignItems="center">
              <Facebook style={footerIconStyles} />
              <Instagram style={footerIconStyles} />
              <Twitter style={footerIconStyles} />
              <YouTube style={footerIconStyles} />
            </Box>
          </Grid>

          {/* Section 4: Payment Methods */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Payment Methods
            </Typography>
            <Box display="flex" flexDirection="column">
              <Payment style={{ ...footerIconStyles, marginBottom: '5px' }} />
              <Typography variant="body2" color="inherit">
                Visa, MasterCard, PayPal, Google Pay, Apple Pay
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Section 5: Newsletter Signup */}
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '40px' }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Box display="flex" alignItems="center">
              <TextField
                label="Enter your email"
                variant="outlined"
                size="small"
                fullWidth
                style={{ marginRight: '10px' }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
          <Grid item>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} FoodieApp. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default FoodOrderingFooter;
