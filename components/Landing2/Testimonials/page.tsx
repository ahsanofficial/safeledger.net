"use client"
import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import image1 from '../../../public/landing/Testimonial/image1.jpeg';
import image2 from '../../../public/landing/Testimonial/image2.jpeg';
import image3 from '../../../public/landing/Testimonial/image3.jpeg';
import styles from './style.module.css';
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatarUrl: image1.src,
    about: 'Boutique Hotel Owner'
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarUrl: image2.src,
    about:'Tech Entrepreneur'
  },
  {
    id: 3,
    name: "Alice Johnson",
    message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatarUrl: image3.src,
    about:'Healthcare Services Provider'
  },
  {
    id: 4,
    name: "Bob Johnson",
    message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    avatarUrl: image1.src,
    about: 'Boutique Hotel Owner'
  },
  {
    id: 5,
    name: "Eva Martinez",
    message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    avatarUrl: image2.src,
    about:'Tech Entrepreneur'
  },
  {
    id: 6,
    name: "Alice Johnson",
    message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatarUrl: image3.src,
    about:'Healthcare Services Provider'
  },
  {
    id: 7,
    name: "Bob Johnson",
    message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    avatarUrl: image1.src,
    about: 'Boutique Hotel Owner'
  },
  {
    id: 8,
    name: "Eva Martinez",
    message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    avatarUrl: image2.src,
    about:'Tech Entrepreneur',
  },
  {
    id: 9,
    name: "Alice Johnson",
    message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatarUrl: image3.src,
    about:'Healthcare Services Provider'
  },
  {
    id: 10,
    name: "Bob Johnson",
    message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    avatarUrl: image1.src,
    about: 'Boutique Hotel Owner'
  },
  {
    id: 11,
    name: "Eva Martinez",
    message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    avatarUrl: image2.src,
    about:'Tech Entrepreneur',
  },
  {
    id: 12,
    name: "Eva Martinez",
    message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    avatarUrl: image3.src,
    about:'Healthcare Services Provider'
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className={`pt-16 ${styles.bg}`} >
      <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center', }}>
        <Typography variant="h5" gutterBottom>
          Testimonials
        </Typography>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
          {testimonials
            .slice(currentIndex * testimonialsPerPage, (currentIndex + 1) * testimonialsPerPage)
            .map((testimonial) => (
              <Box key={testimonial.id} style={{ width: 600, height:270, display: 'flex', flexDirection: 'column', marginBottom: '16px', border: '2px solid #a09cff', padding: '16px', borderRadius: '20px' }}>
                <Avatar alt={testimonial.name} src={testimonial.avatarUrl} style={{ width: '64px', height: '64px', margin: 'auto' ,borderRadius: '40px',}} />
                <Typography variant="subtitle1" className='sm:text-3xl text-blue-600 text-2xl text-center'>
                  - {testimonial.name}
                </Typography>
                <Typography variant="subtitle1">
                  - {testimonial.about}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '8px', marginBottom: '8px', flex: 1 }}>
                  {testimonial.message}
                </Typography>

              </Box>
            ))}
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
          <IconButton onClick={prevTestimonial}>
            <NavigateBeforeIcon />
          </IconButton>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#000' : '#ccc',
                display: 'inline-block',
                margin: '0 4px',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
          <IconButton onClick={nextTestimonial}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>
    </div>

  );
};

export default TestimonialSlider;


            {/* <Grid container spacing={3} justifyContent="center" className={`pt-6 ${styles.bg}`}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="bg-transparent shadow-md rounded-xl">
                        <img src={image1.src} alt="Card 1" className="w-full h-48 object-cover rounded-t-lg" />
                        <CardContent>
                            <Typography variant="h6" gutterBottom className='text-blue-600 text-3xl mr-5'>
                                Registered Office Service
                            </Typography>
                            <Typography variant="body2" className='text-black'>
                                This service offers a prestigious address that companies can use as their official registration address with Companies House. It enhances  a business's professional image while ensuring privacy and compliance with statutory correspondence requirements.                            </Typography>
                            <Button variant="outlined" className='border-blue text-blue mt-5 rounded-full' fullWidth endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="bg-transparent shadow-md rounded-xl">
                        <img src={image2.src} alt="Card 2" className="w-full h-48 object-cover rounded-t-lg" />
                        <CardContent>
                            <Typography variant="h6" gutterBottom className='text-blue-600 text-3xl mr-10'>
                                Office Address Service
                            </Typography>
                            <Typography variant="body2" className='text-black px-1'>
                                SafeLedger offers a physical office address for businesses that enhances their corporate presence. This service is ideal for receiving official mail and helps  businesses maintain a professional this image in this commercial market .
                            </Typography>
                            <Button variant="outlined" className='border-blue text-blue mt-5 rounded-full' fullWidth endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="bg-transparent shadow-md rounded-xl">
                        <img src={image3.src} alt="Card 3" className="w-full h-48 object-cover rounded-t-lg" />
                        <CardContent>
                            <Typography variant="h6" gutterBottom className='text-blue-600 text-3xl'>
                                Dormant Company Account Service
                            </Typography>
                            <Typography variant="body2" className='text-black'>
                                For companies not currently trading, SafeLedger provides services to handle and file dormant accounts, ensuring they meet Companies House requirements without the administrative burden, thus maintaining their good standing . </Typography>
                            <Button variant="outlined" className='border-blue text-blue mt-5 rounded-full' fullWidth endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid> */}