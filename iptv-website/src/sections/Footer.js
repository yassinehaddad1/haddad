import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LiveTvIcon sx={{ fontSize: 32, mr: 1, color: 'primary.main' }} />
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
                IPTV Pro
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              Your premium IPTV service provider offering thousands of channels and VOD content
              with unmatched quality and reliability.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {['Home', 'Features', 'Channels', 'Pricing', 'FAQ'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {[
                'Help Center',
                'Contact Us',
                'Terms of Service',
                'Privacy Policy',
                'Refund Policy',
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: support@iptvpro.com
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Streaming Street
              <br />
              Digital City, DC 12345
              <br />
              United States
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} IPTV Pro. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
