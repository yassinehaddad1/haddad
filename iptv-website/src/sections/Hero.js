import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/201809/en_us/original_horizontal_2/s201809170068324)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.6,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)',
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Fade in timeout={1000}>
              <Box>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      letterSpacing: 2,
                      mb: 2,
                      display: 'block',
                    }}
                  >
                    WELCOME TO THE FUTURE OF TV
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: 'common.white',
                      letterSpacing: -0.5,
                      lineHeight: 1.2,
                      mb: 3,
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                    }}
                  >
                    Premium IPTV
                    <Box 
                      component="span" 
                      sx={{ 
                        color: 'primary.main',
                        display: 'block',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                      }}
                    >
                      Entertainment
                    </Box>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'grey.400',
                      maxWidth: 500,
                      fontWeight: 400,
                      letterSpacing: 0.5,
                      lineHeight: 1.8,
                    }}
                  >
                    Experience crystal-clear streaming with over 8000+ channels in stunning 4K quality.
                    Your premium entertainment solution.
                  </Typography>
                </Box>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={3}
                  sx={{ mb: 8 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<LiveTvIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      fontWeight: 600,
                      letterSpacing: 1,
                      borderRadius: '4px',
                      boxShadow: '0 8px 16px rgba(255, 0, 0, 0.2)',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 20px rgba(255, 0, 0, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Start Watching Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      color: 'common.white',
                      borderColor: 'grey.700',
                      fontWeight: 600,
                      letterSpacing: 1,
                      borderRadius: '4px',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'rgba(255, 0, 0, 0.1)',
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>

                <Grid container spacing={4}>
                  {[
                    { number: '8000+', label: 'Live Channels' },
                    { number: '4K UHD', label: 'Quality' },
                    { number: '99.9%', label: 'Uptime Guaranteed' },
                  ].map((stat, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <Box
                        sx={{
                          p: 3,
                          borderLeft: index !== 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            mb: 1,
                            lineHeight: 1,
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'grey.500',
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
