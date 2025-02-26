import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';

const features = [
  {
    title: 'Live Sports Events',
    description: 'Watch UEFA Champions League, Premier League, La Liga, NBA, and other major sports events live in HD quality.',
    icon: SportsSoccerIcon,
  },
  {
    title: 'Multi-Sports Coverage',
    description: 'Access to basketball, tennis, F1, UFC, and more. Never miss your favorite sports events.',
    icon: SportsBasketballIcon,
  },
  {
    title: 'Live TV Channels',
    description: 'Stream sports channels including ESPN, Sky Sports, beIN Sports, and many more.',
    icon: LiveTvIcon,
  },
  {
    title: '4K Ultra HD Quality',
    description: 'Experience sports like never before with crystal clear 4K streaming quality.',
    icon: HighQualityIcon,
  },
  {
    title: 'Multi-device Support',
    description: 'Watch on your Smart TV, phone, tablet, or computer. Perfect for sports on the go.',
    icon: DevicesIcon,
  },
  {
    title: 'Low Latency Streaming',
    description: 'Minimal delay in live sports broadcasts. Stay ahead of the game.',
    icon: SpeedIcon,
  },
];

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(255,0,0,0.1) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h2"
            color="common.white"
            sx={{ mb: 2 }}
            data-aos="fade-up"
          >
            Premium Sports Coverage
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experience the thrill of live sports with our comprehensive coverage and premium streaming features.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 0, 0, 0.3)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    <feature.icon
                      sx={{
                        fontSize: 48,
                        color: 'primary.main',
                      }}
                    />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    color="common.white"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
