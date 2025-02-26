import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const plans = [
  {
    title: 'Basic',
    price: '9.99',
    duration: 'month',
    features: [
      'Access to 1000+ channels',
      'HD quality streaming',
      'Watch on 1 device',
      '7-day replay',
      'Basic support',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium',
    price: '19.99',
    duration: 'month',
    features: [
      'Access to 5000+ channels',
      'HD & 4K quality',
      'Watch on 3 devices',
      '14-day replay',
      'Priority support',
      'VOD library access',
    ],
    buttonText: 'Get Premium',
    buttonVariant: 'contained',
    highlighted: true,
  },
  {
    title: 'Ultimate',
    price: '29.99',
    duration: 'month',
    features: [
      'Access to 8000+ channels',
      'HD & 4K quality',
      'Watch on 5 devices',
      '30-day replay',
      '24/7 VIP support',
      'Full VOD library access',
      'PPV events included',
    ],
    buttonText: 'Get Ultimate',
    buttonVariant: 'outlined',
  },
];

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box
      id="pricing"
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
            Choose Your Plan
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Select the perfect plan for your entertainment needs with our flexible pricing options.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          {plans.map((plan, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={4}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  ...(plan.highlighted && {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    transform: 'scale(1.05)',
                  }),
                  '&:hover': {
                    transform: plan.highlighted ? 'scale(1.05)' : 'scale(1.02)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: plan.highlighted ? 'inherit' : 'text.primary',
                    }}
                  >
                    {plan.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                    <Typography
                      component="span"
                      variant="h3"
                      color={plan.highlighted ? 'inherit' : 'text.primary'}
                      sx={{ fontWeight: 700 }}
                    >
                      ${plan.price}
                    </Typography>
                    <Typography
                      component="span"
                      variant="h6"
                      color={plan.highlighted ? 'inherit' : 'text.secondary'}
                      sx={{ ml: 1 }}
                    >
                      /{plan.duration}
                    </Typography>
                  </Box>
                  <List sx={{ mb: 2 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon
                            color={plan.highlighted ? 'inherit' : 'secondary'}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            '& .MuiListItemText-primary': {
                              color: plan.highlighted
                                ? 'inherit'
                                : 'text.primary',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 4, pt: 0 }}>
                  <Button
                    fullWidth
                    variant={plan.buttonVariant}
                    color={plan.highlighted ? 'secondary' : 'primary'}
                    size="large"
                  >
                    {plan.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
