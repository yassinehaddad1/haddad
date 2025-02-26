import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is IPTV and how does it work?',
    answer: 'IPTV (Internet Protocol Television) is a service that delivers TV content over the internet rather than through traditional satellite or cable formats. It allows you to stream your favorite channels and content directly to your devices through an internet connection.',
  },
  {
    question: 'What devices can I use to watch?',
    answer: 'Our IPTV service is compatible with a wide range of devices including Smart TVs, Android TV boxes, Amazon Fire TV Stick, smartphones, tablets, and computers. You can watch on any device that supports our IPTV app or M3U playlists.',
  },
  {
    question: 'What internet speed do I need?',
    answer: 'We recommend a minimum internet speed of 10 Mbps for HD streaming and 25 Mbps for 4K content. A stable internet connection is more important than raw speed for the best viewing experience.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 24-hour free trial so you can test our service and ensure it meets your needs. Contact our support team to request your trial access.',
  },
  {
    question: 'How many devices can I use simultaneously?',
    answer: 'The number of simultaneous connections depends on your subscription plan. Basic plans support 1 device, Premium plans support 3 devices, and Ultimate plans support up to 5 devices streaming at the same time.',
  },
  {
    question: 'What channels are included?',
    answer: 'We offer a comprehensive selection of channels including sports, entertainment, movies, news, and international channels. The exact channel list varies by subscription plan, with our Ultimate plan offering access to over 8000 channels.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No, we offer flexible month-to-month subscriptions with no long-term commitment required. You can cancel or change your plan at any time.',
  },
  {
    question: 'How do I get support if I need help?',
    answer: 'We provide customer support through multiple channels including live chat, email, and our help center. Premium and Ultimate plan subscribers get priority support with faster response times.',
  },
];

const FAQ = () => {
  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
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
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Find answers to common questions about our IPTV service.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 50}
              sx={{
                '&:not(:last-child)': { mb: 2 },
                background: 'transparent',
                boxShadow: 1,
                '&:before': { display: 'none' },
                borderRadius: '12px !important',
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}
              >
                <Typography variant="h6" component="h3" color="text.primary">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
