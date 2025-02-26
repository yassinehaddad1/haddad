import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';

const contactMethods = [
  {
    icon: EmailIcon,
    title: 'Email Us',
    description: 'Send us an email anytime for non-urgent inquiries.',
    action: 'support@iptvpro.com',
    buttonText: 'Send Email',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    description: 'Call us during business hours for immediate assistance.',
    action: '+1 (555) 123-4567',
    buttonText: 'Call Now',
  },
  {
    icon: ChatIcon,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time.',
    action: 'Available 24/7',
    buttonText: 'Start Chat',
  },
];

const Contact = () => {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h2"
            color="text.primary"
            sx={{ mb: 2 }}
            data-aos="fade-up"
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have questions? We're here to help. Contact us through any of these channels.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box sx={{ mb: 2 }}>
                    <method.icon
                      sx={{ fontSize: 48, color: 'secondary.main' }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {method.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {method.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {method.action}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Contact Form */}
          <Grid item xs={12}>
            <Card
              data-aos="fade-up"
              data-aos-delay="500"
              sx={{
                mt: 4,
                p: { xs: 2, md: 4 },
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      required
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{ minWidth: 200 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
