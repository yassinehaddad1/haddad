import React from 'react';
import {
  Box,
  Container,
  Typography,
  Tab,
  Tabs,
  useTheme,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = [
  {
    name: 'Sports',
    channels: [
      'ESPN',
      'Sky Sports',
      'beIN Sports',
      'Fox Sports',
      'NBC Sports',
      'BT Sport',
      'EuroSport',
      'DAZN',
    ],
  },
  {
    name: 'Entertainment',
    channels: [
      'HBO',
      'Netflix',
      'Disney+',
      'AMC',
      'TNT',
      'FX',
      'USA Network',
      'BBC',
    ],
  },
  {
    name: 'News',
    channels: [
      'CNN',
      'BBC News',
      'Fox News',
      'MSNBC',
      'Al Jazeera',
      'Sky News',
      'Reuters',
      'Bloomberg',
    ],
  },
  {
    name: 'Movies',
    channels: [
      'TCM',
      'AMC Movies',
      'Cinemax',
      'Showtime',
      'Starz',
      'Film4',
      'Sony Movies',
      'Paramount',
    ],
  },
];

const Channels = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="channels"
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
            Popular Channels
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Browse through our extensive collection of channels across different categories.
          </Typography>
        </Box>

        <Box sx={{ width: '100%', bgcolor: 'transparent' }} data-aos="fade-up">
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            aria-label="channel categories"
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category.name} />
            ))}
          </Tabs>

          <Box sx={{ mt: 2 }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              style={{ padding: '20px 0 40px' }}
            >
              {categories[value].channels.map((channel, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      textAlign: 'center',
                      border: '1px solid rgba(255, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(255, 0, 0, 0.2)',
                        border: '1px solid rgba(255, 0, 0, 0.3)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        color: 'common.white',
                      }}
                    >
                      {channel}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Channels;
