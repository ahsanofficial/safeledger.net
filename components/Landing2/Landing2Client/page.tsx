"use client";
import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar, useMediaQuery } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import image1 from '../../../public/landing/Testimonial/image1.jpeg';
import image2 from '../../../public/landing/Testimonial/image2.jpeg';
import image3 from '../../../public/landing/Testimonial/image3.jpeg';
import styles from './style.module.css';
interface Testimonial {
    message: string;
  }

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-F.,",
      message: "As someone relatively new to the nuances of UK business laws, I found the guidance from SafeLedger absolutely invaluable. They helped me understand every step, ensured my business was fully compliant, and even advised on financial strategies that have greatly benefited us. I’m truly grateful for their patience and expertise.",
      avatarUrl: image1.src,
      about: 'Boutique Hotel Owner'
    },
    {
      id: 2,
      name: "Maria C.,",
      message: "Starting a tech company in the UK seemed daunting at first, but SafeLedger made it feel straightforward. Their team was not only professional but also genuinely supportive, ensuring I felt confident at every decision point. Their insights into local regulations and financial optimizations were crucial for us.",
      avatarUrl: image2.src,
      about: 'Tech Entrepreneur'
    },
    {
      id: 3,
      name: "John D",
      message: "We chose SafeLedger based on their excellent reputation, and they did not disappoint. Their team provided expert advice tailored to the healthcare sector, helping us navigate complex legal frameworks with ease. They're more than just advisors; they're partners in our journey.",
      avatarUrl: image3.src,
      about: 'Healthcare Services Provider'
    },
    {
      id: 4,
      name: "Li Wei Z.,",
      message: "The comprehensive services from SafeLedger have been a cornerstone of our expansion in the UK. From legal setups to financial planning, they have covered all bases, allowing us to focus on growing our business. Their multilingual team was a big plus for our diverse staff.",
      avatarUrl: image1.src,
      about: 'Retail Chain Executive'
    },
    {
      id: 5,
      name: "Rajesh K",
      message: "Launching our IT services in the UK was made significantly smoother thanks to the expert guidance from SafeLedger. Their deep understanding of both the local and international business landscapes was evident in their advice. They didn't just provide services; they built a trusting relationship that we truly value.",
      avatarUrl: image2.src,
      about: ' IT Services Company CEO'
    },
    {
      id: 6,
      name: "Anita P",
      message: "I was initially overwhelmed by the thought of expanding my fashion brand into the UK, but SafeLedger was there every step of the way. Their team was exceptionally understanding and adapted their strategies to align with our brand vision and ethos. Their support has been pivotal in navigating the cultural and regulatory complexities here.",
      avatarUrl: image3.src,
      about: 'Fashion Brand Founder'
    },
  ];

export const Landing2Client: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isDesktop = useMediaQuery('(min-width:600px)');
    const testimonialsPerPage = isDesktop ? 3 : 1;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
      };
    
      const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
      };

      const testimonial: Testimonial = { message: "Your long testimonial message goes here..." }
      const truncateText = (text: string, maxWords: number): string => {
        const words = text.trim().split(/\s+/);
        return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
      };
  return (
    <div className={`pt-16 ${styles.bg}`}>
    <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center' }}>
     
      <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', overflowX: 'auto', justifyContent: 'space-evenly' }}>
        {testimonials
          .slice(currentIndex * testimonialsPerPage, (currentIndex + 1) * testimonialsPerPage)
          .map((testimonial) => (
            <Box key={testimonial.id} style={{ width: '549px', height: '100%', maxWidth: isDesktop ? '549px' : '100%', display: 'flex', flexDirection: 'column', marginBottom: '16px', border: '4px solid #244BA8', padding: '16px', borderRadius: '20px' }}>
              <Avatar alt={testimonial.name} src={testimonial.avatarUrl} style={{ width: '64px', height: '64px', margin: 'auto', borderRadius: '40px' }} />
              <Typography variant="subtitle1" className='sm:text-base text-blue-800 text-base text-center mt-6'>
                - {testimonial.name}
              </Typography>
              <Typography className="text-base text-blue-600 text-center mx-auto" variant="subtitle1">
                - {testimonial.about}
              </Typography>
              <Typography className="text-sm text-blue-600 text-center mx-auto" variant="body1" style={{ marginTop: '8px', marginBottom: '8px', flex: 1 }}>
                {truncateText(testimonial.message, 20)}
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
  )
}

